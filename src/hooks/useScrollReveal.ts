"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const children = el.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    children.forEach((child) => observer.observe(child));

    if (
      el.classList.contains("reveal") ||
      el.classList.contains("reveal-left") ||
      el.classList.contains("reveal-right")
    ) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
