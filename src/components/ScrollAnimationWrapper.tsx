import { useState, useEffect, useRef, type ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: string;
  key?: string | number;
}

export function ScrollAnimationWrapper({
  children,
  className,
  delay = 'duration-1000',
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all transform',
        delay,
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 md:translate-y-10',
        className
      )}
    >
      {children}
    </div>
  );
}
