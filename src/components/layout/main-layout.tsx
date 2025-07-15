'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { MainNav } from '@/components/layout/main-nav';
import { SiteFooter } from '@/components/layout/site-footer';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  hideFooter?: boolean;
}

export function MainLayout({
  children,
  className,
  hideFooter = false,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className={cn('flex-1 pt-16', className)}>{children}</main>
      {!hideFooter && <SiteFooter />}
    </div>
  );
}
