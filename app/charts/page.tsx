import React from "react"

import Box from "@/components/Box"

import AreaChartDemo from "./AreaChartDemo"
import BarChartDemo from "./BarChartDemo"
import FirstChart from "./FirstChart"
import PieChartDemo from "./PieChartDemo"

const ChartsPage = () => {
  return (
    <div className="container grid w-1/2 items-center gap-6 py-6 md:p-8">
      <Box title="First chart">
        <FirstChart />
      </Box>
      <AreaChartDemo />
      <BarChartDemo />
      <PieChartDemo />
    </div>
  )
}

export default ChartsPage
