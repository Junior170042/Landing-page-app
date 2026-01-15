import { useEffect, useRef, RefObject } from 'react';

interface AnimationObserverResult {
    animateRef: RefObject<HTMLElement | null>;
}

const animateObserve = (options: IntersectionObserverInit = {}, animationClass = ''): AnimationObserverResult => {

    const { threshold = 0.75, rootMargin = "0px" } = options;
    const animateRef = useRef<HTMLElement | null>(null);

    const handleIntersection: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentClassName = entry.target.className;
                entry.target.className = `${currentClassName} animate__animated ${animationClass}`;
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold, rootMargin
        });

        const currentTarget = animateRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [threshold, rootMargin, animationClass]);

    return { animateRef };
};

export default animateObserve;