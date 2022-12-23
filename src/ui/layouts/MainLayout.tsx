import React, { ReactElement } from 'react'

export const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <div className="container flex-grow-1">{children}</div>
      <footer className="container">Y un footer!</footer>
    </>
  )
}
