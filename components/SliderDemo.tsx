'use client'

import { Slider } from "@/components/ui/slider"


export function SliderDemo(){
  return (
    <Slider defaultValue={[33]} max={100} step={1}/>
  )
}
