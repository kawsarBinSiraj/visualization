"use client";
import React, { useEffect, useState } from "react";

const CanvasBubbleFly: React.FC = () => {
    const canvasWidth: number = 950;
    const canvasHeight: number = 500;
    const mouse: { x: number | undefined; y: number | undefined } = { x: undefined, y: undefined };
    // const minRadius: number = 5;
    const [minRadius, setMinRadius] = useState<number>(10);
    const maxRadius: number = minRadius * 4;
    const hoverRange: number = 100;
    const [circleSize, setCircleSize] = useState<number>(300);
    const [colors, setColors] = useState<string[]>(["#3a5a40", "#e63946", "#8ecae6", "#219ebc", "#023047", "#ffb703", "#f07167"]);

    // Adjusting the event handler type to the native MouseEvent
    const handleMouseDown = (event: MouseEvent) => {
        const canvas = event.currentTarget as HTMLCanvasElement; // Cast currentTarget to HTMLCanvasElement
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
        mouse.x = undefined;
        mouse.y = undefined;
    };

    /**
     * description :- makeSixRandomHexColor
     * created_at:- 08/10/2024 15:19:59
     */
    const makeSixRandomHexColors = () => {
        const letters = "0123456789ABCDEF";
        const colors: string[] = [];
        while (colors.length < 6) {
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            if (!colors.includes(color)) {
                colors.push(color);
            }
        }
        setColors(colors);
    };

    class Circle {
        x: number;
        y: number;
        radius: number;
        dx: number;
        dy: number;
        color: string;

        constructor(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
            this.x = x;
            this.y = y;
            this.radius = r;
            this.dx = (Math.random() - 0.5) * 1; // Adjusted speed
            this.dy = (Math.random() - 0.5) * 1; // Adjusted speed
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.fillStyle = this.color.toString();
            ctx.fill();
        }

        updated(ctx: CanvasRenderingContext2D) {
            this.x += this.dx;
            this.y += this.dy;

            // Check for collisions with canvas boundaries and reverse direction if needed
            if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
                // Reverse horizontal direction
                this.dx = -this.dx;
                // Keep inside bounds
                this.x = Math.max(this.radius, Math.min(this.x, canvasWidth - this.radius));
            }

            if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
                // Reverse vertical direction
                this.dy = -this.dy;
                // Keep inside bounds
                this.y = Math.max(this.radius, Math.min(this.y, canvasHeight - this.radius));
            }

            if (
                mouse.x !== undefined &&
                mouse.y !== undefined &&
                mouse.x - this.x < hoverRange &&
                mouse.x - this.x > hoverRange * -1 &&
                mouse.y - this.y < hoverRange &&
                mouse.y - this.y > hoverRange * -1
            ) {
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
            } else if (this.radius > minRadius) {
                this.radius -= 1;
            }

            this.draw(ctx);
        }
    }

    useEffect(() => {
        const canvas = document.querySelector<HTMLCanvasElement>("#canvas");
        if (!canvas) return; // Check if canvas exists

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid " + colors[0];
        canvas.style.borderRadius = "4px";
        const ctx = canvas.getContext("2d");
        if (!ctx) return; // Check if context is obtained

        const circles = Array.from({ length: circleSize }, () => {
            const radius = minRadius;
            const x = Math.random() * (canvasWidth - 2 * radius) + radius;
            const y = Math.random() * (canvasHeight - 2 * radius) + radius;
            return new Circle(ctx, x, y, radius);
        });

        let animationId: number;

        if (!ctx) return; // Check if context is obtained
        function animate() {
            animationId = requestAnimationFrame(animate);
            if (!ctx) return; // Check if context is obtained inside the animation loop
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            for (let circle of circles) {
                circle.updated(ctx);
            }
        }
        animate();
        animate();

        // Add the mousemove event listener to the canvas instead of the window
        canvas.addEventListener("mousemove", handleMouseDown, false);
        canvas.addEventListener("mouseleave", handleMouseLeave, false);

        return () => {
            cancelAnimationFrame(animationId); // Clean up on unmount
            canvas.removeEventListener("mousemove", handleMouseDown); // Clean up event listener on unmount
            canvas.removeEventListener("mouseleave", handleMouseLeave); // Clean up event listener on unmount
        };
    }, [minRadius, circleSize, colors]);

    return (
        <div id="canvas-root" style={{ width: canvasWidth, minHeight: canvasHeight, margin: "auto", position: "relative" }}>
            <div className="controller flex items-center gap-4 mb-4">
                <div className="form-group flex gap-2 items-center">
                    <label>Color: </label>
                    <button
                        type="button"
                        style={{
                            background: `linear-gradient(to left, ${colors[5]}, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]}, ${colors[4]})`,
                        }}
                        className="btn p-2 px-4 text-white rounded text-light"
                        onClick={makeSixRandomHexColors}
                    >
                        Generate random
                    </button>
                </div>
                <div className="orm-group">
                    <div className="form-group flex gap-2 items-center">
                        <label>Bubble Size: </label>
                        <input type="range" onChange={(e) => setMinRadius(Number(e.target.value))} value={minRadius} min={1} max={50} />
                        <label>{minRadius}</label>
                    </div>
                    <div className="form-group flex gap-2 items-center">
                        <label>Number of Circle: </label>
                        <input type="range" onChange={(e) => setCircleSize(Number(e.target.value))} value={circleSize} min={1} max={2000} />
                        <label>{circleSize}</label>
                    </div>
                </div>
            </div>
            <canvas id="canvas"></canvas>
        </div>
    );
};

export default CanvasBubbleFly;
