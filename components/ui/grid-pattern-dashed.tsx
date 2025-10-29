"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "@/components/ui/grid-pattern"

export function GridPatternDashed() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"6 4"}
        className={cn(
          "fill-muted-foreground/25 stroke-muted-foreground/35",
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  )
}