import { useState } from "react";
import data from "../../../data/data.json";
import "./card.css";

export const Card = ({ id }) => {
    const [showover, setShowover] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);

    const cardData = data.posts.find((post) => post.id === id);
    if (!cardData) {
        console.warn(`No data found for card with id ${id}`);
        return null;
    }

    const { backgroundImage, descrição, projeto, arquiteto, cliente, projetoimgs = [] } = cardData;

    const handleOpen = () => {
        setShowover(true);
        setAnimateOut(false);
    };

    const handleClose = () => {
        setAnimateOut(true);
        setTimeout(() => {
            setShowover(false);
        }, 500);
    };

    return (
        <>
            <div
                className="card"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
                onClick={handleOpen}
            >
                <div className="overlaynome">
                    <h1>{descrição}</h1>
                </div>
            </div>
            {showover && (
                <div
                    className={`overlaycard ${animateOut ? "hidden" : ""}`}
                    onClick={handleClose}
                >
                    <div className="creditos">
                        <div className="credito">
                            <h2>Projeto: </h2> <p>{projeto}</p>
                        </div>
                        <div className="credito">
                            <h2>Arquitetos: </h2> <p>{arquiteto}</p>
                        </div>
                        <div className="credito">
                            <h2>Cliente: </h2> <p>{cliente}</p>
                        </div>
                    </div>
                    <div className="projetoimgs">
                        {projetoimgs.map((img, index) => (
                            <img key={index} src={img} alt={`Projeto ${index + 1}`} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
