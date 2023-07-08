import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"


export function ContextMenuSimple(){
  return (
    <ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[200px] items-center justify-center rounded-md border border-dashed bg-muted text-sm">Right click</ContextMenuTrigger>

  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>

  )
}
