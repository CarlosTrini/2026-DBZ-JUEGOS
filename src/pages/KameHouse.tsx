import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Swords, ChevronRight } from 'lucide-react';

const BACKGROUND_OPTIONS = [
    { id: 1, name: 'Saga Saiyajin', src: '/images/bg1.webp' },
    { id: 2, name: 'Saga Freezer', src: '/images/bg2.webp' },
    { id: 3, name: 'Saga Cell', src: '/images/bg3.webp' },
    { id: 4, name: 'Saga Majin Buu', src: '/images/bg4.webp' },
];

const KameHouse = () => {

    const [selectedBg, setSelectedBg] = useState(BACKGROUND_OPTIONS[0]);

    const generateRandomNumber = (limit: number, current?: number): number => {
        const newNumber = Math.floor(Math.random() * limit);

        if (!current) return newNumber;

        if (newNumber == current) generateRandomNumber(limit, current)

        return newNumber;
    }

    useEffect(() => {
        const bgNumber = generateRandomNumber(BACKGROUND_OPTIONS.length, BACKGROUND_OPTIONS.findIndex((item) => item.id == selectedBg.id))
        setSelectedBg(BACKGROUND_OPTIONS[bgNumber]);
    }, [])

    return (
        <div className="relative top-0 bg-dark text-slate-100 overflow-hidden">
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <figure className="absolute inset-0 z-0 ">
                    <img
                        src={selectedBg.src}
                        alt={selectedBg.name}
                        className="w-full h-full object-cover object-center transition-all duration-700 ease-out transform scale-105"
                    />

                    <div className="absolute inset-0 z-20">
                        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-0 bg-linear-to-l from-black/80 via-black/50 to-transparent z-20 pointer-events-none" />
                    </div>

                </figure>

                {/* CONTENT */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center text-center">



                    {/* HEAD */}
                    <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 italic">
                        <span className="block text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                            ¡DESATA TU PODER EN EL
                        </span>
                        <span className="block bg-linear-to-r from-primary to-quaternary bg-clip-text text-transparent  uppercase">
                            Ahorcado Z!
                        </span>
                    </h1>

                    {/* TEXT */}
                    <p className="max-w-2xl bg-accent-dark/20 backdrop-blur-sm p-3 rounded-md italic text-base sm:text-lg lg:text-xl text-light font-normal leading-relaxed mb-10 drop-shadow-md">
                        Pon a prueba tu ki y tu memoria. Adivina los personajes legendarios antes de que se agote tu energía vital.
                    </p>


                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-12">
                        <Link
                            to="/game"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-dark bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:shadow-[0_0_35px_rgba(249,115,22,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 group"
                        >
                            <Play className="size-5 fill-current group-hover:rotate-12 transition-transform" />
                            <span>¡Jugar Ahora!</span>
                            <ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            to="/mundo-z"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-light bg-dark/60 hover:bg-dark/80 border border-slate-700/80 hover:border-amber-400/60 shadow-lg backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 group"
                        >
                            <Swords className="size-5 text-primary group-hover:rotate-12 transition-transform" />
                            <span>Mundo Dragon Ball</span>
                        </Link>
                    </div>



                </div>

                {/* BOTTOM OVERLAY  */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-linear-to-t from-primary/40 to-transparent pointer-events-none z-10" />
            </section>

        </div>
    );

}

export default KameHouse;