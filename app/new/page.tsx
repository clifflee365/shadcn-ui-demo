import React from "react"


import Box from "@/components/Box"
import {
  CarouselAPIDemo,
  CarouselDemo,
  CarouselOrientation,
  CarouselSize,
  CarouselSpacing,
} from "@/components/CarouselDemo"

const NewComponents = () => {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:p-8">
      <Box
        title="Carousel"
        desc="A carousel with motion and swipe built using Embla."
        contentClassName="flex flex-col gap-4 items-center justify-center"
      >
        <CarouselDemo />
        <CarouselSize />
        <CarouselSpacing />
        <div className="w-full max-w-xs py-8">
          <CarouselOrientation />
        </div>
        <CarouselAPIDemo/>
      </Box>
    </div>
  )
}

export default NewComponents
