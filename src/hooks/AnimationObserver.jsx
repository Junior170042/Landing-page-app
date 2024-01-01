import { useEffect, useRef } from 'react';


const animateObserve = (options = {}, animationClass = '') => {



    const { threshold = 0.75, rootMargin = "0px" } = options;
    const animateRef = useRef(null);

    const handleIntersection = (entries) => {
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

        if (animateRef.current) {
            observer.observe(animateRef.current);
        }

        return () => {
            if (animateRef.current) {
                observer.unobserve(animateRef.current);
            }
        };
    }, []);

    return { animateRef };
};

export default animateObserve;