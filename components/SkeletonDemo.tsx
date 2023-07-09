'use client'

import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo(){
  return (
    <div className="flex flex-col gap-3">
    <Skeleton className="h-[20px] w-[200px] " />
    <Skeleton className="h-[20px] w-[100px] rounded-full" />
    </div>
  )
}

export function SkeletonDemo2() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
