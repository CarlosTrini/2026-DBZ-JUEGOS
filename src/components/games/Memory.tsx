import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { charactersAvailable } from '@/content/data';
import type { Character } from '@/types';
import confetti from "canvas-confetti";
import { CheckCircle, GamepadDirectional, XCircle } from 'lucide-react';


type Difficulty = 'easy' | 'medium' | 'hard';
interface InfoPlayer {
    interval: NodeJS.Timeout,
    time: number,
    attemps: number,
    mistakes: number,
    pairsFound: number
}

const TOTAL_CHARACTERS = charactersAvailable.length;
const DIFFICULTY_MAP = {
    easy: 10,
    medium: 14,
    hard: 21
}


const INFO_PLAYER_INIT = {
    interval: setInterval(() => { }, 1000) as NodeJS.Timeout,
    time: 0,
    attemps: 0,
    mistakes: 0,
    pairsFound: 0
}


const Memory = () => {

    const [initGame, setInitGame] = useState<boolean>(false);
    const [dificultySelected, setDificultySelected] = useState<Difficulty>('' as Difficulty);
    const [memoryCharacters, setMemoryCharacters] = useState<Pick<Character, 'name' | 'image'>[]>([]);
    const [flippedCards, setFlippedCards] = useState<{ e: HTMLElement, name: string }[]>([]);
    const [infoPlayer, setInfoPlayer] = useState<InfoPlayer>(INFO_PLAYER_INIT);
    const [showCards, setShowCards] = useState<boolean>(true);


    const resetGame = () => {
        setShowCards(true);
        setInitGame(false)
        setMemoryCharacters([])
        setDificultySelected('' as Difficulty)
        setInfoPlayer(INFO_PLAYER_INIT);
    }

    const takeRandomCharacters = () => {
        const targetCount = DIFFICULTY_MAP[dificultySelected];
        const setArr = new Set<number>();

        while (setArr.size < targetCount) {
            const randomId = Math.floor(Math.random() * TOTAL_CHARACTERS);
            setArr.add(randomId)
        }

        const randomMemoryCharacters = [...setArr, ...setArr].sort(() => Math.random() - 0.5);

        setMemoryCharacters(randomMemoryCharacters.map(id => ({ name: charactersAvailable[id].name, image: charactersAvailable[id].image })));
        setInitGame(true)
    }

    const checkMatch = () => {
        setInfoPlayer(prev => ({ ...prev, attemps: prev.attemps + 1 }));
        // bueno o malo las cartas se les quita el shadow azul
        flippedCards.map(f => {
            f.e?.parentElement?.parentElement?.classList.remove('shadow-accent!'); // se quita la sombra azul para que solo se iluminen los seleccionados
        })

        if (flippedCards[0].name != flippedCards[1].name) {
            // cartas no iguales
            flippedCards.map(f => {
                f.e?.classList.add('hide-front-card');
                f.e?.classList.remove('show-front-card');
            })
            setInfoPlayer(prev => ({ ...prev, mistakes: prev.mistakes + 1 }));
        } else {
            //cartas iguales
            // bueno o malo las cartas se les quita el shadow azul
            flippedCards.map(f => {
                f.e?.parentElement?.parentElement?.classList.add('shadow-light!'); // se deja dsombra light a los elementos encontrados
            })
            confetti({
                angle: 90,
                spread: 70,
                particleCount: 100,
                origin: { y: 0.6 },
            });
            setInfoPlayer(prev => ({ ...prev, pairsFound: prev.pairsFound + 1 }));

        }


    }

    // INICIA EL JUEGO
    useEffect(() => {
        if (!initGame) return;
        takeRandomCharacters(); // tomamos personajes
        const interval = setInterval(() => { // agregar intervalo
            setInfoPlayer(prev => ({ ...prev, time: prev.time + 1 }));
        }, 1000);
        const timeShow = setTimeout(() => { setShowCards(false) }, (DIFFICULTY_MAP[dificultySelected]) * 150);

        return () => { clearInterval(interval); clearTimeout(timeShow) };
    }, [initGame])

    // cuando se selecciona la segunda card se bloquean las demás
    useEffect(() => {
        if (flippedCards.length === 2) {
            setTimeout(() => {
                checkMatch();
                setFlippedCards([]);
            }, 1200);
        }
    }, [flippedCards])

    // cuando el usuario encuentra todos los pares
    useEffect(() => {
        if (infoPlayer.pairsFound === DIFFICULTY_MAP[dificultySelected]) {
            const time = infoPlayer.time;
            clearInterval(infoPlayer.interval);
            setInfoPlayer(prev => ({ ...prev, time }))
            Swal.fire({
                title: '¡Felicidades!',
                text: `Has encontrado todos los pares en ${time} segundos \n Intentos: ${infoPlayer.attemps} \n Errores: ${infoPlayer.mistakes}`,
                icon: 'success',
                confirmButtonText: 'Jugar de nuevo'
            }).then(() => {
                resetGame();
            })
        }
    }, [infoPlayer.pairsFound]);

    return (
        <>
            <div className="mt-5">
                {
                    !initGame && (
                        // {/* nivel de dificultad */}
                        <div className="flex flex-col justify-center mx-auto gap-5 mt-4 w-fit">
                            <label htmlFor="memory-difficulty" className='font-bold text-center text-primary text-xl'>Nivel de dificultad</label>
                            <select id="memory-difficulty" value={dificultySelected} onChange={(e) => {
                                setDificultySelected(e.target.value as Difficulty)
                            }}
                                className="text-light bg-dark/50 p-2 rounded-lg">
                                <option selected disabled value="">seleccionar Dificultad</option>
                                <option value="easy">Fácil</option>
                                <option value="medium">Normal</option>
                                <option value="hard">Difícil</option>
                            </select>


                            <button disabled={!dificultySelected} className={`${!dificultySelected ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'} px-4 py-2 rounded-lg bg-primary text-lg md:text-2xl text-dark font-bold`} onClick={() => { setInitGame(true) }}>Iniciar juego</button>
                        </div>
                    )
                }

                {
                    initGame && (
                        <>
                            {/* INFO PLAYER */}
                            <div className='mb-5 bg-dark p-2 rounded-xl'>
                                <div className='flex flex-col md:flex-row gap-5 flex-wrap items-center justify-between w-[90%] md:w-[80%] mx-auto'>
                                    <div className="flex  items-center gap-3">

                                        <figure className={`${memoryCharacters.length > 0 ? 'sand-timer' : ''}  w-10 h-10 rounded-full`}>
                                            <img src="/images/reloj-arena.png" alt="imagen de reloj de arena" className="w-full h-full object-cover" />
                                        </figure>
                                        <p className=' text-xl font-bold text-primary'>Tiempo: <span className='font-normal italic text-light'>{infoPlayer.time}</span></p>
                                    </div>
                                    <p className=' text-xl font-bold text-primary flex items-center gap-2'> <GamepadDirectional className='w-7 h-7 text-light' /> Intentos: <span className='font-normal italic text-light'>{infoPlayer.attemps}</span></p>
                                    <p className=' text-xl font-bold text-primary flex items-center gap-2'> <XCircle className='w-7 h-7 text-quaternary' /> Errores: <span className='font-normal italic text-light'>{infoPlayer.mistakes}</span></p>
                                    <p className=' text-xl font-bold text-primary flex items-center gap-2'> <CheckCircle className='w-7 h-7 text-accent' /> Pares: <span className='font-normal italic text-light'>{infoPlayer.pairsFound}</span></p>
                                </div>
                            </div>

                            {/* CARDS  */}
                            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-8 '>
                                {
                                    memoryCharacters.map((char, idx) => {
                                        return (
                                            <div key={idx} className={`relative border-5 overflow-hidden border-dark rounded-xl  card-memory-container shadow-lg  shadow-quaternary `}>

                                                {/* FRONT */}
                                                <figure className='h-40'>
                                                    <img src={char.image} alt={char.name} className='w-full h-full object-contain' />
                                                </figure>

                                                {/* Back */}
                                                <button disabled={flippedCards.length == 2} className={`${flippedCards.length == 2 ? 'cursor-not-allowed ' : 'cursor-pointer'} w-full h-full`} onClick={(e) => {
                                                    const figureE = e.currentTarget.querySelector('figure');
                                                    setFlippedCards(prev => [...prev, { e: figureE!, name: char.name }]);
                                                    figureE?.classList.toggle('hide-front-card');
                                                    figureE?.classList.toggle('show-front-card');
                                                    e.currentTarget?.parentElement?.classList.add('shadow-accent!');
                                                }} >
                                                    <figure className={`h-full absolute top-0 left-0 w-full hide-front-card  ${showCards ? 'show-front-card' : 'hide-front-card'}`}>
                                                        <img src={'/logo-image.png'} alt={'imagen que oculta al personaje'} className={`w-full h-full object-contain  ${flippedCards.length == 2 ? 'bg-linear-to-tr from-dark to-dark brightness-25' : 'bg-linear-to-tr from-primary to-quaternary'} transition duration-300`} />
                                                    </figure>
                                                </button>

                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className='text-center mt-10'>
                                <button
                                    onClick={() => {
                                        Swal.fire({
                                            title: '¿Estás seguro de finalizar el juego?',
                                            icon: 'question',
                                            showCancelButton: true,
                                            confirmButtonText: 'Sí, me rindo',
                                            cancelButtonText: 'No, quiero seguir'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                resetGame();
                                            }
                                        })
                                    }}
                                    className='px-4 py-2 rounded-lg bg-primary text-lg md:text-2xl text-dark font-bold cursor-pointer hover:bg-quaternary  transition duration-300 '>Finalizar</button>
                            </div>



                        </>
                    )
                }

            </div>

        </>
    )
}

export default Memory;