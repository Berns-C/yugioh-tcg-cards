import { useEffect } from 'react';

const useHideAnimationComponent = (
  watchState = false,
  timeOutDelay,
  callback = () => {}
) => {
  useEffect(() => {
    if (watchState) {
      const clearSetTimeout = setTimeout(() => {
        callback();
      }, timeOutDelay);

      return () => {
        clearTimeout(clearSetTimeout);
      };
    }
  }, [watchState]);

  return {};
};

export default useHideAnimationComponent;
