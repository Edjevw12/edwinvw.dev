import { navLinks } from '@/data/navLinks'
import Link from 'next/link'
import { Button } from '@/components/Button/Button'
import { DarkModeButton } from '@/components/Button/DarkModeButton'
import { Logo } from '@/components/icons/logo'

export const Nav = () => {
  return (
    <div className="py-9 lg:py-12">
      <div
        id="header"
        role="navigation"
        className="text-primary mx-auto flex max-w-8xl items-center justify-between"
      >
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center">
            <nav>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <a className="hover:text-red-600">{link.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Button variant="primary" onClick={() => alert('contact')}>
            Contact
          </Button>
          <DarkModeButton />
        </div>
      </div>
    </div>
  )
}
