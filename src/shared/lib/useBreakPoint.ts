import { useState, useEffect } from 'react';

type BreakPoint = 'mobile' | 'desktop';

export function useBreakPoint() {
  const [breakPoint, setBreakPoint] = useState<BreakPoint>(
    window.innerWidth < 768 ? 'mobile' : 'desktop'
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakPoint(window.innerWidth < 768 ? 'mobile' : 'desktop');
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakPoint;
}
