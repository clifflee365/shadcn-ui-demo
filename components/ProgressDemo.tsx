"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

import { Button } from "./ui/button"

export function ProgressDemo() {
  return <Progress value={33} />
}

export function ProgressDemoAnimate() {
  const [progress, setProgress] = React.useState(13)

  // React.useEffect(() => {
  //   const timer = setTimeout(() => setProgress(66), 500)
  //   return () => clearTimeout(timer)
  // }, [])

  // const handleChange = () => {

  // }

  return (
    <div className="flex items-center gap-4">
      <Progress value={progress} className="w-[60%]" />
      <Button onClick={() => setProgress(10)}>To 10%</Button>
      <Button onClick={() => setProgress(66)}>To 66%</Button>
      <Button onClick={() => setProgress(100)}>To 100%</Button>
    </div>
  )
}
