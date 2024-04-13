import { useEffect } from 'react';
import { UseHideAnimation } from '@Interfaces/index';

const useHideAnimation = ({
  startAnimation,
  timeOutDelay,
  callback,
}: UseHideAnimation) => {
  useEffect(() => {
    if (!startAnimation) {
      return;
    }

    const clearSetTimeout = setTimeout(() => {
      callback();
    }, timeOutDelay);

    return () => {
      clearTimeout(clearSetTimeout);
    };
  }, [startAnimation]);

  return {};
};

export default useHideAnimation;
