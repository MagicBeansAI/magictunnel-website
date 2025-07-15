// Add type declarations for modules
declare module '@/components/ui/skeleton' {
  import { HTMLAttributes } from 'react';
  export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}
  export const Skeleton: React.FC<SkeletonProps>;
}

declare module '@/components/ui/alert' {
  import { HTMLAttributes, ReactNode } from 'react';
  
  export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'destructive';
  }
  
  export const Alert: React.FC<AlertProps>;
  export const AlertTitle: React.FC<{ children: ReactNode }>;
  export const AlertDescription: React.FC<{ children: ReactNode }>;
}

// Add type declarations for other UI components
declare module '@/components/ui/button' {
  import { ButtonHTMLAttributes } from 'react';
  
  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
  }
  
  const Button: React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  >;
  
  export { Button };
}

// Add type declarations for layout components
declare module '@/components/layout/main-layout' {
  import { ReactNode } from 'react';
  
  export interface MainLayoutProps {
    children: ReactNode;
    className?: string;
    hideFooter?: boolean;
  }
  
  export const MainLayout: React.FC<MainLayoutProps>;
}

declare module '@/components/layout/main-nav' {
  export const MainNav: React.FC;
}

declare module '@/components/layout/site-footer' {
  export const SiteFooter: React.FC<{ className?: string }>;
}

// Add type declarations for context
declare module '@/context/theme-context' {
  import { ReactNode } from 'react';
  
  export function ThemeProvider({ children }: { children: ReactNode }): JSX.Element;
  export function useTheme(): {
    theme: 'light' | 'dark' | 'system';
    setTheme: (theme: 'light' | 'dark' | 'system') => void;
    resolvedTheme: 'light' | 'dark';
  };
}
