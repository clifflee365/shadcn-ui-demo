import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import { Input } from "./ui/input"

export function LabelDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms11" />
        <Label htmlFor="terms11">Accept terms and conditions</Label>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input id="email" type="email" placeholder="Email" />

        <Label htmlFor="email">Your email address</Label>
      </div>
    </div>
  )
}
