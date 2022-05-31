import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import DarkModeButton from '../Button/DarkModeButton';

export const Nav = () => {
  return (
    <div className="px-3vw lg:px-5vw py-9 lg:py-12">
      <nav
        id="header"
        role="navigation"
        className="text-primary mx-auto flex max-w-8xl items-center justify-between"
      >
        <div>
          <Link href="/">
            <a className="text-2xl">
              <span className="text-main text-3xl">e</span>dwinvw.dev
            </a>
          </Link>
        </div>
        <div className="flex gap-8 content-center">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li className="align-text-center" key={link.title}>
                {link.title}
              </li>
            ))}
          </ul>
          <DarkModeButton />
        </div>
      </nav>
    </div>
  );
};
