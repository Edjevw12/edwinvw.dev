import { ButtonVariant } from '@/lib/types';

type Props = {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ variant, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      aria-label="button"
      type="button"
      className={`px-8 py-2.5 dark:bg-red-600 bg-blue-800 leading-tight text-sm text-white 
      rounded-full shadow-md hover:scale-105`}
    >
      {children}
    </button>
  );
};

export default Button;
