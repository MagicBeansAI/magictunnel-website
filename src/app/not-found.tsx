import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout/main-layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <MainLayout hideFooter>
      <div className="flex min-h-[calc(100vh-14rem)] flex-col items-center justify-center py-12 text-center">
        <p className="mb-4 text-sm font-semibold text-primary">404</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Sorry, we couldn&#39;t find the page you&#39;re looking for.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact support</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
