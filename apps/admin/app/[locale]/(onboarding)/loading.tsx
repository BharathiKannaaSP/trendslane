// app/[locale]/(onboarding)/loading.tsx

import { Skeleton } from "@workspace/ui/components/skeleton"

export default function Loading() {
  return (
    <div className="mx-auto mt-20 w-full">
      <div className="flex flex-col gap-6 xl:flex-row">
        {/* Stepper */}
        <aside className="xl:flex-1">
          <div className="flex gap-2 overflow-hidden xl:flex-col xl:gap-0">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex min-w-0 flex-1 flex-col items-center gap-2 rounded-lg border p-3 xl:mb-4 xl:flex-row"
              >
                <Skeleton className="size-8 shrink-0 rounded-full" />
                <Skeleton className="h-4 w-full max-w-20" />
              </div>
            ))}
          </div>
        </aside>

        {/* Main Card */}
        <main className="order-2 min-w-0 xl:flex-2">
          <div className="rounded-xl border p-4 md:p-6">
            <div className="space-y-6">
              <Skeleton className="h-8 w-40 md:w-56" />

              <div className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div className="flex w-full justify-between gap-3">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-28" />
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="order-3 xl:flex-1">
          <div className="space-y-4 rounded-xl border p-4 md:p-6">
            <Skeleton className="h-6 w-32" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>

            <Skeleton className="h-32 w-full rounded-lg md:h-40" />
          </div>
        </aside>
      </div>
    </div>
  )
}
