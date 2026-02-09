"use client";
import { useState, useEffect, useRef, RefObject } from "react";
import { TimeLeft } from "../types";

export function useInView(
  threshold: number = 0.12,
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
      { threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function useVideoScroll(
  scrollerId: string,
  totalVideos: number,
): number {
  const [activeVid, setActiveVid] = useState(0);

  useEffect(() => {
    const el = document.getElementById(scrollerId);
    if (!el) return;

    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / 320);
      setActiveVid(Math.min(idx, totalVideos - 1));
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [scrollerId, totalVideos]);

  return activeVid;
}
