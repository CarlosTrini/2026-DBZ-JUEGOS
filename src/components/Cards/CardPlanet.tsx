import type { Planet } from "@/types";

interface Props {
    planet: Planet;
}

const CardPlanet = ({ planet }: Props) => {
    return (
        <div className="card-planet" key={planet.id}>
            <div className="card-planet-image-wrapper">
                <span
                    className={`card-planet-status ${
                        planet.isDestroyed
                            ? "card-planet-status-destroyed"
                            : "card-planet-status-active"
                    }`}
                >
                    <span className="card-planet-status-dot" />
                    {planet.isDestroyed ? "Destruido" : "Activo"}
                </span>

                <img
                    src={planet.image}
                    alt={planet.name}
                    className="card-planet-image"
                    loading="lazy"
                />
            </div>

            <div className="card-planet-content">
                <div className="card-planet-header">
                    <h3 className="card-planet-title">{planet.name}</h3>
                    <span className="card-planet-id">#{planet.id}</span>
                </div>

                {planet.description && (
                    <p className="card-planet-description" title={planet.description}>
                        {planet.description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CardPlanet;
