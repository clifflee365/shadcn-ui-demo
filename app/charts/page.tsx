import React from "react"

import Box from "@/components/Box"

import FirstChart from "./FirstChart"

const ChartsPage = () => {
  return (
    <div className="container flex items-center gap-6 py-6 md:p-8">
      <Box title="First chart" className="w-1/2">
        <FirstChart />
      </Box>
    </div>
  )
}

export default ChartsPage
