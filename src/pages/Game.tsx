import HangMan from "@/components/games/HangMan";
import Memory from "@/components/games/Memory";
import SectionComponent from "@/components/SectionComponent";
import { Gamepad } from "lucide-react";
import { useState } from "react";

type Games = 'hangman' | 'memory';

const GAMES: Games[] = ['hangman', 'memory'] as const;

const Game = () => {


    const [gameSelected, setGameSelected] = useState<Games>('hangman');



    return (
        <>
            <section className="relative h-100 overflow-hidden flex items-center justify-center ">
                <figure className="h-100 w-full">
                    <img src="/images/bg1.webp" alt="Imagen de fondo del hero, página: Mundo Z" className='w-full h-full object-cover object-center' />
                </figure>

                {/* overlay */}
                <div aria-hidden="true" className="z-10 absolute inset-0  bg-linear-to-t from-dark via-dark/60 to-dark/90 h-full w-full"></div>

                {/* CONTENT */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 italic">
                        Mini juegos
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        pon a prueba tu memoria.
                    </p>
                </div>
            </section>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-5">

                {
                    GAMES.map(game => (
                        <div className="">
                            <Gamepad className={`w-7 h-7 mx-auto mb-1 ${game === gameSelected ? 'opacity-100 text-primary animate-bounce' : 'opacity-0'}`} />
                            <button
                                key={game}
                                onClick={() => setGameSelected(game)}
                                className={`bg-accent  hover:bg-primary/80 text-light px-4 py-2 rounded-lg font-bold transition-all duration-300 ease-in-out`}
                            >{game}</button>
                        </div>
                    ))
                }
            </div>


            {/* AHORCADO Z */}
            {
                gameSelected === 'hangman' && (
                    <SectionComponent
                        title="Ahorcado Z"
                        showTitleLine={true}
                        lineColor="primary"
                        sectionClass="bg-accent-dark/40  min-h-[60vh] relative"
                        description="¡Bienvenido al Ahorcado Z! 

                    Este es un juego donde pondrás a prueba tu memoria y tu conocimiento sobre el universo de Dragon Ball.
                    
                    Cada nivel te presentará un personaje diferente y deberás adivinar su nombre antes de que se agote tu energía vital.
                    
                    ¡Demuestra que eres un verdadero fan de Dragon Ball!"
                    >


                        <HangMan />


                    </SectionComponent>

                )
            }


            {/* MEMORAMA Z */}
            {
                gameSelected === 'memory' && (
                    <SectionComponent
                        title="Memorama Z"
                        showTitleLine={true}
                        lineColor="primary"
                        sectionClass="bg-quaternary/20  min-h-[60vh] relative"
                        description={`¡Bienvenido al Memorama Z! Este juego pondrá a prueba tu memoria y tu atención. Encuentra los pares de personajes de Dragon Ball.`}>


                        <Memory />


                    </SectionComponent >

                )
            }
        </>
    )
}

export default Game;