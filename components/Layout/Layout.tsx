import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Meta } from './Meta';
import { Nav } from './Nav';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Meta />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
