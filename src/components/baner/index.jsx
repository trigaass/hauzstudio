import { useState, useEffect } from "react";
import "./banner.css";

const images = ["/acdmia.png", "/hauzhrlc.png"];

export const Banner = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("next");

    const nextImg = () => {
        setDirection("next");
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImg = () => {
        setDirection("prev");
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImg, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner">
            <div className="carrossel">
                <div className="legenda">
                    <h1>Criamos <br />visões futuras</h1>
                    <p>3D image studio for real <br />estate developments</p>
                    <button>Solicitar proposta</button>
                </div>
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        className={`carrosselimg ${i === index
                                ? "active"
                                : i === (direction === "next" ? (index - 1 + images.length) % images.length : (index + 1) % images.length)
                                    ? direction === "next"
                                        ? "slide-out"
                                        : "slide-in-reverse"
                                    : ""
                            }`}
                    />
                ))}
            </div>
            <div className="dots">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`dot ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
};
