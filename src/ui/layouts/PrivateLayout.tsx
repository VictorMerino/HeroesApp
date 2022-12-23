import React, { ReactElement } from 'react'

export const PrivateLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <div className="container flex-grow-1">{children}</div>
      <footer className="container">El footer del área privada!</footer>
    </>
  )
}
