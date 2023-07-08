import React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Box from "@/components/Box"

const Playground = () => {
  return (
    <Box title="学习 grid 布局" desc="学习 gripd 布局各种参数">
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" value="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input
            id="username"
            placeholder="请输入username"
            value=""
            className="col-span-3"
          />
        </div>
      </div>

      <h3>为何简单的 input 组件也要用 grid 布局?</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
    </Box>
  )
}

export default Playground
