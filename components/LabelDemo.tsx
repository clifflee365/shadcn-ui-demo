import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import { Input } from "./ui/input"


export function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}

export function LabelDemoAssociateInput() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input id="email111" type="email" placeholder="Email" />

        <Label htmlFor="email111">Your email address</Label>
      </div>
    </div>
  )
}
