import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-14rem)] flex-col items-center justify-center space-y-4 p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="space-y-4">
          <Skeleton className="mx-auto h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-64 mx-auto" />
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>
        </div>
        <div className="flex justify-center space-x-4 pt-2">
          <Skeleton className="h-10 w-24 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </div>
    </div>
  );
}
