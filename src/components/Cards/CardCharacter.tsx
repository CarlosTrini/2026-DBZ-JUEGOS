import type { Character } from "@/types";

interface Props {
    character: Character;
}

const CardCharacter = ({ character }: Props) => {


    return (
        <>
            <div className="card-character" key={character.id}>

                <div className="card-character-body">

                    <div className="card-character-header">
                        <p >
                            KI: {character.ki}
                        </p>
                        <p >
                            Max KI: {character.maxKi}
                        </p>
                        <p >
                            Raza: {character.race}
                        </p>
                    </div>

                    <div className="card-character-image">
                        <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="card-character-title">{character.name}</p>
                </div>

                <div className="card-character-ribbon">
                    <label className="card-character-ribbon-label">
                        <img src="/logo-image.png" className="" alt="" />
                    </label>

                </div>
            </div>

        </>
    );
}

export default CardCharacter;