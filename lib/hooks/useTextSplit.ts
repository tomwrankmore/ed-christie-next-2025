"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export function useSplitText(selector: string, options = {}, animationOptions = {}) {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(selector);
    const splits: SplitText[] = [];
    let allLines: HTMLElement[] = [];

    elements.forEach((el) => {
      const split = new SplitText(el, {
        type: "lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        ...options,
      });

      splits.push(split);
      allLines = allLines.concat(split.lines as HTMLElement[]); // collect all lines from all paragraphs
    });

    // Animate all lines together with a global stagger
    const anim = gsap.from(allLines, {
      duration: 0.5,
      y: 50,
      opacity: 0,
      stagger: 0.1, // stagger flows from line to line, across paragraphs
      ease: "power2.out",
      ...animationOptions,
      onComplete: () => {
        splits.forEach((split) => split.revert())
      },
    });

    return () => {
      splits.forEach((split) => split.revert());
      anim.kill();
    };
  }, [selector, options, animationOptions]);
}
