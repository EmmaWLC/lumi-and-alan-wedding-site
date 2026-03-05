import { useEffect, useRef, useState } from 'react';

function FadeIn({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                } else {
                    // 只有元素從底部離開視窗（尚未看過）才 fade out
                    // 從頂部離開（已看過）則保持可見
                    const exitedFromBottom = entry.rootBounds
                        ? entry.boundingClientRect.top > entry.rootBounds.bottom
                        : entry.boundingClientRect.top > window.innerHeight;
                    if (exitedFromBottom) {
                        setVisible(false);
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`fade-in-section ${visible ? 'is-visible' : ''} ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}

export default FadeIn;
