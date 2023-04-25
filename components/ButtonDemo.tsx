import { Button, buttonVariants } from "@/components/ui/button"
import { Mail,Loader2 } from "lucide-react"

import Link from "next/link"

export function ButtonDemo() {
  return <section className="flex flex-wrap gap-2">
    <Button>Button</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>

    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>

    <Link href="#" className={buttonVariants({ variant: "outline" })}>Next Link</Link>
  </section>
}
