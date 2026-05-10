"use client";

import { useInView } from "@/hook/use-in-view";
import { CSSProperties, ReactNode } from "react";

type AnimateProps = {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
};

export default function Animate({
    children,
    className = "",
    style,
    delay = 0,
    direction = "up",
}: AnimateProps) {
    const { ref, inView } = useInView();

    const initial: CSSProperties = {
        opacity: 0,
        transform:
            direction === "up"
                ? "translateY(28px)"
                : direction === "left"
                    ? "translateX(-28px)"
                    : direction === "right"
                        ? "translateX(28px)"
                        : "none",
    };

    const animated: CSSProperties = {
        opacity: 1,
        transform: "translate(0,0)",
    };

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={className}
            style={{
                ...(inView ? animated : initial),
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
                ...style,
            }}
        >
            {children}
        </div>
    );
}
