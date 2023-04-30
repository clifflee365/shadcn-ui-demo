import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { AccordionDemo } from "@/components/AccordionDemo"
import { AlertDemo } from "@/components/AlertDemo"
import { AlertDialogDemo } from "@/components/AlertDialogDemo"
import { AspectRatioDemo } from "@/components/AspectRatioDemo"
import { AvatarDemo } from "@/components/AvatarDemo"
import { BadgeDemo } from "@/components/BadgeDemo"
import Box from "@/components/Box"
import { ButtonDemo } from "@/components/ButtonDemo"
import { CalendarDatePicker } from "@/components/CalendarDatePickerDemo"
import { CalendarDatePickerWithPresets } from "@/components/CalendarDatePickerWithPresetsDemo"
import { CalendarDateRangePicker } from "@/components/CalendarDateRangePickerDemo"
import { CalendarDemo } from "@/components/CalendarDemo"
import { CardDemo } from "@/components/CardDemo"
import { CardWithForm } from "@/components/CardWithFormDemo"
import { CheckboxDemo } from "@/components/CheckboxDmeo"
import { CollapsibleDemo } from "@/components/CollapsibleDemo"
import { CommandCombobox } from "@/components/CommandComboboxDemo"
import { CommandDemo } from "@/components/CommandDemo"
import { CommandDialogDemo } from "@/components/CommandDialogDemo"
import { CommandDropdownMenu } from "@/components/CommandDropdownMenuDemo"
import { CommandMenu } from "@/components/CommandMenu"
import { CommandPopover } from "@/components/CommandPopoverDemo"
import { ContextMenuDemo } from "@/components/ContextMenuDemo"
import { DialogDemo } from "@/components/DialogDemo"
import { DropdownMenuDemo } from "@/components/DropdownMenuDemo"
import { DropdownMenuSimpleDemo } from "@/components/DropdownMenuSimpleDemo"
import { DropdownMenuCheckboxes } from "@/components/DropdownMenuCheckboxDemo"
import { DropdownMenuRadioGroupDemo } from "@/components/DropdownMenuRadioGroupDemo"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>

      <Box title="Accordion" desc="折叠组件">
        <AccordionDemo />
      </Box>
      <Box title="Alert" desc="Displays a callout for user attention.">
        <AlertDemo />
      </Box>
      <Box
        title="AlertDialog"
        desc="A modal dialog that interrupts the user with important content and expects a response."
      >
        <AlertDialogDemo />
      </Box>
      <Box title="Aspect Ratio" desc="Displays content within a desired ratio.">
        <AspectRatioDemo />
      </Box>
      <Box
        title="Avatar"
        desc="An image element with a fallback for representing the user."
      >
        <AvatarDemo />
      </Box>
      <Box
        title="Badge"
        desc="Displays a badge or a component that looks like a badge."
      >
        <BadgeDemo />
      </Box>

      <Box
        title="Button"
        desc="Displays a button or a component that looks like a button."
      >
        <ButtonDemo />
      </Box>

      <Box
        title="Calendar"
        desc="A date field component that allows users to enter and edit date."
      >
        <CalendarDemo />
        <section className="flex flex-col gap-4">
          <CalendarDatePicker />
          <CalendarDateRangePicker />
          <CalendarDatePickerWithPresets />
        </section>
      </Box>

      <Box title="Card" desc="卡片组件">
        <div className="flex gap-4">
          <CardDemo />
          <CardWithForm />
        </div>
      </Box>

      <Box
        title="Checkbox"
        desc="A control that allows the user to toggle between checked and not checked."
      >
        <CheckboxDemo />
      </Box>

      <Box
        title="Collapsible"
        desc="An interactive component which expands/collapses a panel."
        className="min-h-[400px]"
      >
        <CollapsibleDemo />
      </Box>

      <Box
        title="Command K"
        desc="Fast, composable, unstyled command menu for React."
      >
        <div className="flex flex-col gap-5">
          <div className="flex min-h-[350px] w-[400px] items-start justify-center p-10">
            <CommandDemo />
          </div>
          <CommandDialogDemo />
          <p>隐藏的快捷键:Cmd+K 唤起全局搜索菜单</p>
          <CommandMenu />
          <CommandCombobox />
          <CommandPopover />
          <CommandDropdownMenu />
        </div>
      </Box>

      <Box
        title="Context Menu"
        desc="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      >
        <ContextMenuDemo />
      </Box>

      <Box
        title="Dialog"
        desc="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
      >
        <DialogDemo />
      </Box>

      <Box
        title="Dropdown Menu"
        desc="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      >
        <div className="flex gap-4">
          <DropdownMenuDemo />
          <DropdownMenuSimpleDemo />
          <DropdownMenuCheckboxes />
          <DropdownMenuRadioGroupDemo/>
        </div>
      </Box>
    </section>
  )
}
