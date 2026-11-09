import { useEffect } from 'react';

export function useWindowSlideReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('window-revealed');
          } else {
            // When user scrolls away, reset the element so it slides in again upon return
            entry.target.classList.remove('window-revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -25px 0px',
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.window-slide-left, .window-slide-right, .window-slide-up'
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Small delay to catch dynamic sections
    const timeout = setTimeout(observeElements, 200);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
}
