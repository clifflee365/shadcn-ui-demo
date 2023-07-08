import { Badge , badgeVariants} from "@/components/ui/badge"
import Link from "next/link"

export function BadgeDemo() {
  return <section className="flex flex-wrap gap-2">
    <Badge>Badge</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="custom">标签</Badge>

    <Link href="#" className={badgeVariants({ variant: "outline" })}>Link</Link>
  </section>
}
