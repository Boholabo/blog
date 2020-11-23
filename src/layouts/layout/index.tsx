import React, { FC, ReactNode } from "react"
import "../../styles/global.css"

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
    </div>
  )
}

export default Layout
