'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export function MainNav() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-b transition-all duration-300',
        'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        isScrolled ? 'border-border/40 shadow-sm' : 'border-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              MagicTunnel
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/features"
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/blog"
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
          <ThemeToggle className="ml-2" />
        </div>
      </div>
    </header>
  );
}
