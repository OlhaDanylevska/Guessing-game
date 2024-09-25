import React, { useEffect, useRef, useState } from "react";

const Fireworks = ({ gameResult }) => {
    const canvasRef = useRef(null);
    const [particles, setParticles] = useState([]);
    const [probability] = useState(0.04);  // Probability of creating fireworks
    const [w, setW] = useState(window.innerWidth);
    const [h, setH] = useState(window.innerHeight);

    // Resizing the canvas when the window size changes
    useEffect(() => {
        const handleResize = () => {
            setW(window.innerWidth);
            setH(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Fireworks particle system and animation
    useEffect(() => {
        if (gameResult === "win") {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");

            let animationFrameId;

            const updateWorld = () => {
                updateParticles();
                paint(ctx);
                animationFrameId = requestAnimationFrame(updateWorld);
            };

            const updateParticles = () => {
                if (particles.length < 500 && Math.random() < probability) {
                    createFirework();
                }
                setParticles((particles) => particles.filter((p) => p.move()));
            };

            const paint = (ctx) => {
                ctx.clearRect(0, 0, w, h); // Ensure transparent background
                ctx.globalCompositeOperation = "lighter";
                particles.forEach((p) => p.draw(ctx));
            };

            const createFirework = () => {
                const xPoint = Math.random() * (w - 200) + 100;
                const yPoint = Math.random() * (h - 200) + 100;
                const nFire = Math.random() * 50 + 100;
                const color = `rgb(${~~(Math.random() * 200 + 55)},${~~(
                    Math.random() * 200 + 55
                )},${~~(Math.random() * 200 + 55)})`;

                const newParticles = [];
                for (let i = 0; i < nFire; i++) {
                    const particle = new Particle(xPoint, yPoint, color);
                    newParticles.push(particle);
                }
                setParticles((particles) => [...particles, ...newParticles]);
            };

            // Particle class with slower speed, wider spread, and rounder shape
            class Particle {
                constructor(x, y, color) {
                    this.w = this.h = Math.random() * 4 + 1;
                    this.x = x - this.w / 2;
                    this.y = y - this.h / 2;

                    // Widen the spread and keep it round by using trigonometric functions
                    const angle = Math.random() * Math.PI * 2;  // Random angle for circular spread
                    const speed = (Math.random() * 2) + 0.5;    // Reduced speed for slower effect

                    this.vx = Math.cos(angle) * speed;          // Spread out horizontally
                    this.vy = Math.sin(angle) * speed;          // Spread out vertically
                    this.alpha = Math.random() * 0.5 + 0.5;
                    this.color = color;
                    this.gravity = 0.001;  // Further reduce gravity for slower fall
                }

                move() {
                    this.x += this.vx;
                    this.vy += this.gravity;  // Add gravity to vertical velocity
                    this.y += this.vy;
                    this.alpha -= 0.001;      // Slow fade-out
                    return this.alpha > 0;
                }

                draw(ctx) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(this.x + this.w / 2, this.y + this.h / 2, this.w, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.globalAlpha = this.alpha;
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
            }

            resizeCanvas(canvas);
            updateWorld();

            return () => {
                cancelAnimationFrame(animationFrameId);
            };
        }
    }, [gameResult, particles, w, h, probability]);

    const resizeCanvas = (canvas) => {
        canvas.width = w;
        canvas.height = h;
    };

    return (
        <canvas ref={canvasRef} id="canvas" width={w} height={h} style={{ position: "fixed", top: 0, left: 0 }}></canvas>
    );
};

export default Fireworks;
