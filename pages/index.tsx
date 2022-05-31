import DarkModeButton from 'components/Button/DarkModeButton';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <p className="text-xl text-green-600">Hello world</p>
      <DarkModeButton />
    </div>
  );
};

export default Home;
