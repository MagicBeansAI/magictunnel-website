'use client';

import * as React from 'react';
import { useTheme as useNextTheme } from 'next-themes';

type Theme = 'light' | 'dark' | 'system';

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isMounted: boolean;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = React.useState(false);
  const { theme = 'system', setTheme, resolvedTheme = 'light' } = useNextTheme();

  // Ensure we're in the browser
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  // Only render the content after the theme is mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme as Theme,
        resolvedTheme: resolvedTheme as 'light' | 'dark',
        setTheme: setTheme as (theme: Theme) => void,
        toggleTheme,
        isMounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
