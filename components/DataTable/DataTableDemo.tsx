import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

// async function getData(): Promise<Payment[]> {
function getData():Payment[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
      id: "feng123",
      amount: 101,
      status: "processing",
      email: "windylee404@gmail.com",
    },
    // ...
  ]
}

// export default async function DataTableDemo() {
export default function DataTableDemo() {
  // const data = await getData()
  const data = getData()

  return (
    <div className="container mx-auto py-4">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
