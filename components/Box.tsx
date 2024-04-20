import { cn } from "@/lib/utils"

interface IBoxProps {
  children: React.ReactNode
  title?: string
  desc?: string
  className?: string
  contentClassName?: string
  hasContentBorder?: boolean
  hideBorder?: boolean
}
const Box = ({
  className,
  contentClassName,
  children,
  title,
  desc,
  hasContentBorder,
  hideBorder,
}: IBoxProps) => {
  return (
    <div className={cn("flex flex-col", className, !hideBorder && 'rounded-md border p-4')}>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {title}
      </h2>
      <p className="mb-4 leading-7 [&:not(:first-child)]:mt-6">{desc}</p>
      {/* <div className="mt-4 flex rounded-md border p-4"> */}
      <div
        className={cn(
          "box-content",
          contentClassName,
          hasContentBorder && "overflow-hidden rounded-lg border border-border bg-background",
        )}
      >
        {children}
      </div>
    </div>
  )
}
export default Box
