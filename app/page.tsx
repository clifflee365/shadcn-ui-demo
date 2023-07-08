import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { AccordionDemo } from "@/components/AccordionDemo"
import { AlertDemo } from "@/components/AlertDemo"
import { AlertDialogDemo } from "@/components/AlertDialogDemo"
import { AspectRatioDemo } from "@/components/AspectRatioDemo"
import { AvatarDemo, AvatarDemoOnlyFallback } from "@/components/AvatarDemo"
import { BadgeDemo } from "@/components/BadgeDemo"
import Box from "@/components/Box"
import { ButtonDemo } from "@/components/ButtonDemo"
import { CalendarDemo } from "@/components/CalendarDemo"
import { CalendarForm } from "@/components/CalendarForm"
import { CardExample } from "@/components/CardExample"
import { CardSimple } from "@/components/CardSimple"
import { CardWithForm } from "@/components/CardWithFormDemo"
import {
  CheckboxDemo,
  CheckboxDisabled,
  CheckboxWithText,
} from "@/components/CheckboxDmeo"
import { CheckboxReactHookFormMultiple } from "@/components/CheckboxReactHookFormMultiple"
import { CheckboxReactHookFormSingle } from "@/components/CheckboxReactHookFormSingle"
import {
  CollapsibleCustom,
  CollapsibleDemo,
  CollapsibleSimple,
} from "@/components/CollapsibleDemo"
import { ComboboxDemo } from "@/components/ComboboxDemo"
import { ComboboxDropdownMenu } from "@/components/ComboboxDropdownMenu"
import { ComboboxForm } from "@/components/ComboboxForm"
import { ComboboxPopover } from "@/components/ComboboxPopover"
import { CommandDemo, CommandSimpleDemo } from "@/components/CommandDemo"
import { CommandDialogDemo } from "@/components/CommandDialogDemo"
import { CommandMenu } from "@/components/CommandMenu"
import { ContextMenuDemo } from "@/components/ContextMenuDemo"
import { ContextMenuSimple } from "@/components/ContextMenuSimple"
import { DatePickerDemo } from "@/components/DatePickerDemo"
import { DatePickerForm } from "@/components/DatePickerForm"
import { DatePickerWithPresets } from "@/components/DatePickerWithPresets"
import { DatePickerWithRange } from "@/components/DatePickerWithRange"
import {
  DialogDemo,
  DialogSimple,
  DialogWithContextMenu,
} from "@/components/DialogDemo"
import { DropdownMenuCheckboxes } from "@/components/DropdownMenuCheckboxDemo"
import { DropdownMenuDemo } from "@/components/DropdownMenuDemo"
import { DropdownMenuRadioGroupDemo } from "@/components/DropdownMenuRadioGroupDemo"
import { DropdownMenuSimpleDemo } from "@/components/DropdownMenuSimpleDemo"
import { HoverCardDemo, HoverCardSimple } from "@/components/HoverCardDemo"
import { InputDemo, InputDisabled, InputFile, InputWithButton, InputWithLabel, InputWithLabelAndDesc } from "@/components/InputDemo"
import { LabelDemo, LabelDemoAssociateInput } from "@/components/LabelDemo"
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
import {
  ToastDemo,
  ToastDestructive,
  ToastSimple,
  ToastWithAction,
} from "@/components/ToastDemo"
import {
  ToggleDemo,
  ToggleDisabled,
  ToggleLg,
  ToggleOutline,
  ToggleSm,
  ToggleWithText,
} from "@/components/ToggleDemo"
import { TooltipDemo } from "@/components/TooltipDemo"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:p-8">
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
      <div className="flex flex-wrap gap-4">
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

      <Box
        title="Accordion"
        desc="A vertically stacked set of interactive headings that each reveal a section of content. 一个垂直堆叠的互动标题集合，每个标题都会展示一段内容。"
      >
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
        contentClassName="flex gap-4"
      >
        <AvatarDemo />
        <AvatarDemoOnlyFallback />
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
        desc="A date field composnent that allows users to enter and edit date."
        contentClassName="flex flex-col gap-4"
      >
        <CalendarDemo />
        <h4>Calendar 表单示例:</h4>
        <CalendarForm />
      </Box>

      <Box title="Card" desc="卡片组件">
        <div className="flex flex-col gap-4">
          <CardSimple />
          <CardExample />
          <CardWithForm />
        </div>
      </Box>

      <Box
        title="Checkbox"
        desc="A control that allows the user to toggle between checked and not checked."
        contentClassName="flex flex-col gap-4"
      >
        <CheckboxDemo />
        <CheckboxWithText />
        <CheckboxDisabled />
        <Separator />
        <CheckboxReactHookFormSingle />
        <Separator />
        <CheckboxReactHookFormMultiple />
      </Box>

      <Box
        title="Collapsible"
        desc="An interactive component which expands/collapses a panel."
        className="min-h-[400px]"
        contentClassName="flex flex-col gap-4"
      >
        <CollapsibleSimple />
        <CollapsibleCustom />
        <CollapsibleDemo />
      </Box>

      <Box
        title="Combobox"
        desc="Autocomplete input and command palette with a list of suggestions."
        contentClassName="flex flex-col gap-4"
      >
        <ComboboxDemo />
        <ComboboxPopover />
        <ComboboxDropdownMenu />
        <ComboboxForm />
      </Box>

      <Box
        title="Command K"
        desc="Fast, composable, unstyled command menu for React."
      >
        <div className="flex flex-col gap-5">
          <CommandSimpleDemo />
          <CommandDemo />
          {/* <div className="flex min-h-[350px] max-w-[400px] items-start justify-center p-2">
          </div> */}
          <CommandDialogDemo />
          <p>隐藏的快捷键:Cmd+K 唤起全局搜索菜单</p>
          <CommandMenu />
        </div>
      </Box>
      <Box
        title="Context Menu"
        desc="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
        contentClassName="space-y-4"
      >
        <ContextMenuSimple />
        <ContextMenuDemo />
      </Box>
      {/* todo Data Table */}
      <Box
        title="Date Picker"
        desc="A date picker component with range and presets."
      >
        <section className="flex flex-col gap-4">
          <DatePickerDemo />
          <DatePickerWithRange />
          <DatePickerWithPresets />
          <DatePickerForm />
        </section>
      </Box>

      <Box
        title="Dialog"
        desc="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
        contentClassName="flex flex-col gap-4"
      >
        <DialogSimple />
        <DialogDemo />
        <DialogWithContextMenu />
      </Box>

      <Box
        title="Dropdown Menu"
        desc="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      >
        <div className="flex flex-wrap gap-4">
          <DropdownMenuSimpleDemo />
          <DropdownMenuCheckboxes />
          <DropdownMenuRadioGroupDemo />
          <DropdownMenuDemo />
        </div>
      </Box>
      {/* todo Form */}
      <Box
        title="Hover Card"
        desc="For sighted users to preview content available behind a link."
        contentClassName="flex justify-around items-center gap-4"
      >
        <HoverCardSimple/>
        <HoverCardDemo />
      </Box>

      <Box
        title="Input"
        desc="Displays a form input field or a component that looks like an input field."
        contentClassName="flex flex-col gap-3"
        >
        <InputDemo />
        <InputFile/>
        <InputDisabled/>
        <InputWithLabel/>
        <InputWithLabelAndDesc/>
        <InputWithButton/>
      </Box>


      <Box
        title="Label"
        desc="Renders an accessible label associated with controls."
        contentClassName="flex flex-col gap-3"
      >
        <LabelDemo />
        <LabelDemoAssociateInput/>
      </Box>
{/*
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

      <Box
        title="Toast"
        desc="A succinct message that is displayed temporarily."
        contentClassName="space-y-2"
      >
        <div className="flex flex-wrap gap-2">
          <ToastSimple />
          <ToastDemo />
          <ToastWithAction />
          <ToastDestructive />
        </div>
        <div>
          支持 position 的 PR 还未 合并:{" "}
          <Link href="https://github.com/shadcn/ui/pull/552">
            feat(toast): support position setting #552
          </Link>
        </div>
      </Box>

      <Box
        title="Toggle"
        desc="A two-state button that can be either on or off."
        contentClassName="flex gap-2"
      >
        <ToggleDemo />
        <ToggleOutline />
        <ToggleWithText />
        <ToggleSm />
        <ToggleLg />
        <ToggleDisabled />
      </Box>

      <Box
        title="Tooltip"
        desc="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
      Radix UI"
      >
        <TooltipDemo />
      </Box> */}
    </section>
  )
}
