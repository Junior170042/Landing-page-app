import { useEffect, useRef } from 'react';

interface UseIsInViewportOptions extends IntersectionObserverInit {
    // Add any custom options if needed, but currently it uses IntersectionObserverInit
}

const useIsInViewport = (options: UseIsInViewportOptions = {}) => {
    const { threshold = 0, rootMargin = "50px" } = options;
    const targetRef = useRef<HTMLElement | null>(null);

    const handleIntersection: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            const element = document.querySelectorAll('li a')
            if (entry.isIntersecting) {
                element.forEach(el => {
                    if (el.className.includes(entry.target.id)) {
                        el.classList.add('active')
                    }
                })
            } else {
                element.forEach(el => {
                    if (el.className.includes(entry.target.id)) {
                        el.classList.remove('active')
                    }
                })
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold, rootMargin
        });

        const currentTarget = targetRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [threshold, rootMargin]);

    return { targetRef };
};

export default useIsInViewport;
