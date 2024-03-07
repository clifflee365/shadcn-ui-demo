import React from "react"

import Box from "@/components/Box"
import {
  CarouselAPIDemo,
  CarouselDemo,
  CarouselOrientation,
  CarouselSize,
  CarouselSpacing,
} from "@/components/CarouselDemo"
import { DrawerDemo, DrawerDemoWithChart } from "@/components/DrawerDemo"
import { DrawerDialogDemo } from "@/components/DrawerDialogDemo"
import { PaginationDemo } from "@/components/PaginationDemo"

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
        <CarouselAPIDemo />
      </Box>
      <Box
        title="Drawer"
        desc="A drawer component for React."
        contentClassName="flex flex-col gap-2"
      >
        <DrawerDemoWithChart />
        <DrawerDemo />
        <div className="flex flex-col gap-2">
          <h3>Responsive Dialog</h3>
          <p>
            You can combine the Dialog and Drawer components to create a
            responsive dialog. This renders a Dialog component on desktop and a
            Drawer on mobile.
          </p>
          <DrawerDialogDemo />
        </div>
      </Box>

      <Box
        title="Pagination"
        desc="Pagination with page navigation, next and previous links."
      >
        <PaginationDemo />
      </Box>
    </div>
  )
}

export default NewComponents
