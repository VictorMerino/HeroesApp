import React, { ReactElement, ReactFragment } from 'react'

export const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <div className="container" style={{ flex: 1 }}>
        {children}
      </div>
      <footer className="container">Y un footer!</footer>
    </>
  )
}
