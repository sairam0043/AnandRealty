import { useEffect } from 'react';

export function useWindowSlideReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('window-revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    // Initial query
    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.window-slide-left:not(.window-revealed), .window-slide-right:not(.window-revealed), .window-slide-up:not(.window-revealed)'
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Small delay to catch any lazily loaded or re-rendered content
    const timeout = setTimeout(observeElements, 250);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
}

