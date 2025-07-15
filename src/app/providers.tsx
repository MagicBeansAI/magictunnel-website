'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/theme';

interface ProvidersProps {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
  storageKey?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function Providers({ 
  children, 
  defaultTheme = 'system',
  storageKey = 'magictunnel-theme',
  enableSystem = true,
  disableTransitionOnChange = true,
  ...props 
}: ProvidersProps) {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  // Prevent flash of unstyled content
  React.useEffect(() => {
    document.body.classList.add('theme-loaded');
    return () => {
      document.body.classList.remove('theme-loaded');
    };
  }, []);
  
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }
  
  return (
    <NextThemesProvider
      defaultTheme={defaultTheme}
      storageKey={storageKey}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      attribute="class"
      enableColorScheme={false}
      {...props}
    >
      <StyledComponentsProvider theme={lightTheme}>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </StyledComponentsProvider>
    </NextThemesProvider>
  );
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useNextTheme();
  const theme = resolvedTheme === 'dark' ? darkTheme : lightTheme;
  
  return (
    <StyledComponentsProvider theme={theme}>
      {children}
    </StyledComponentsProvider>
  );
}

// Simple hook to get the current theme
function useTheme() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, resolvedTheme } = useNextTheme();
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  return {
    theme: theme as 'light' | 'dark' | 'system',
    resolvedTheme: (resolvedTheme as 'light' | 'dark') || 'light',
    mounted,
  };
}

// Re-export the next-themes useTheme hook with a different name
export { useNextTheme };
