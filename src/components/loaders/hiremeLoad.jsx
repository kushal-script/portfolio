import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { FaPaperPlane } from 'react-icons/fa';
import './hiremeLoad.css';

gsap.registerPlugin(MotionPathPlugin);

const HireMeLoad = ({ onComplete }) => {
    const loaderRef = useRef(null);
    const planeRefs = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                onComplete && onComplete();
            },
        });
        planeRefs.current.forEach((plane, i) => {
            gsap.fromTo(
                plane,
                {
                    x: -100,
                    y: Math.random() * window.innerHeight * 0.8,
                    opacity: 0,
                    scale: 1.1 + Math.random() * 0.2,
                },
                {
                    x: window.innerWidth + 100,
                    opacity: 1,
                    duration: 1 + Math.random() * 0.4, 
                    delay: 0.1 + i * 0.1,             
                    ease: 'power1.inOut',
                }
            );
        });
        tl.fromTo(
            loaderRef.current,
            { y: '100%' },
            { y: '0%', duration: 0.5, ease: 'power3.out' },
            '+=0.2'
        ).to(
            loaderRef.current,
            { y: '-100%', duration: 0.5, ease: 'power3.in' },
            '+=0.5'
        );

        return () => tl.kill();
    }, [onComplete]);

    return (
        <div className="slide-transition" ref={loaderRef}>
            {Array.from({ length: 6 }).map((_, i) => (
                <FaPaperPlane
                    key={i}
                    className="flying-plane"
                    ref={(el) => (planeRefs.current[i] = el)}
                />
            ))}
        </div>
    );
};

export { HireMeLoad };