import { createGlobalStyle } from 'styled-components';

// Define the theme interface
export interface Theme {
  colors: {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    full: string;
  };
  spacing: {
    [key: string]: string;
  };
  fontSize: {
    [key: string]: string;
  };
  fontWeights: {
    [key: string]: number;
  };
  lineHeights: {
    [key: string]: number | string;
  };
  shadows: {
    [key: string]: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    background: '#ffffff',
    foreground: '#111827',
    primary: '#2563eb',
    primaryForeground: '#f8fafc',
    secondary: '#f1f5f9',
    secondaryForeground: '#0f172a',
    muted: '#f1f5f9',
    mutedForeground: '#64748b',
    accent: '#f1f5f9',
    accentForeground: '#0f172a',
    destructive: '#ef4444',
    destructiveForeground: '#f8fafc',
    border: '#e2e8f0',
    input: '#e2e8f0',
    ring: '#2563eb',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  spacing: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
};

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    background: '#0f172a',
    foreground: '#f8fafc',
    primary: '#60a5fa',
    primaryForeground: '#1e293b',
    secondary: '#1e293b',
    secondaryForeground: '#f8fafc',
    muted: '#1e293b',
    mutedForeground: '#94a3b8',
    accent: '#1e293b',
    accentForeground: '#f8fafc',
    destructive: '#7f1d1d',
    destructiveForeground: '#f8fafc',
    border: '#1e293b',
    input: '#1e293b',
    ring: '#60a5fa',
  },
};

// Extend the default theme type
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: ${({ theme }) => theme.colors.background};
    --color-foreground: ${({ theme }) => theme.colors.foreground};
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-primary-foreground: ${({ theme }) => theme.colors.primaryForeground};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-secondary-foreground: ${({ theme }) => theme.colors.secondaryForeground};
    --color-muted: ${({ theme }) => theme.colors.muted};
    --color-muted-foreground: ${({ theme }) => theme.colors.mutedForeground};
    --color-accent: ${({ theme }) => theme.colors.accent};
    --color-accent-foreground: ${({ theme }) => theme.colors.accentForeground};
    --color-destructive: ${({ theme }) => theme.colors.destructive};
    --color-destructive-foreground: ${({ theme }) => theme.colors.destructiveForeground};
    --color-border: ${({ theme }) => theme.colors.border};
    --color-input: ${({ theme }) => theme.colors.input};
    --color-ring: ${({ theme }) => theme.colors.ring};
    
    --radius-sm: ${({ theme }) => theme.borderRadius.sm};
    --radius-md: ${({ theme }) => theme.borderRadius.md};
    --radius-lg: ${({ theme }) => theme.borderRadius.lg};
    --radius-xl: ${({ theme }) => theme.borderRadius.xl};
    --radius-2xl: ${({ theme }) => theme.borderRadius['2xl']};
    --radius-3xl: ${({ theme }) => theme.borderRadius['3xl']};
    --radius-full: ${({ theme }) => theme.borderRadius.full};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-color: var(--color-border);
  }

  html {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: 'kern' 1;
    font-kerning: normal;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    line-height: 1.5;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button, input {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  button, [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"], [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }
`;
