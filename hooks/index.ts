"use client"
import { useState, useEffect, useRef, RefObject } from 'react';
import { TimeLeft } from '../types';

export function useInView(
    threshold: number = 0.12
): [RefObject<HTMLDivElement | null>, boolean] {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.unobserve(el);
                }
            },
            { threshold }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return [ref, visible];
}

export function useCountdown(): TimeLeft {
    const [time, setTime] = useState<TimeLeft>({ d: 0, h: 0, m: 0, s: 0 });

    useEffect(() => {
        const target = new Date();
        target.setDate(target.getDate() + 5);
        target.setHours(19, 0, 0, 0);

        const tick = () => {
            const diff = Math.max(0, target.getTime() - new Date().getTime());
            setTime({
                d: Math.floor(diff / 864e5),
                h: Math.floor((diff % 864e5) / 36e5),
                m: Math.floor((diff % 36e5) / 6e4),
                s: Math.floor((diff % 6e4) / 1e3)
            });
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return time;
}

export function useStickyHeader(): boolean {
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowSticky(window.scrollY > 600);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return showSticky;
}

export function useVideoScroll(scrollerId: string, totalVideos: number): number {
    const [activeVid, setActiveVid] = useState(0);

    useEffect(() => {
        const el = document.getElementById(scrollerId);
        if (!el) return;

        const onScroll = () => {
            const idx = Math.round(el.scrollLeft / 320);
            setActiveVid(Math.min(idx, totalVideos - 1));
        };

        el.addEventListener('scroll', onScroll);
        return () => el.removeEventListener('scroll', onScroll);
    }, [scrollerId, totalVideos]);

    return activeVid;
}