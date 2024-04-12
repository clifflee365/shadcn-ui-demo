import React from "react"

import { LoginForm } from "./Authentication01"

const BlocksPage = () => {
  return (
    <div className="p-10">
      <h1 className="mb-8 text-xl font-semibold">authentication-01</h1>
      <div className="relative flex items-center justify-center rounded-lg border border-border bg-background p-10">
        <LoginForm />
      </div>
    </div>
  )
}

export default BlocksPage
