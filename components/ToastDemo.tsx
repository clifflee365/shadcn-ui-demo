'use client'

import { useToast } from "@/components/ui/use-toast"
import { Button } from "./ui/button"
import { ToastAction } from "@/components/ui/toast"

export const ToastDemo = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show ToastWithTitle
    </Button>
  )
}


export function ToastSimple() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show ToastSimple
    </Button>
  )
}


export function ToastWithAction() {
  const { toast } = useToast()
  const handleAction = () => {
    toast({
      title: '✅ Tray ok',
      duration: 3000,
      // description: 'Toast Try again'
    })
  }

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again" onClick={handleAction}>Try again</ToastAction>,
        })
      }}
    >
      Show ToastWithAction
    </Button>
  )
}


export function ToastDestructive() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      Show ToastDestructive
    </Button>
  )
}
