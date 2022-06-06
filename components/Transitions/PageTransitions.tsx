import { motion, useReducedMotion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.33,
      ease: [0.55, 1, 0.82, 1],
    },
  },
};

export const PageTransition = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <>{children}</>;
  return (
    <motion.div initial="initial" animate="enter" variants={variants}>
      {children}
    </motion.div>
  );
};
