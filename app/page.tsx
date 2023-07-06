import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
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
import { DropdownMenuCheckboxes } from "@/components/DropdownMenuCheckboxDemo"
import { DropdownMenuDemo } from "@/components/DropdownMenuDemo"
import { DropdownMenuRadioGroupDemo } from "@/components/DropdownMenuRadioGroupDemo"
import { DropdownMenuSimpleDemo } from "@/components/DropdownMenuSimpleDemo"
import { HoverCardDemo } from "@/components/HoverCardDemo"
import { InputDemo } from "@/components/InputDemo"
import { LabelDemo } from "@/components/LabelDemo"
import { MenubarDemo } from "@/components/MenubarDemo"
import { MenubarSimpleDemo } from "@/components/MenubarSimpleDemo"
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo"
import { NavigationMenuSimpleDemo } from "@/components/NavigationMenuSimpleDemo"
import { PopoverDemo, PopoverDemo2 } from "@/components/PopoverDemo"
import { ProgressDemo, ProgressDemoAnimate } from "@/components/ProgressDemo"
import { RadioGroupDemo } from "@/components/RadioGroupDemo"
import { ScrollAreaDemo, ScrollAreaDemo2 } from "@/components/ScrollAreaDemo"
import { SelectDemo, SelectDemo2 } from "@/components/SelectDemo"
import { SeparatorDemo, SeparatorDemo2 } from "@/components/SeparatorDemo"
import { SheetChangeSizeDemo, SheetDemo } from "@/components/SheetDemo"
import { SheetExamples } from "@/components/SheetExamples"
import { SkeletonDemo, SkeletonDemo2 } from "@/components/SkeletonDemo"
import { SliderDemo } from "@/components/SliderDemo"
import { SwitchDemo, SwitchDemo2 } from "@/components/SwitchDemo"
import { TableDemo, TableDemo2 } from "@/components/TableDemo"
import { TabsDemo, TabsDemo2 } from "@/components/TabsDemo"
import {
  TextareaDemo,
  TextareaWithButton,
  TextareaWithLabel,
  TextareaWithText,
} from "@/components/TextareaDemo"

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
          <DropdownMenuRadioGroupDemo />
        </div>
      </Box>

      <Box
        title="Hover Card"
        desc="For sighted users to preview content available behind a link."
      >
        <HoverCardDemo />
      </Box>

      <Box
        title="Input"
        desc="Displays a form input field or a component that looks like an input field."
      >
        <InputDemo />
      </Box>

      <Box
        title="Label"
        desc="Renders an accessible label associated with controls."
      >
        <LabelDemo />
      </Box>

      <Box
        title="Menubar"
        desc="A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands."
        contentClassName="flex gap-4"
      >
        <MenubarDemo />
        <MenubarSimpleDemo />
      </Box>

      <Box
        title="Navigation Menu"
        desc="A collection of links for navigating websites."
        contentClassName="flex gap-4"
      >
        <NavigationMenuDemo />
        <NavigationMenuSimpleDemo />
      </Box>
      <Box
        title="Popover"
        desc="Displays rich content in a portal, triggered by a button."
        contentClassName="flex gap-4"
      >
        <PopoverDemo />
        <PopoverDemo2 />
      </Box>

      <Box
        title="Progress"
        desc="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
        contentClassName="flex flex-col gap-5"
      >
        <ProgressDemo />
        <ProgressDemoAnimate />
      </Box>

      <Box
        title="Radio Group"
        desc="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
        contentClassName="flex flex-col"
      >
        <RadioGroupDemo />
      </Box>

      <Box
        title="ScrollArea"
        desc="Augments native scroll functionality for custom, cross-browser styling."
        contentClassName="flex gap-4"
      >
        <ScrollAreaDemo />
        <ScrollAreaDemo2 />
      </Box>

      <Box
        title="Select"
        desc="Displays a list of options for the user to pick from—triggered by a button."
      >
        <SelectDemo />
        <SelectDemo2 />
      </Box>

      <Box title="Separator" desc="Visually or semantically separates content.">
        <div className="flex flex-col gap-4">
          <SeparatorDemo />
          <SeparatorDemo2 />
        </div>
      </Box>

      <Box
        title="Sheet"
        desc="Extends the Dialog component to display content that complements the main content of the screen."
        contentClassName="flex flex-col gap-4"
      >
        <SheetDemo />
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tighter">
          Change Size
        </h3>
        <SheetChangeSizeDemo />
        <SheetExamples />
      </Box>

      <Box
        title="Skeleton"
        desc="Use to show a placeholder while content is loading."
        contentClassName="flex flex-col gap-4"
      >
        <SkeletonDemo />
        {/* <Separator className="h-30" orientation="vertical" /> */}
        <Separator />
        <SkeletonDemo2 />
      </Box>

      <Box
        title="Slider"
        desc="An input where the user selects a value from within a given range."
      >
        <SliderDemo />
      </Box>

      <Box
        title="Switch"
        desc="A control that allows the user to toggle between checked and not checked."
        contentClassName="flex space-x-4"
      >
        <SwitchDemo />
        <SwitchDemo2 />
      </Box>

      <Box title="Table" desc="A responsive table component.">
        <TableDemo />
        <TableDemo2 />
      </Box>

      <Box
        title="Tabs"
        desc="A set of layered sections of content—known as tab panels—that are displayed one at a time.一组分层的内容部分，被称为选项卡面板，一次只显示一个。"
      >
        <TabsDemo />
        <TabsDemo2 />
      </Box>

      <Box
        title="Textarea"
        desc="Displays a form textarea or a component that looks like a textarea."
        contentClassName="space-y-4"
      >
        <TextareaDemo />
        <TextareaWithLabel />
        <TextareaWithText />
        <TextareaWithButton />
      </Box>
    </section>
  )
}
