'use client'

import { Slider } from "@/components/ui/slider"


export function SliderDemo(){
  return (
    <Slider defaultValue={[33]} max={100} step={1}/>
  )
}

import { cn } from "@/lib/utils"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo2({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}
