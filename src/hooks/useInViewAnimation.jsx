import { useState, useEffect, useRef } from "react";

export function useInViewAnimation(threshold = 0.1) {
    const viewRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = viewRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsVisible(entry.isIntersecting);
            },
            { threshold }
        );

        if (node) observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
        };
    }, [threshold]);


    return [viewRef, isVisible];
}
