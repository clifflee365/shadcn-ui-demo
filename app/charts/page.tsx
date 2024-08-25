import React from "react"

import Box from "@/components/Box"

import AreaChartDemo from "./AreaChartDemo"
import AreaChartInteractive from "./AreaChartInteractive"
import BarChartDemo from "./BarChartDemo"
import FirstChart from "./FirstChart"
import PieChartDemo from "./PieChartDemo"

const ChartsPage = () => {
  return (
    <div className="container flex flex-col items-center gap-6 py-6 md:p-8">
      <div className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
        <Box title="First chart">
          <FirstChart />
        </Box>
        <AreaChartDemo />
        <BarChartDemo />
        <PieChartDemo />
      </div>
      <AreaChartInteractive />
    </div>
  )
}

export default ChartsPage
