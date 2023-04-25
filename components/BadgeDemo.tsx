import { Badge , badgeVariants} from "@/components/ui/badge"
import Link from "next/link"

export function BadgeDemo() {
  return <section className="flex gap-2 ">
    <Badge>Badge</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="custom">自定义标签测试</Badge>

    <Link href="#" className={badgeVariants({ variant: "outline" })}>Next Link Badge</Link>
  </section>
}
