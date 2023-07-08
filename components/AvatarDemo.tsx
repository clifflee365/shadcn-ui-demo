import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
      src="https://github.com/shadcn.png"
      // src="https://picsum.photos/200/200"
      alt="@shadcn" />
      <AvatarFallback>LF</AvatarFallback>
    </Avatar>
  )
}


export function AvatarDemoOnlyFallback() {
  return (
    <Avatar>
      <AvatarFallback>LF</AvatarFallback>
    </Avatar>
  )
}
