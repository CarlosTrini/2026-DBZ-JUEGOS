import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GeminiService } from "@/services/geminiService";
import { charactersAvailable } from "@/content/data";
import type { Character } from "@/types";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";


const ALPHABET_QWERTY = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


interface ModeGame {
    name: 'TIMER' | 'COUNTER';
    timeLimit?: 40 | 60 | 80; // 40 seg, 1 min, 1 min y 20 seg
    timeLeft?: number;
    interval?: ReturnType<typeof setInterval>;
    clicksLimit?: number;
}

const GAME_MODE_INIT = {} as ModeGame;


const HangMan = () => {


    const [hangMan, setHangMan] = useState<Pick<Character, 'id' | 'name' | 'image'> & { hints: string[] } | null>(null);
    const [hiddenInfoCharacter, setHiddenInfoCharacter] = useState<boolean>(false);
    const [characterName, setCharacterName] = useState<{ letter: string, show: boolean }[]>([]);
    const [initGame, setInitGame] = useState(false);
    const [defaultHints, setDefaultHints] = useState<string[]>([]);
    const [hintsCounter, setHintsCounter] = useState<number>(0);
    const [gameMode, setGameMode] = useState<ModeGame>(GAME_MODE_INIT);
    const [disabledStartGameBtn, setDisabledStartGameBtn] = useState<boolean>(true);


    const { data: hints, isLoading: isLoadingHints, isError: isErrorHints } = useQuery({
        queryKey: [hangMan?.name],
        queryFn: () => GeminiService.getHints(hangMan?.name || ''),
        // queryFn: ({ signal }) => {
        //     // HACK: limite
        //     // const timeoutSignal = AbortSignal.timeout(5 * 7000); // 7 segundos
        //     //  Se cancelará si se cumple el tiempo O si React Query cancela la query
        //     // const combinedSignal = AbortSignal.any([signal, timeoutSignal]);

        //     // return GeminiService.getHints(hangMan?.name as string, combinedSignal);

        // },
        retry: false,
        enabled: !!hangMan?.name, // HACK: No se ejecuta si hangman no existe
        staleTime: Infinity, // HACK: Nunca se considera absoluto el dato y no hace la petición cada vez que se renderiza
        refetchOnWindowFocus: false, // HACK: evita reejucar al regresar a la pestaña (solo cuando se presione el botón para iniciar)
        gcTime: 60 * 1000, // HACK: 1 minuto de espera
    })

    const canPlay = (): boolean => defaultHints && defaultHints.length > 0;

    const selectRandomCharacter = () => {
        let randomCharacter = charactersAvailable[Math.floor(Math.random() * charactersAvailable.length)];
        setHangMan(randomCharacter)
        setCharacterName(() => [...randomCharacter.name].map(l => ({ letter: l === ' ' || l === '-' || l === '.' ? '_' : l, show: l === ' ' || l === '-' || l === '.' ? true : false })));
        setHiddenInfoCharacter(true)
        setInitGame(true)
    }

    const queryClient = useQueryClient();

    const cancelPreviousQuery = () => queryClient.cancelQueries({ queryKey: [hangMan?.name] });

    const checkLetters = (letter: string) => {
        if (letter == '') return;
        setCharacterName(prev => prev.map(l => {
            if (l.letter.toLocaleLowerCase() === letter.toLocaleLowerCase()) {
                return { ...l, show: true }
            }
            return l;
        }))
    }

    const giveHint = () => {
        setHintsCounter(prev => prev + 1);
        const selectRandomLetter = characterName.find(l => !l.show)?.letter;
        if (selectRandomLetter === undefined) return;
        checkLetters(selectRandomLetter);

    }

    const getDefaultHints = () => {
        const hints = charactersAvailable.find(c => c.name.toLowerCase() === hangMan?.name?.toLowerCase())?.hints || [];
        cancelPreviousQuery();
        setDefaultHints(hints);
    }

    const resetGame = () => {
        setDefaultHints([]);
        setHangMan(null);
        setHiddenInfoCharacter(false);
        setCharacterName([]);
        setInitGame(false);
        setHintsCounter(0);
        if (gameMode?.interval) {
            clearInterval(gameMode?.interval);
        }
        setGameMode(GAME_MODE_INIT);
        setDisabledStartGameBtn(true);

        // if (newCharacter) {
        //     selectRandomCharacter()
        // }
    }

    // MOSTRAR PLACEHOLDERS SEGUN MODO DE JUEGO
    const gameModeFn = () => {
        if (!gameMode.name) return;
        if (gameMode.name === 'TIMER') {
            const interval = setInterval(() => { // se crea el intervalo
                setGameMode(prev => ({ ...prev, timeLeft: prev.timeLeft !== undefined ? prev.timeLeft - 1 : 0 }))
            }, 1000);
            setGameMode(prev => ({ ...prev, interval }))// se guarda en interval 
        }


    }



    // control de error en gemini al generar los hints
    useEffect(() => {
        if (isErrorHints && !isLoadingHints) {
            getDefaultHints()
        }
    }, [isErrorHints, isLoadingHints]);


    // Controla que se muestre personaje
    useEffect(() => {

        if (characterName.length > 0 && characterName.every(l => l.show)) {
            confetti({
                angle: 90,
                spread: 70,
                particleCount: 100,
                origin: { y: 0.6 },
            });
            clearInterval(gameMode?.interval);
            setGameMode(GAME_MODE_INIT)
            setHiddenInfoCharacter(false)
        }
    }, [characterName])

    // Si no hay hints de gemini, usa los locales
    useEffect(() => {
        if (hints && hints.length > 0) {
            setDefaultHints(hints);
        }
    }, [hints])

    useEffect(() => {
        if (defaultHints?.length > 0) {
            gameModeFn();
        }
    }, [defaultHints]);


    useEffect(() => {
        const mode = gameMode?.name;
        const time = gameMode?.timeLeft;
        const click = gameMode?.clicksLimit;

        if ((mode === 'TIMER' && time === 0) || (mode === 'COUNTER' && click === 0)) {
            clearInterval(gameMode?.interval);
            Swal.fire({
                title: mode === 'TIMER' ? "¡Se acabó el tiempo!" : "¡Se acabaron los intentos!",
                text: `El personaje era: ${hangMan?.name}`,
                icon: "info",
                confirmButtonText: "vale",

            }).then(() => {

                resetGame()
            });


        }

    }, [gameMode]);





    return (
        <>
            {

                !initGame && (
                    <>
                        <div className=" flex flex-col items-center gap-y-3 lg:gap-y-0 gap-x-3 justify-center mt-8 md:absolute md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 ">
                            <p className="mb-4 italic font-bold  text-xl text-primary">Selecciona un modo de juego</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                                <div className="flex flex-col gap-3 justify-between">
                                    <label htmlFor="TIMER">CONTRA RELOJ</label>
                                    <input type="radio" name="game-mode" value="TIMER" onChange={() => setGameMode({ ...gameMode, name: "TIMER" })} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <label htmlFor="COUNTER">LIMITE DE INTENTOS</label>
                                    <input type="radio" name="game-mode" value="COUNTER" onChange={() => setGameMode({ ...gameMode, name: "COUNTER" })} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 justify-items-center mt-5">
                                <div className={`${gameMode?.name === 'TIMER' ? 'flex' : 'hidden'} items-center gap-4 mb-4`}>
                                    {/* <label htmlFor="TIMER">Tiempo:</label> */}
                                    <select id="TIMER" value={gameMode?.timeLimit} onChange={(e) => {

                                        setGameMode({ ...gameMode, timeLeft: Number(e.target.value), timeLimit: Number(e.target.value) as ModeGame['timeLimit'] })
                                        setDisabledStartGameBtn(false)



                                    }} className="text-light bg-dark/50 p-2 rounded-lg">
                                        <option selected disabled value="">seleccionar Tiempo</option>
                                        <option value="40">40 segundos</option>
                                        <option value="60">60 segundos</option>
                                        <option value="80">80 segundos</option>
                                    </select>

                                </div>
                                <div className={`${gameMode?.name === 'COUNTER' ? 'flex' : 'hidden'}  flex items-center gap-4 mb-4`}>
                                    {/* <label htmlFor="COUNTER">Intentos</label> */}
                                    <select id="COUNTER" value={gameMode?.clicksLimit} onChange={(e) => {
                                        setGameMode({ ...gameMode, clicksLimit: Number(e.target.value) as ModeGame['clicksLimit'] })
                                        setDisabledStartGameBtn(false)
                                    }}
                                        className="text-light bg-dark/50 p-2 rounded-lg">
                                        <option selected disabled value="">seleccionar Intentos</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="18">18</option>
                                    </select>

                                </div>

                                <button disabled={disabledStartGameBtn} className={`${disabledStartGameBtn ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'} px-4 py-2 rounded-lg bg-primary text-lg md:text-2xl text-dark font-bold`} onClick={selectRandomCharacter}>Iniciar juego</button>
                            </div>


                        </div>
                    </>

                )
            }

            {/* INICIA EL JUEGO */}
            {hangMan && (
                <div className="flex flex-col gap-2">
                    <h2 className={` ${hiddenInfoCharacter ? 'h-10 text-primary' : 'block '} my-10 flex items-center justify-center text-center text-xl md:text-3xl font-bold`}>{hiddenInfoCharacter ? '¿Quién soy?' : hangMan.name}</h2>
                    {
                        hiddenInfoCharacter
                            ? (
                                // ESTO ES EL JUEGO
                                <section className="space-y-4">

                                    {/* NOMBRE */}
                                    <div className="flex flex-wrap gap-2 justify-center ">
                                        {
                                            characterName.map((character, idx) => {
                                                return (
                                                    <>
                                                        <p key={character.letter + idx} className={` ${character.show ? 'text-primary' : 'text-light/30'} text-lg md:text-xl  lg:text-3xl w-10 md:w-15 h-10 md:h-15 bg-dark border-2 border-accent flex items-center justify-center rounded-xl`}>{character.show ? character.letter : '?'}</p>
                                                    </>
                                                )
                                            })

                                        }
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">

                                        <div className="border border-primary rounde-xl mb-4 md:mb-0 md:col-span-2 p-2 ">
                                            <h3 className="text-center text-xl italic mb-5 ">Pistas <span className="block">{isLoadingHints ? 'preguntando a gemini... espere' : ''}</span> </h3>

                                            {
                                                isLoadingHints && (
                                                    <div className={` w-full flex items-center justify-center`}>
                                                        <LoaderCircle className='animate-spin size-30 text-primary' />
                                                    </div>
                                                )
                                            }

                                            {
                                                defaultHints && defaultHints.length > 0 && defaultHints.map((hint, idx) => {
                                                    return (
                                                        <p key={idx} className="pl-3 text-lg md:text-xl my-3">{hint}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className=" md:cols-span-2 w-full max-w-80 h-100 bg-dark mx-auto rounded-lg border-5 border-primary ">
                                            <figure className="h-full w-[90%] mx-auto brightness-40">
                                                <img src="/logo-image.png" alt="imagen de fondo del juego" className="w-full h-full object-cover object-center" />
                                            </figure>
                                            {/* modo de juego */}
                                            <div className="flex justify-center mt-4">
                                                {
                                                    gameMode && gameMode?.name == 'TIMER' && (
                                                        <>
                                                            <div className="flex  items-center gap-3">
                                                                <p className="text-primary font-bold text-xl">Restan: {gameMode?.timeLeft}</p>
                                                                <figure className={`${defaultHints && defaultHints.length > 0 && (gameMode.timeLeft ?? 0) > 0 ? 'sand-timer' : ''}  w-10 h-10 rounded-full`}>
                                                                    <img src="/images/reloj-arena.png" alt="imagen de reloj de arena" className="w-full h-full object-cover" />
                                                                </figure>
                                                            </div>
                                                        </>
                                                    )
                                                }

                                                {
                                                    gameMode && gameMode?.name == 'COUNTER' && (
                                                        <div className="flex flex-col items-center gap-2">
                                                            <p className="text-primary font-bold text-xl">Intentos restantes: {gameMode.clicksLimit}</p>
                                                        </div>
                                                    )
                                                }
                                            </div>

                                        </div>
                                    </div>
                                    <br />

                                    <div className="w-[80%] md:w-[60%] lg:w-[50%] mx-auto grid-cols-4 grid sm:grid-cols-10 gap-1 md:gap-2 mt-5 ">
                                        {
                                            ALPHABET_QWERTY.map((letter) => {
                                                return (
                                                    <button disabled={!canPlay()} key={letter} className={`${canPlay() ? 'cursor-pointer bg-accent' : 'cursor-not-allowed bg-dark/60'} px-4 py-2 rounded-lg bg-dark text-lg md:text-2xl text-light hover:scale-110 transition-all duration-200 shadow shadow-primary font-bold `}
                                                        onClick={() => {
                                                            setGameMode(prev => (prev.clicksLimit !== undefined ? { ...prev, clicksLimit: prev.clicksLimit - 1 } : prev));
                                                            checkLetters(letter);
                                                        }}>{letter}</button>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="w-[80%] md:w-[60%] lg:w-[50%] mx-auto grid-cols-4 grid sm:grid-cols-10 gap-1 md:gap-2 ">
                                        {
                                            NUMBERS.map((numberValue, idx) => {
                                                return (
                                                    <button disabled={!canPlay()} key={numberValue + idx.toString()} className={` ${canPlay() ? 'cursor-pointer bg-accent' : 'cursor-not-allowed bg-dark/60'} px-4 py-2 rounded-lg bg-dark text-lg md:text-2xl text-light hover:scale-110 transition-all duration-200 shadow shadow-primary font-bold `}
                                                        onClick={() => {
                                                            setGameMode(prev => (prev.clicksLimit !== undefined ? { ...prev, clicksLimit: prev.clicksLimit - 1 } : prev));
                                                            checkLetters(numberValue)

                                                        }}>{numberValue}</button>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="flex flex-wrap gap-5 justify-center mt-10 ">
                                        <button disabled={!canPlay()} className={`${!canPlay() ? 'cursor-not-allowed bg-dark/20' : 'cursor-pointer bg-secondary/70'} px-4 py-2 rounded-lg  text-lg md:text-2xl text-light hover:scale-110 transition-all duration-200 shadow-md shadow-black font-bold`} onClick={() => resetGame()} >Nuevo personaje</button>
                                        <button disabled={hintsCounter == 3 || !canPlay()} className={` ${hintsCounter === 3 || !canPlay() ? 'cursor-not-allowed bg-dark/20' : 'cursor-pointer bg-accent'} px-4 py-2 rounded-lg text-lg md:text-2xl text-light hover:scale-110 transition-all duration-200 shadow-md shadow-black font-bold `}
                                            onClick={() => giveHint()}>Pista <small >(Letra)</small> {hintsCounter}/3 </button>
                                    </div>

                                </section>
                            )
                            : (
                                <>
                                    {/* ESTO ES CUANDO FINALIZA CORRECTAMENTE EL JUEGO */}
                                    <figure className={` ${!hiddenInfoCharacter ? ' flex justify-center w-full md:w-120 h-150 mx-auto relative ' : 'hidden'}`}>
                                        <img src={hangMan.image} alt={hangMan.name} className={` ${!hiddenInfoCharacter ? 'absolute top-0  z-10 w-full md:w-120 h-150 object-contain' : 'hidden'}`} />
                                        <img src={hangMan.image} alt={hangMan.name} className={` ${!hiddenInfoCharacter ? 'relative -left-3 -top-3  h-158 brightness-0 object-contain' : 'hidden'}`} />
                                    </figure>
                                    <div className="flex flex-wrap gap-5 justify-center mt-10 ">
                                        <button className="px-4 py-2 rounded-lg bg-secondary/70 text-lg md:text-2xl text-light hover:scale-110 transition-all duration-200 shadow-md shadow-black font-bold cursor-pointer" onClick={() => resetGame()} >Nuevo personaje</button>
                                    </div>


                                </>

                            )
                    }
                </div>
            )
            }

        </>
    )
}

export default HangMan;