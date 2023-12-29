import { useState, useEffect, useRef } from 'react';

const useIsInViewport = (options = {}) => {
    const { threshold = 0, rootMargin = "50px" } = options;
    //const [isInViewport, setIsInViewport] = useState(false);
    const targetRef = useRef(null);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            const element = document.querySelectorAll('li a')
            if (entry.isIntersecting) {
                alert(window.innerWidth)
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

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [threshold]);

    return { targetRef };
};

export default useIsInViewport;
