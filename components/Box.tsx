interface IBoxProps {
  title?: string
  desc?: string
  children: React.ReactNode
}
const Box = ({ children, title, desc }: IBoxProps) => {
  return (
    <div className="flex flex-col rounded-md border p-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {title}
      </h2>
      <p className="mb-4 leading-7 [&:not(:first-child)]:mt-6">{desc}</p>
      {/* <div className="mt-4 flex rounded-md border p-4"> */}
        <div>
        {children}
        </div>
    </div>
  )
}
export default Box
