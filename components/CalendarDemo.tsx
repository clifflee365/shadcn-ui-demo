// "use client"

// import * as React from "react"

// import { Calendar } from "@/components/ui/calendar"

// export function CalendarDemo() {
//   const [date, setDate] = React.useState<Date | undefined>(new Date())

//   return (
//     <div className="flex min-h-[350px] items-center justify-center p-10">
//       {/* <div> */}
//       <Calendar
//         mode="single"
//         selected={date}
//         onSelect={setDate}
//         className="rounded-md border"
//         />

//       </div>
//   )
// }

"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="flex rounded-md border"
    />
  )
}
