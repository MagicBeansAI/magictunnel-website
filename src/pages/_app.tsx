import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles, Theme } from '@/styles/theme';


// Extend the Window interface to include theme-related properties
declare global {
  interface Window {
    __theme?: string;
    __onThemeChange?: (theme: string) => void;
    __setPreferredTheme?: (theme: string) => void;
  }
}

// Helper function to safely get the theme from localStorage
const getStoredTheme = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('theme');
};

// Helper function to get the system theme preference
const getSystemTheme = (): 'dark' | 'light' => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(() => {
    const storedTheme = getStoredTheme();
    return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : getSystemTheme();
  });

  useEffect(() => {
    // Set up theme change listener
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const storedTheme = getStoredTheme();
      // Only update if user hasn't set a preference
      if (!storedTheme || !['dark', 'light'].includes(storedTheme)) {
        setCurrentTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    setMounted(true);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  // Handle theme changes from next-themes across tabs before any early return
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme' && (e.newValue === 'dark' || e.newValue === 'light')) {
        setCurrentTheme(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        <style jsx global>{`
          body {
            visibility: hidden;
          }
        `}</style>
      </div>
    );
  }

  const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <StyledComponentsThemeProvider theme={theme}>
        <GlobalStyles />
        <div className={`font-sans`}>
          <Component {...pageProps} />
        </div>
      </StyledComponentsThemeProvider>
    </NextThemesProvider>
  );
}
