'use client';

import { motion, MotionProps, useReducedMotion } from 'framer-motion';
import { createContext, ReactNode, useContext } from 'react';

interface FadeInProps extends MotionProps {
  children?: ReactNode;
  className?: string;
}

interface FadeInStaggerProps extends FadeInProps {
  faster?: boolean;
  className?: string;
}

const FadeInStaggerContext = createContext<boolean>(false);

const viewport = { once: true, margin: '0px 0px -200px' };

export function FadeIn(props: FadeInProps) {
  const shouldReduceMotion: boolean = useReducedMotion() ?? false;
  const isInStaggerGroup: boolean = useContext(FadeInStaggerContext) || false;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({
  faster = false,
  className,
  ...props
}: FadeInStaggerProps) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
