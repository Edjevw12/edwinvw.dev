import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Meta } from './Meta'
import { Nav } from './Nav'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="px-4vw lg:px-7vw">
      <Meta />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
