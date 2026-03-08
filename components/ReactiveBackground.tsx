"use client";
import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function ReactiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Mouse tracking
        let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        handleResize();

        // Orb parameters mimicking Apple's soft glow
        class Orb {
            x: number;
            y: number;
            radius: number;
            color: string;
            vx: number;
            vy: number;
            isMouseTracker: boolean;

            constructor(x: number, y: number, radius: number, color: string, isMouseTracker = false) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.isMouseTracker = isMouseTracker;
            }

            update() {
                if (this.isMouseTracker) {
                    // Fast, snappy smooth follow for the main tracker orb
                    mouse.x += (mouse.targetX - mouse.x) * 0.20;
                    mouse.y += (mouse.targetY - mouse.y) * 0.20;
                    this.x = mouse.x;
                    this.y = mouse.y;
                } else {
                    // Slow floating for background orbs
                    this.x += this.vx;
                    this.y += this.vy;

                    if (this.x < -this.radius) this.x = width + this.radius;
                    if (this.x > width + this.radius) this.x = -this.radius;
                    if (this.y < -this.radius) this.y = height + this.radius;
                    if (this.y > height + this.radius) this.y = -this.radius;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const isDark = resolvedTheme === "dark";

        // Creating a few massive, soft orbs to simulate the ambient tech glow
        const orbs = isDark
            ? [
                new Orb(width * 0.3, height * 0.2, width * 0.5, "rgba(56, 189, 248, 0.15)"), // Sky Blue
                new Orb(width * 0.7, height * 0.8, width * 0.5, "rgba(167, 139, 250, 0.15)"), // Violet
                new Orb(width * 0.5, height * 0.5, width * 0.4, "rgba(45, 212, 191, 0.10)"), // Teal
                new Orb(mouse.x, mouse.y, 400, "rgba(14, 165, 233, 0.4)", true) // The cursor follower (brighter cyan)
            ]
            : [
                new Orb(width * 0.3, height * 0.2, width * 0.5, "rgba(245, 158, 11, 0.05)"), // Soft Amber
                new Orb(width * 0.7, height * 0.8, width * 0.5, "rgba(20, 184, 166, 0.05)"), // Soft Teal
                new Orb(width * 0.5, height * 0.5, width * 0.4, "rgba(167, 139, 250, 0.05)"), // Soft Violet
                new Orb(mouse.x, mouse.y, 400, "rgba(20, 184, 166, 0.12)", true) // Very gentle teal cursor
            ];

        const render = () => {
            // Clear with dark transparent (simulating the deep background)
            ctx.clearRect(0, 0, width, height);

            orbs.forEach(orb => {
                orb.update();
                orb.draw();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [resolvedTheme]);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[-1]"
                style={{ filter: "blur(60px)" }} // Extra CSS blur for that ultra-soft Apple feel
            />
            {/* A warm ivory overlay for light mode, deep slate overlay for dark mode */}
            <div className="fixed inset-0 pointer-events-none z-[-2] bg-[#fdfbf7] dark:bg-[#0f172a] transition-colors duration-500" />
        </>
    );
}
