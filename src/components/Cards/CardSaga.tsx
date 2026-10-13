import type { Sagas } from "@/content/data";
import { MousePointerClick } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
    saga: Sagas;
}

const CardSaga = ({ saga }: Props) => {

    const [cardRotate, setCardRotate] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);



    useEffect(() => {
        if (!cardRef.current) return;
        cardRef.current.addEventListener('mouseleave', () => {
            setCardRotate(false);
        })
        return () => {
            if (!cardRef.current) return;

            cardRef.current.removeEventListener('mouseleave', () => {
                setCardRotate(false);
            })
        }
    }, [cardRef]);


    return (

        <div className="card-serie-container " ref={cardRef}>
            <div className={` ${cardRotate ? 'card-serie-rotate' : ''} card-serie`}>
                <div className="back-serie">
                    <img src={saga.image} alt={saga.name} className="card-serie-img " />
                </div>
                <div className="front-serie">
                    <p className="front-text">{saga.description}</p>
                    <img src={'/logo-image.png'} alt={saga.name} className="card-serie-img serie-img-front" />
                </div>
            </div>
            <div className="text-name">
                <button
                    onClick={() => {
                        setCardRotate(!cardRotate)
                    }}
                    className=""
                >
                    <MousePointerClick className="text-primary   " />
                    <span>{saga.name}</span>
                </button>
            </div>
        </div>

    )
}

export default CardSaga;