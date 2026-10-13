import CardSaga from "@/components/Cards/CardSaga";
import SectionComponent from "@/components/SectionComponent";
import { series, type Sagas } from "@/content/data";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { apiDbzService as apiDbz } from "@/services/apiService";
import CardCharacter from "@/components/Cards/CardCharacter";
import CardPlanet from "@/components/Cards/CardPlanet";
import { LoaderCircle } from "lucide-react";


const seriesNames = series.map(s => s.name);

const MundoZ: React.FC = () => {

    const [seriesFiltered, setSeriesFiltered] = useState<Sagas[]>([]);
    const [serieSelected, setSerieSelected] = useState<string>(seriesNames[0]);
    const [pageNumberCharacters, setPageNumberCharacters] = useState<number>(0);
    const [pageNumberPlanets, setPageNumberPlanets] = useState<number>(0);


    // access the client
    // const queryClient = useQueryClient();

    // // Mutations
    // const mutation = useMutation({
    //     mutationFn: apiDbz.getAllCharacters,
    //     onSuccess: () => {
    //         // Invalidate and refetch
    //         queryClient.invalidateQueries({ queryKey: ['characters'] })
    //     },
    // })


    //queries
    const { data: charactersData, isLoading: charactersIsLoading, error: charactersError, refetch: refetchCharacters } = useQuery({ queryKey: ['characters', pageNumberCharacters], queryFn: () => apiDbz.getAllCharacters(pageNumberCharacters), placeholderData: keepPreviousData });
    const { data: planetsData, isLoading: planetsIsLoading, error: planetsError, refetch: refetchPlanets } = useQuery({ queryKey: ['planets', pageNumberPlanets], queryFn: () => apiDbz.getAllPlanets(pageNumberPlanets), placeholderData: keepPreviousData });



    const getNewSeriesFiltered = () => {
        const filtered = series.find(s => s.name === serieSelected)?.sagas;
        setSeriesFiltered(filtered as [])
    }

    useMemo(() => {
        if (!serieSelected) return;
        getNewSeriesFiltered()
    }, [serieSelected]);

    return (
        <>
            return (
            <>
                {/* HERO  */}
                <section className="relative h-100 overflow-hidden flex items-center justify-center ">
                    <figure className="h-100 w-full">
                        <img src="/images/bg3.webp" alt="Imagen de fondo del hero, página: Mundo Z" className='w-full h-full object-cover object-center' />
                    </figure>

                    {/* overlay */}
                    <div aria-hidden="true" className="z-10 absolute inset-0  bg-linear-to-t from-dark via-dark/60 to-dark/90 h-full w-full"></div>

                    {/* CONTENT */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 italic">
                            Dragon Ball <span className="text-primary">Z</span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto">
                            Un viaje a través de las aventuras de Goku y sus amigos.
                        </p>
                    </div>
                </section>


                {/* HISTORIA */}
                <SectionComponent
                    title="Historia"
                    showTitleLine={true}
                    sectionClass="bg-dark  py-5"
                >
                    <div className="mt-4 lg:px-10 text-sm md:text-lg text-light flex flex-col gap-2">

                        <p>Dragon Ball es un manga que pasó a ser un anime y ambos son muy existosos. Dichas obras fueron creadas por <strong>Akira Toriyama</strong> </p>
                        <p>Su personaje principal: <strong className="text-primary italic">Son Goku</strong>, fue dado a conocer en el año de <strong className="text-primary italic">1984</strong></p>
                        <h3 className="text-xl underline underline-offset-5 text-primary/50  ">¿De qué va Dragon Ball?</h3>
                        <p>Todo inicia con un niño muy caracteristico por su cola. Dicho niño fue encontrado por <strong className="text-primary italic">Son Gohan </strong>. Este lo adoptaría y  se convertiría en su 'Abuelito' el cual le enseñas artes marciales y comportase (ya que cuenta que un bebé agresivo)</p>
                        <p> Un día, la vida de Goku cambiaría para siempre cuando una chica llamada <strong className="text-primary italic">Bulma</strong> aparece en su vida, con
                            la intención de encontrar las esferas del dragon, cosa que el ya poseía una de ellas la de <strong className="text-primary italic">4 estrellas</strong>. A partir de ese momento, <strong>Goku </strong> y <strong>Bulma </strong>
                            emprenderían un viaje para encontrar las 7 esferas del dragon.
                        </p>
                        <p>Durante su viaje se volverían grandes amigos y conocerían a muchos personajes más durante una travesia llena de batallas, compañerismo y superación. Enfrentando a enemigos cada vez más fuertes</p>


                    </div>
                </SectionComponent>


                {/* SAGAS */}
                <SectionComponent
                    title="Series/Sagas"
                    showTitleLine={true}
                    lineColor="primary"
                    sectionClass="bg-quaternary/10  min-h-[100vh]"
                    description="A lo largo de los años, Dragon Ball ha pasado por diferentes 'series' y cada una cuenta con sus sus respectivos arcos"
                >

                    {/* FILTER BTNS */}
                    <small className="text-primary italic block text-center">Imagenes de sagas creadas con IA</small>

                    <div className=" mx-auto flex flex-wrap gap-y-3 lg:gap-y-0 gap-x-3 justify-center mt-8">
                        {
                            seriesNames.map(name => (
                                <button
                                    key={name}
                                    onClick={() => setSerieSelected(name)}
                                    className={`px-4 py-2 rounded-lg border text-xs md:text-sm border-primary text-white ${name === serieSelected ? 'bg-primary' : 'bg-transparent'} hover:bg-primary/80 transition-all duration-300 ease-in-out`}
                                >
                                    {name}
                                </button>
                            ))
                        }
                    </div>

                    <div className="flex flex-wrap justify-between gap-7 items-center mt-7">
                        {
                            seriesFiltered.map(saga => (
                                <CardSaga saga={saga} />
                            ))
                        }
                    </div>
                </SectionComponent>


                {/* CHARACTERS */}
                <SectionComponent
                    title="Personajes"
                    showTitleLine={true}
                    lineColor="primary"
                    sectionClass="bg-dark min-h-[100vh] relative"
                    description="Hay una gran variedad de personajes a lo largo de todas las series"
                >


                    {
                        charactersIsLoading && (
                            <div className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20   w-full flex items-center justify-center`}>
                                <LoaderCircle className='animate-spin size-30 text-primary' />
                            </div>
                        )
                    }



                    {
                        !charactersIsLoading && !charactersError && charactersData?.items?.length && charactersData?.items.length > 0 && (
                            // // {/* FILTER BTNS */}
                            <>


                                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10  items-center mt-7">
                                    {

                                        charactersData?.items.map(character => (
                                            <CardCharacter character={character} />
                                        )
                                        )

                                    }
                                </div>

                                {/* PAGINATOR */}

                                <div className="mt-10 flex flex-wrap justify-center gap-2">
                                    {
                                        charactersData?.meta.totalPages && Array.from({ length: charactersData.meta.totalPages }).map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setPageNumberCharacters(index + 1)}
                                                className={`px-4 py-2  border text-xs md:text-sm border-primary text-white ${index + 1 === charactersData.meta.currentPage ? 'bg-primary' : 'bg-transparent'} hover:bg-primary/80 transition-all duration-300 ease-in-out`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))
                                    }
                                </div>
                            </>
                        )
                    }

                    {
                        (charactersError || charactersData?.items?.length == 0) && (
                            <div className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20   w-full flex flex-col items-center justify-center `}>
                                <p className='text-primary text-2xl'>Error al cargar los personajes</p>
                                <button className="bg-primary px-4 py-2 cursor-pointer" onClick={() => refetchCharacters()}>Reintentar</button>
                            </div>
                        )
                    }


                </SectionComponent>

                {/* PLANETS */}
                <SectionComponent
                    title="Planetas"
                    showTitleLine={true}
                    lineColor="dark"
                    sectionClass="bg-primary/10  relative"
                    description="Los planetas son los escenarios donde ocurren las batallas y se desarrollan las historias."
                >


                    {
                        planetsIsLoading && (
                            <div className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20   w-full flex items-center justify-center`}>
                                <LoaderCircle className='animate-spin size-30 text-primary' />
                            </div>
                        )
                    }



                    {
                        !planetsIsLoading && !planetsError && planetsData?.items?.length && planetsData.items.length > 0 && (
                            // // {/* FILTER BTNS */}
                            <>


                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-stretch mt-7">
                                    {
                                        planetsData?.items.map(planet => (
                                            <CardPlanet key={planet.id} planet={planet} />
                                        ))
                                    }
                                </div>

                                {/* PAGINATOR */}

                                <div className="mt-10 flex flex-wrap justify-center gap-2">
                                    {
                                        planetsData?.meta.totalPages && Array.from({ length: planetsData?.meta.totalPages }).map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setPageNumberPlanets(index + 1)}
                                                className={`px-4 py-2 border text-xs md:text-sm border-light text-light ${index + 1 === planetsData?.meta.currentPage ? 'bg-dark' : 'bg-transparent'} hover:bg-primary/30 transition-all duration-300 ease-in-out`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))
                                    }
                                </div>
                            </>
                        )
                    }

                    {
                        (planetsError || planetsData?.items?.length == 0) && (
                            <div className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20   w-full flex flex-col items-center justify-center `}>
                                <p className='text-primary text-2xl'>Error al cargar los planetas</p>
                                <button className="bg-primary px-4 py-2 cursor-pointer" onClick={() => refetchPlanets()}>Reintentar</button>
                            </div>
                        )
                    }


                </SectionComponent>




            </>
        </>
    )
};

export default MundoZ;
