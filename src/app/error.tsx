'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout/main-layout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error boundary caught an error:', error);
  }, [error]);

  return (
    <MainLayout hideFooter>
      <div className="flex min-h-[calc(100vh-14rem)] flex-col items-center justify-center px-4 py-12 text-center">
        <Alert className="w-full max-w-md" variant="destructive">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle>Something went wrong!</AlertTitle>
          </div>
          <AlertDescription className="mt-2">
            {error.message || 'An unexpected error occurred. Please try again.'}
          </AlertDescription>
          <div className="mt-4 flex justify-center">
            <Button
              variant="outline"
              onClick={() => reset()}
              className="inline-flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try again
            </Button>
          </div>
        </Alert>
      </div>
    </MainLayout>
  );
}
