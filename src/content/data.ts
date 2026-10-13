import type { Character } from "@/types";

type UUID = `${string}-${string}-${string}-${string}-${string}` | string;

export interface Sagas {
    name: string;
    description: string;
    image: string;
}

export interface Serie {
    id: UUID;
    name: string;
    sagas: Sagas[];
}

export const series: Serie[] = [
    {
        id: crypto.randomUUID(),
        name: "Dragon Ball",
        sagas: [
            {
                name: "Saga de Pilaf",
                description: "Goku conoce a Bulma y juntos emprenden la gran aventura para reunir las siete legendarias Esferas del Dragón, enfrentándose al ambicioso Emperador Pilaf y sus secuaces.",
                image: "/images/sagas/Saga de Pilaf (Búsqueda de las Esferas del Dragón).jpg"
            },
            {
                name: "Saga del 21° Torneo de Artes Marciales",
                description: "Goku y Krillin entrenan arduamente bajo la tutela del Maestro Roshi para participar en el prestigioso Torneo Tenkaichi Budokai, donde Goku se enfrenta a Jackie Chun.",
                image: "/images/sagas/Saga del 21° Torneo de Artes Marciales.jpg"
            },
            {
                name: "Saga de la Patrulla Roja ",
                description: "Goku viaja por el mundo para recuperar la esfera de 4 estrellas de su abuelo, desmantelando por sí solo a la temible organización militar del Ejército de la Patrulla Roja y enfrentando al asesino Tao Pai Pai.",
                image: "/images/sagas/Saga de la Patrulla Roja (Red Ribbon Army).jpg"
            },
            {
                name: "Saga del 22° Torneo de Artes Marciales",
                description: "El choque entre las escuelas Kame y Tsuru en una nueva edición del torneo, con Goku enfrentándose al letal y redimido Tenshinhan.",
                image: "/images/sagas/Saga del 22° Torneo de Artes Marciales.jpg"
            },
            {
                name: "Saga de Piccolo Daimaku",
                description: "El temible Rey Demonio Piccolo es liberado para sembrar el caos y rejuvenecer. Goku bebe el Agua Ultra Sagrada para despertar su poder oculto y vengar a sus amigos caídos.",
                image: "/images/sagas/Saga de Piccolo Daimaku.jpg"
            },
            {
                name: "Saga del 23° Torneo de Artes Marciales",
                description: "Un Goku ya adulto y entrenado por Kamisama regresa al torneo para enfrentar la reencarnación del rey demonio, Piccolo Jr., coronándose finalmente como campeón mundial.",
                image: "/images/sagas/Saga del 23° Torneo de Artes Marciales.jpg"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Dragon Ball Z",
        sagas: [
            {
                name: "Saga de los Saiyajin",
                description: "Se revela el origen extraterrestre de Goku con la llegada de su hermano Raditz. Los Guerreros Z deben prepararse para la invasión de los despiadados Saiyajin Nappa y Vegeta.",
                image: "/images/sagas/Saga de los Saiyajin.jpg"
            },
            {
                name: "Saga de Freezer",
                description: "El viaje al planeta Namekusei en busca de las esferas originales desata una batalla titánica contra las Fuerzas Especiales Ginyu y el tirano galáctico Freezer, culminando con la mítica transformación del Super Saiyajin legendario.",
                image: "/images/sagas/Saga de Freezer.png"
            },
            {
                name: "Saga Androides y Cell",
                description: "Trunks viaja desde un futuro apocalíptico para advertir sobre los androides del Dr. Gero y el bioandroide perfecto Cell, obligando a Gohan a despertar el Super Saiyajin 2 en los Juegos de Cell.",
                image: "/images/sagas/Saga de los Androides y Cell.png"
            },
            {
                name: "Saga Majin Buu",
                description: "El hechicero Babidi despierta al ancestral y caótico Majin Buu. La Tierra depende de nuevas técnicas como la Fusión (Gotenks y Vegetto), el Super Saiyajin 3 de Goku y la Genkidama universal.",
                image: "/images/sagas/Saga de Majin Buu.jpg"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Dragon Ball Super",
        sagas: [
            {
                name: "Saga de la Batalla de los Dioses",
                description: "El despertar de Bills, el Dios de la Destrucción, lleva a Goku a alcanzar la divinidad mediante el ritual del legendario Super Saiyajin Dios.",
                image: "/images/sagas/Saga de la Batalla de los Dioses.jpg"
            },
            {
                name: "Saga de la Resurrección de Freezer",
                description: "Los remanentes del ejército de Freezer lo reviven con las esferas del dragón. Tras un duro entrenamiento, desata su forma Golden Freezer frente a Goku y Vegeta en Super Saiyajin Blue.",
                image: "/images/sagas/Saga de la Resurrección de Freezer.jpg"
            },
            {
                name: "Saga del Torneo del Universo 6 vs Universo 7",
                description: "Una contienda entre hermanos dioses, Bills y Champa, donde los Guerreros Z enfrentan a guerreros de un universo paralelo como Hit y Cabba, debutando el SSJ Blue con Kaio-ken.",
                image: "/images/sagas/Saga del Torneo del Universo 6 vs Universo 7.jpg"
            },
            {
                name: "Saga de Goku Black / Trunks del Futuro",
                description: "Una misteriosa amenaza con el rostro de Goku azota el futuro. Goku, Vegeta y Trunks se enfrentan a la retorcida justicia divina de Zamasu y su fusión inmortal.",
                image: "/images/sagas/Saga de Goku Black - Trunks del Futuro.jpg"
            },
            {
                name: "Saga del Torneo de la Fuerza",
                description: "Un Battle Royale convocado por los Reyes de Todo (Zeno-sama) donde 8 universos luchan por su supervivencia, marcando la cima del poder de Goku al despertar la Doctrina Egoísta (Ultra Instinto).",
                image: "/images/sagas/Saga del Torneo de la Fuerza.jpg"
            },
            {
                name: "Saga de Broly",
                description: "El reencuentro de los tres destinos saiyajin nacidos en el mismo período: Goku, Vegeta y el prodigio desterrado Broly, dando lugar a la aparición canónica de Gogeta Blue.",
                image: "/images/sagas/Saga de Broly.jpg"
            },
            {
                name: "Saga de Moro ",
                description: "Moro, un antiguo hechicero capaz de devorar la energía vital de mundos enteros, escapa de la prisión galáctica, forzando a Goku y Vegeta a buscar nuevos entrenamientos espirituales.",
                image: "/images/sagas/Saga de Moro (El Prisionero de la Patrulla Galáctica).jpg"
            },
            {
                name: "Saga de Granola el Superviviente",
                description: "El último superviviente de la raza cereliana utiliza las esferas del dragón de su planeta para convertirse en el guerrero más fuerte y vengarse de los Saiyajin, mientras Vegeta despierta el Ultra Ego.",
                image: "/images/sagas/Saga de Granola el Superviviente.jpg"
            },
            {
                name: "Saga de Super Hero",
                description: "El renacido Ejército de la Patrulla Roja crea a los androides Gamma y al catastrófico Cell Max. Piccolo y Gohan superan sus límites alcanzando Orange Piccolo y Gohan Bestia.",
                image: "/images/sagas/Saga de Super Hero.jpg"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Dragon Ball Daima",
        sagas: [
            {
                name: "Saga del Reino de los Demonios",
                description: "Debido a una conspiración orquestada desde el Reino Demoníaco por el Rey Gomah y Degesu, Goku y sus amigos son transformados en niños pequeños ('Mini') y parten hacia un nuevo y misterioso universo.",
                image: "/images/sagas/Saga del Reino de los Demonios.jpg"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Dragon Ball GT ",
        sagas: [
            {
                name: "Saga del Gran Viaje ",
                description: "Goku vuelve a ser un niño por culpa del deseo accidental de Pilaf y debe viajar por el cosmos junto a Pan y Trunks en la nave espacial Tako para reunir las peligrosas Esferas de la Estrella Negra.",
                image: "/images/sagas/Saga del Gran Viaje (Esferas de la Estrella Negra).jpg"
            },
            {
                name: "Saga de Baby",
                description: "El parásito mutante alienígena Baby busca extinguir a los Saiyajin y toma control de la Tierra y el cuerpo de Vegeta. Goku desata la furia del Ozaru Dorado y alcanza el Super Saiyajin 4.",
                image: "/images/sagas/Saga de Baby.jpg"
            },
            {
                name: "Saga de Super Androide 17",
                description: "El Dr. Gero y el Dr. Myu se alían en el infierno para fusionar al Androide 17 original con un clon mejorado, creando una máquina definitiva capaz de absorber cualquier ataque de energía.",
                image: "/images/sagas/Saga de Super Androide 17.jpg"
            },
            {
                name: "Saga de los Dragones Oscuros",
                description: "El uso desmedido de las esferas libera la energía negativa acumulada en forma de siete dragones malignos. Goku y los Guerreros Z libran la última gran batalla contra Omega Shenron.",
                image: "/images/sagas/Saga de los Dragones Oscuros.jpg"
            }
        ]
    }
];


export const charactersAvailable: (Pick<Character, 'id' | 'name' | 'image'> & { hints: string[] })[] = [{
    "id": 1,
    "name": "Goku",
    "image": "https://dragonball-api.com/characters/goku_normal.webp",
    "hints": [
        "1: Es un guerrero alegre que disfruta enfrentarse a rivales poderosos.",
        "2: Su técnica más famosa concentra energía en las manos.",
        "3: Tiene cabello negro puntiagudo y un apetito extraordinario.",
        "4: Puede alcanzar una transformación legendaria con cabello dorado."
    ]
}, {
    "id": 2,
    "name": "Vegeta",
    "image": "https://dragonball-api.com/characters/vegeta_normal.webp",
    "hints": [
        "1: Es orgulloso, competitivo y nunca acepta fácilmente una derrota.",
        "2: Considera superar a su principal rival una obligación personal.",
        "3: Su cabello oscuro forma una silueta puntiaguda y característica.",
        "4: Es conocido como el príncipe de una raza de guerreros."
    ]
}, {
    "id": 3,
    "name": "Piccolo",
    "image": "https://dragonball-api.com/characters/picolo_normal.webp",
    "hints": [
        "1: Es un guerrero serio que suele actuar como mentor.",
        "2: Puede regenerar partes de su cuerpo y extender sus extremidades.",
        "3: Su piel es verde y suele llevar turbante y capa blanca.",
        "4: Entrenó al hijo de su antiguo rival contra una amenaza invasora."
    ]
}, {
    "id": 4,
    "name": "Bulma",
    "image": "https://dragonball-api.com/characters/bulma.webp",
    "hints": [
        "1: Es una inventora brillante con gran personalidad.",
        "2: Sus conocimientos científicos ayudan frecuentemente a los protagonistas.",
        "3: Creó un dispositivo capaz de localizar objetos mágicos mediante señales.",
        "4: Es la madre de un guerrero de cabello lavanda y pareja de un príncipe Saiyajin."
    ]
}, {
    "id": 5,
    "name": "Freezer",
    "image": "https://dragonball-api.com/characters/Freezer.webp",
    "hints": [
        "1: Es un conquistador cruel que disfruta ejercer poder sobre otros.",
        "2: Puede sobrevivir en el espacio sin necesidad de respirar.",
        "3: Su apariencia cambia entre varias formas y suele tener una cola larga.",
        "4: Su transformación dorada le permitió enfrentarse nuevamente a sus mayores enemigos."
    ]
}, {
    "id": 6,
    "name": "Zarbon",
    "image": "https://dragonball-api.com/characters/zarbon.webp",
    "hints": [
        "1: Es un guerrero elegante que desprecia la falta de refinamiento.",
        "2: Sirve a un poderoso tirano galáctico.",
        "3: Tiene cabello largo de color turquesa y una apariencia sofisticada.",
        "4: Puede transformarse en una criatura mucho más musculosa y monstruosa."
    ]
}, {
    "id": 7,
    "name": "Dodoria",
    "image": "https://dragonball-api.com/characters/dodoria.webp",
    "hints": [
        "1: Es un subordinado violento que disfruta intimidar a sus enemigos.",
        "2: Trabaja para un emperador galáctico temido.",
        "3: Su cuerpo es robusto, rosado y cubierto de protuberancias.",
        "4: Persiguió a un joven guerrero que buscaba vengar la destrucción de su pueblo."
    ]
}, {
    "id": 8,
    "name": "Ginyu",
    "image": "https://dragonball-api.com/characters/ginyu.webp",
    "hints": [
        "1: Es un soldado que dirige un grupo de élite muy peculiar.",
        "2: Sus compañeros realizan poses teatrales antes de combatir.",
        "3: Su habilidad especial le permite intercambiar cuerpos con otros seres.",
        "4: Lidera un escuadrón cuyos integrantes tienen nombres relacionados con productos lácteos."
    ]
}, {
    "id": 9,
    "name": "Celula",
    "image": "https://dragonball-api.com/characters/celula.webp",
    "hints": [
        "1: Es una criatura creada artificialmente para alcanzar la perfección.",
        "2: Puede absorber a otros seres para aumentar su poder.",
        "3: Su cuerpo tiene manchas oscuras y una larga cola absorbente.",
        "4: Organizó un torneo de combate para demostrar su superioridad ante los guerreros más fuertes."
    ]
}, {
    "id": 10,
    "name": "Gohan",
    "image": "https://dragonball-api.com/characters/gohan.webp",
    "hints": [
        "1: Es un joven que combina inteligencia académica con habilidades de combate.",
        "2: Aunque prefiere estudiar, posee un enorme potencial oculto.",
        "3: Durante una batalla decisiva, desató su furia y alcanzó una transformación extraordinaria.",
        "4: Es hijo de un famoso guerrero y derrotó a un bioandroide durante su infancia."
    ]
}, {
    "id": 11,
    "name": "Krillin",
    "image": "https://dragonball-api.com/characters/Krilin_Universo7.webp",
    "hints": [
        "1: Es un artista marcial valiente que compensa su menor fuerza con ingenio.",
        "2: Su técnica más conocida crea un disco de energía cortante.",
        "3: Es calvo durante gran parte de la historia y tiene seis puntos en la frente.",
        "4: Se casó con una androide rubia y tuvo una hija llamada Marron."
    ]
}, {
    "id": 12,
    "name": "Tenshinhan",
    "image": "https://dragonball-api.com/characters/Tenshinhan_Universo7.webp",
    "hints": [
        "1: Es un artista marcial disciplinado y de pocas palabras.",
        "2: Puede multiplicar sus brazos y crear copias de sí mismo.",
        "3: Su apariencia destaca por tener tres ojos.",
        "4: Su técnica más destructiva sacrifica enormes cantidades de energía para lanzar una descarga triangular."
    ]
}, {
    "id": 13,
    "name": "Yamcha",
    "image": "https://dragonball-api.com/characters/Final_Yamcha.webp",
    "hints": [
        "1: Es un luchador que inicialmente sentía timidez al relacionarse con mujeres.",
        "2: Tiene experiencia como bandido antes de convertirse en aliado.",
        "3: Su técnica emblemática imita los movimientos de un lobo.",
        "4: Es recordado por una pose de derrota muy popular entre los aficionados."
    ]
}, {
    "id": 14,
    "name": "Chi-Chi",
    "image": "https://dragonball-api.com/characters/ChiChi_DBS.webp",
    "hints": [
        "1: Es una mujer decidida que se preocupa mucho por su familia.",
        "2: Suele insistir en que sus hijos estudien y tengan una vida responsable.",
        "3: De joven combatía usando un casco con una cuchilla especial.",
        "4: Se casó con un guerrero de apetito enorme y es madre de dos hijos."
    ]
}, {
    "id": 15,
    "name": "Gotenks",
    "image": "https://dragonball-api.com/characters/Gotenks_Artwork.webp",
    "hints": [
        "1: Es un guerrero fusionado con una personalidad presumida y juguetona.",
        "2: Suele inventar ataques con nombres extravagantes.",
        "3: Su cabello cambia de color y forma cuando alcanza una transformación avanzada.",
        "4: Nace de la fusión mediante una danza entre dos niños Saiyajin."
    ]
}, {
    "id": 16,
    "name": "Trunks",
    "image": "https://dragonball-api.com/characters/Trunks_Buu_Artwork.webp",
    "hints": [
        "1: Este personaje tiene una versión adulta y otra infantil.",
        "2: Una de sus versiones utiliza una espada para luchar.",
        "3: Su cabello puede verse lavanda o azul según la etapa de la historia.",
        "4: La versión del futuro viaja en el tiempo para advertir sobre peligrosos androides."
    ]
}, {
    "id": 17,
    "name": "Master Roshi",
    "image": "https://dragonball-api.com/characters/roshi.webp",
    "hints": [
        "1: Es un maestro de artes marciales con hábitos bastante peculiares.",
        "2: Aunque parece frágil, puede liberar una fuerza extraordinaria.",
        "3: Suele llevar gafas oscuras, barba blanca y un caparazón a la espalda.",
        "4: Es famoso por enseñar una técnica que concentra energía y la dispara desde las manos."
    ]
}, {
    "id": 18,
    "name": "Bardock",
    "image": "https://dragonball-api.com/characters/Bardock_Artwork.webp",
    "hints": [
        "1: Es un guerrero endurecido que desconfía de los tiranos.",
        "2: Lleva una cinta roja alrededor de la frente.",
        "3: Sus visiones le permiten percibir fragmentos de un futuro terrible.",
        "4: Es el padre de dos hermanos Saiyajin que cambian el destino del universo."
    ]
}, {
    "id": 19,
    "name": "Launch",
    "image": "https://dragonball-api.com/characters/Lunch_traje_de_sirvienta_en_el_manga.webp",
    "hints": [
        "1: Es una mujer cuyo comportamiento cambia de forma inesperada.",
        "2: Un simple estornudo puede transformar por completo su personalidad.",
        "3: Una versión es amable y la otra tiene cabello rubio y actitud criminal.",
        "4: Alterna entre una mujer de cabello azul y otra agresiva que utiliza armas."
    ]
}, {
    "id": 20,
    "name": "Mr. Satan",
    "image": "https://dragonball-api.com/characters/Mr_Satan_DBSuper.webp",
    "hints": [
        "1: Es un luchador famoso que disfruta de la atención pública.",
        "2: Su confianza suele superar ampliamente sus verdaderas habilidades.",
        "3: Tiene cabello negro rizado, bigote y una personalidad exagerada.",
        "4: Se atribuye públicamente la victoria sobre un poderoso bioandroide."
    ]
}, {
    "id": 21,
    "name": "Dende",
    "image": "https://dragonball-api.com/characters/Dende_Artwork.webp",
    "hints": [
        "1: Es un personaje pacífico que posee habilidades curativas.",
        "2: Su ayuda puede restaurar la energía de guerreros heridos.",
        "3: Tiene piel verde, antenas y una apariencia infantil.",
        "4: Asume el cargo de guardián de la Tierra y puede restaurar las esferas mágicas."
    ]
}, {
    "id": 22,
    "name": "Android 17",
    "image": "https://dragonball-api.com/characters/17_Artwork.webp",
    "hints": [
        "1: Es un luchador tranquilo que suele preferir la independencia.",
        "2: Posee energía prácticamente inagotable durante los combates.",
        "3: Tiene cabello oscuro y suele vestir ropa informal.",
        "4: Gana un importante torneo multiversal y pide restaurar los universos borrados."
    ]
}, {
    "id": 23,
    "name": "Android 16",
    "image": "https://dragonball-api.com/characters/Androide_16.webp",
    "hints": [
        "1: Es un androide de gran tamaño que ama la naturaleza.",
        "2: A diferencia de otros seres artificiales, suele mostrar una personalidad pacífica.",
        "3: Tiene cabello naranja, armadura verde y una fuerza física extraordinaria.",
        "4: Sus últimas palabras impulsan a un joven guerrero a desatar una transformación decisiva."
    ]
}, {
    "id": 24,
    "name": "Android 19",
    "image": "https://dragonball-api.com/characters/Android19.webp",
    "hints": [
        "1: Es un androide con apariencia de muñeco y comportamiento obediente.",
        "2: Puede absorber energía de sus adversarios mediante las palmas.",
        "3: Tiene la cara redonda, mejillas rosadas y un sombrero característico.",
        "4: Acompaña a su creador durante el enfrentamiento contra un príncipe Saiyajin."
    ]
}, {
    "id": 25,
    "name": "Android 20 (Dr. Gero)",
    "image": "https://dragonball-api.com/characters/Dr._Gero nadroide 20.webp",
    "hints": [
        "1: Es un científico que convirtió su conocimiento en armas artificiales.",
        "2: Busca vengarse de un grupo de guerreros que frustró sus planes.",
        "3: Tiene barba blanca, bigote y un sombrero con un símbolo rojo.",
        "4: Se transforma en un androide y puede absorber energía mediante dispositivos en sus manos."
    ]
}, {
    "id": 26,
    "name": "Android 13",
    "image": "https://dragonball-api.com/characters/Androide13normal.webp",
    "hints": [
        "1: Es un androide diseñado para eliminar a un poderoso guerrero.",
        "2: Su apariencia original incluye gorra y ropa de colores vivos.",
        "3: Puede fusionarse con componentes de otros androides para aumentar su fuerza.",
        "4: Su forma mejorada tiene piel azul, cabello naranja y una enorme musculatura."
    ]
}, {
    "id": 27,
    "name": "Android 14",
    "image": "https://dragonball-api.com/characters/14Dokkan.webp",
    "hints": [
        "1: Es un androide de aspecto imponente y pocas palabras.",
        "2: Su diseño destaca por su gran tamaño y cabello claro.",
        "3: Combate junto a otros androides en una misión de exterminio.",
        "4: Su derrota proporciona un componente necesario para una poderosa fusión artificial."
    ]
}, {
    "id": 28,
    "name": "Android 15",
    "image": "https://dragonball-api.com/characters/15Dokkan.webp",
    "hints": [
        "1: Es un androide pequeño con una apariencia extravagante.",
        "2: Su estilo incluye gafas y un sombrero llamativo.",
        "3: Participa en una cacería organizada contra un guerrero de cabello puntiagudo.",
        "4: Sus componentes ayudan a activar una transformación mucho más poderosa de otro androide."
    ]
}, {
    "id": 29,
    "name": "Nail",
    "image": "https://dragonball-api.com/characters/Nail_Artwork.webp",
    "hints": [
        "1: Es un guerrero serio que protege a su pueblo.",
        "2: Posee habilidades regenerativas y puede fusionarse con otro combatiente.",
        "3: Su piel es verde y sus brazos tienen músculos muy definidos.",
        "4: Se une a un guerrero de capa blanca para aumentar considerablemente su poder."
    ]
}, {
    "id": 30,
    "name": "Raditz",
    "image": "https://dragonball-api.com/characters/Raditz_artwork_Dokkan.webp",
    "hints": [
        "1: Es un guerrero arrogante que aparece al comienzo de una gran saga.",
        "2: Su cabello negro es extremadamente largo y puntiagudo.",
        "3: Utiliza un rastreador para medir la fuerza de sus adversarios.",
        "4: Revela un vínculo familiar inesperado con el protagonista y secuestra a su hijo."
    ]
}, {
    "id": 31,
    "name": "Babidi",
    "image": "https://dragonball-api.com/characters/Babidi_Artwork.webp",
    "hints": [
        "1: Es un hechicero pequeño que manipula a otros para cumplir sus planes.",
        "2: Su magia puede despertar la maldad latente en ciertos guerreros.",
        "3: Tiene una cabeza grande, orejas puntiagudas y una voz chillona.",
        "4: Busca reunir energía de combate para liberar a una criatura rosada extremadamente destructiva."
    ]
}, {
    "id": 32,
    "name": "Majin Buu",
    "image": "https://dragonball-api.com/characters/BuuGordo_Universo7.webp",
    "hints": [
        "1: Es una criatura mágica con una personalidad infantil y caprichosa.",
        "2: Puede regenerarse incluso después de recibir daños devastadores.",
        "3: Su cuerpo es rosado y blando, con una antena en la cabeza.",
        "4: Convierte a sus enemigos en dulces antes de comérselos."
    ]
}, {
    "id": 33,
    "name": "Bills",
    "image": "https://dragonball-api.com/characters/Beerus_DBS_Broly_Artwork.webp",
    "hints": [
        "1: Es una deidad poderosa que disfruta de la buena comida.",
        "2: Su humor puede cambiar de la tranquilidad a la destrucción en segundos.",
        "3: Tiene apariencia felina, orejas puntiagudas y vestimenta inspirada en motivos egipcios.",
        "4: Su título divino está relacionado con destruir planetas y mantener el equilibrio cósmico."
    ]
}, {
    "id": 34,
    "name": "Whis",
    "image": "https://dragonball-api.com/characters/Whis_DBS_Broly_Artwork.webp",
    "hints": [
        "1: Es un acompañante elegante que mantiene una actitud serena.",
        "2: Puede desplazarse a velocidades extraordinarias y manipular el tiempo brevemente.",
        "3: Lleva un báculo y un anillo luminoso alrededor del cuello.",
        "4: Es maestro de artes marciales de una deidad felina destructora."
    ]
}, {
    "id": 35,
    "name": "Zeno",
    "image": "https://dragonball-api.com/characters/Zeno_Artwork.webp",
    "hints": [
        "1: Es una figura diminuta con autoridad absoluta.",
        "2: Su apariencia infantil contrasta con un poder aterrador.",
        "3: Puede borrar universos completos sin esfuerzo aparente.",
        "4: Es considerado el máximo soberano de todos los universos."
    ]
}, {
    "id": 37,
    "name": "Kibito-Shin",
    "image": "https://dragonball-api.com/characters/Kibito_shin_Artwork.webp",
    "hints": [
        "1: Es una deidad que combina las habilidades de dos seres distintos.",
        "2: Puede teletransportarse y realizar técnicas mágicas de apoyo.",
        "3: Su apariencia mezcla rasgos de un asistente divino y un dios de cabello blanco.",
        "4: Surge de una fusión permanente entre un Kaio-shin y su asistente."
    ]
}, {
    "id": 38,
    "name": "Jiren",
    "image": "https://dragonball-api.com/characters/Jiren.webp",
    "hints": [
        "1: Es un luchador reservado que prioriza la fuerza y la disciplina.",
        "2: Su poder puede rivalizar con el de seres divinos.",
        "3: Tiene una cabeza calva, ojos negros y un cuerpo extremadamente musculoso.",
        "4: Es el principal rival del protagonista durante un torneo entre universos."
    ]
}, {
    "id": 39,
    "name": "Toppo",
    "image": "https://dragonball-api.com/characters/Toppo.webp",
    "hints": [
        "1: Es un guerrero corpulento que defiende la justicia.",
        "2: Lidera un grupo de combatientes que protegen a los inocentes.",
        "3: Tiene un gran bigote blanco y viste un uniforme ajustado.",
        "4: Puede convertirse en candidato a dios de la destrucción y controlar energía destructiva."
    ]
}, {
    "id": 40,
    "name": "Dyspo",
    "image": "https://dragonball-api.com/characters/Dispo_render.webp",
    "hints": [
        "1: Es un guerrero veloz que confía en su extraordinaria rapidez.",
        "2: Su estilo de combate dificulta que sus rivales puedan alcanzarlo.",
        "3: Tiene largas orejas y rasgos que recuerdan a un conejo.",
        "4: Forma parte de una élite de justicieros y destaca por su velocidad supersónica."
    ]
}, {
    "id": 42,
    "name": "Marcarita ",
    "image": "https://dragonball-api.com/characters/Marcarita.webp",
    "hints": [
        "1: Es una figura angelical de modales elegantes y voz tranquila.",
        "2: Suele observar los combates con una expresión serena.",
        "3: Lleva un báculo y un peinado recogido con gran estilo.",
        "4: Es la guía y maestra de un dios destructor con apariencia de payaso."
    ]
}, {
    "id": 43,
    "name": "Vermoudh",
    "image": "https://dragonball-api.com/characters/Vermoud.webp",
    "hints": [
        "1: Es una deidad que suele actuar con teatralidad.",
        "2: Su apariencia recuerda a un artista de circo.",
        "3: Tiene maquillaje característico y una vestimenta inspirada en los payasos.",
        "4: Es un dios de la destrucción que compite en un torneo multiversal."
    ]
}, {
    "id": 44,
    "name": "Grand Priest ",
    "image": "https://dragonball-api.com/characters/Grand priest.webp",
    "hints": [
        "1: Es una figura angelical de enorme autoridad y serenidad.",
        "2: Su poder supera al de muchos seres divinos.",
        "3: Lleva cabello blanco, ojos tranquilos y un símbolo azul en la frente.",
        "4: Es el padre de los ángeles y sirve directamente al soberano supremo."
    ]
}, {
    "id": 63,
    "name": "Kaio del norte (Kaito)",
    "image": "https://dragonball-api.com/characters/Kaio_del_Norte.webp",
    "hints": [
        "1: Es una deidad cómica que disfruta contar chistes.",
        "2: Entrena guerreros mediante métodos poco convencionales.",
        "3: Tiene antenas, gafas oscuras y suele estar acompañado por un mono.",
        "4: Enseña al protagonista una técnica que multiplica temporalmente su fuerza y velocidad."
    ]
}, {
    "id": 64,
    "name": "Android 18",
    "image": "https://dragonball-api.com/characters/Androide_18_Artwork.webp",
    "hints": [
        "1: Es una luchadora de actitud fría y confianza absoluta.",
        "2: Posee energía inagotable y una fuerza sorprendente.",
        "3: Es rubia, suele llevar ropa informal y tiene una mirada desafiante.",
        "4: Se casa con un artista marcial bajito y juntos tienen una hija."
    ]
}, {
    "id": 65,
    "name": "Gogeta",
    "image": "https://dragonball-api.com/transformaciones/gogeta.webp",
    "hints": [
        "1: Es un guerrero fusionado que aparece para enfrentar amenazas extremas.",
        "2: Combina una actitud segura con una enorme capacidad de combate.",
        "3: Suele llevar un chaleco negro con detalles acolchados y cabello puntiagudo.",
        "4: Nace cuando dos rivales Saiyajin ejecutan correctamente una danza de fusión."
    ]
}, {
    "id": 66,
    "name": "Vegetto",
    "image": "https://dragonball-api.com/transformaciones/Vegetto.webp",
    "hints": [
        "1: Es una fusión de dos guerreros rivales con personalidades muy distintas.",
        "2: Su actitud mezcla confianza, orgullo y humor provocador.",
        "3: Lleva pendientes mágicos y su cabello combina rasgos de sus dos componentes.",
        "4: Su existencia depende de unos aretes divinos que permiten una fusión especial."
    ]
}, {
    "id": 67,
    "name": "Janemba",
    "image": "https://dragonball-api.com/transformaciones/Janemba_artwork_SDBH.webp",
    "hints": [
        "1: Es una criatura sobrenatural que altera las leyes de la realidad.",
        "2: Puede crear portales y manipular el espacio a su alrededor.",
        "3: Su forma inicial es amarilla y redondeada, mientras otra es roja y demoníaca.",
        "4: Obliga a dos guerreros a fusionarse para detener sus ataques dimensionales."
    ]
}, {
    "id": 68,
    "name": "Broly",
    "image": "https://dragonball-api.com/transformaciones/Broly_DBS_Base.webp",
    "hints": [
        "1: Es un guerrero cuyo poder aumenta a medida que pierde el control.",
        "2: Tiene una fuerza brutal y una personalidad marcada por el sufrimiento.",
        "3: Su cabello se vuelve verde en una transformación de poder descomunal.",
        "4: Su furia lo convierte en un rival tan peligroso que obliga a realizar una fusión."
    ]
}, {
    "id": 69,
    "name": "Kaio del Sur",
    "image": "https://dragonball-api.com/characters/Kaio_del_sur_cuerpo_completo.webp",
    "hints": [
        "1: Es una deidad que supervisa guerreros fallecidos.",
        "2: Tiene un carácter competitivo frente a otros seres de su rango.",
        "3: Su apariencia incluye antenas y ropa tradicional de un dios menor.",
        "4: Representa una de las cuatro direcciones cardinales entre los Kaio."
    ]
}, {
    "id": 70,
    "name": "Kaio del este",
    "image": "https://dragonball-api.com/characters/kaio del este.webp",
    "hints": [
        "1: Es una deidad encargada de supervisar una parte del universo.",
        "2: Participa en reuniones junto a otros seres de su categoría.",
        "3: Su diseño tiene rasgos distintivos y vestimenta tradicional divina.",
        "4: Su título identifica una dirección cardinal y forma parte del grupo de cuatro Kaio principales."
    ]
}, {
    "id": 71,
    "name": "Kaio del Oeste",
    "image": "https://dragonball-api.com/characters/Kaio del oeste.webp",
    "hints": [
        "1: Es una deidad que mantiene rivalidad con otro supervisor cósmico.",
        "2: Le gusta demostrar que sus guerreros son superiores.",
        "3: Tiene antenas y viste ropas propias de su rango divino.",
        "4: Su título corresponde a una dirección cardinal y suele competir con el supervisor del norte."
    ]
}, {
    "id": 72,
    "name": "Gran Kaio",
    "image": "https://dragonball-api.com/characters/Gran_kaio_sama12.webp",
    "hints": [
        "1: Es una figura divina con una actitud relajada.",
        "2: Disfruta la música y tiene una apariencia poco solemne para su rango.",
        "3: Su vestimenta y sus gafas reflejan un estilo moderno y desenfadado.",
        "4: Supervisa a los cuatro Kaio cardinales."
    ]
}, {
    "id": 73,
    "name": "Kaio-shin del Este",
    "image": "https://dragonball-api.com/characters/Kaio-shin_del_este_Artwork.webp",
    "hints": [
        "1: Es una deidad de aspecto juvenil que intenta proteger la vida.",
        "2: Puede utilizar magia y habilidades de combate divinas.",
        "3: Tiene piel violeta, cabello blanco y pendientes característicos.",
        "4: Es el único superviviente activo de su grupo tras una antigua catástrofe."
    ]
}, {
    "id": 74,
    "name": "Kaio-shin del Norte",
    "image": "https://dragonball-api.com/characters/Kaio-shin del norte.webp",
    "hints": [
        "1: Es una deidad asociada con la creación y la protección.",
        "2: Pertenece a un grupo de seres divinos que supervisan la vida.",
        "3: Su título se relaciona con una dirección cardinal.",
        "4: Su denominación lo identifica como uno de los Kaio-shin vinculados a una región cardinal del universo."
    ]
}, {
    "id": 75,
    "name": "Kaio-shin del Sur",
    "image": "https://dragonball-api.com/characters/Kaio-shin_del_Sur_Dokkan.webp",
    "hints": [
        "1: Es una deidad de gran poder físico dentro de su grupo.",
        "2: Su apariencia es más musculosa que la de varios de sus compañeros.",
        "3: Su título se asocia con una dirección cardinal.",
        "4: Fue uno de los Kaio-shin que combatieron contra una criatura mágica destructiva."
    ]
}, {
    "id": 76,
    "name": "Kaio-shin del Oeste",
    "image": "https://dragonball-api.com/characters/Kaio-shin_del_Oeste_Dokkan.webp",
    "hints": [
        "1: Es una deidad vinculada con la creación y el equilibrio cósmico.",
        "2: Pertenece al grupo de seres divinos encargados de proteger la vida.",
        "3: Su título se relaciona con una dirección cardinal.",
        "4: Su denominación lo distingue como uno de los Kaio-shin asociados a una región cardinal."
    ]
}, {
    "id": 77,
    "name": "Gran Kaio-shin",
    "image": "https://dragonball-api.com/characters/Gran_Kaio-shin_Artwork.webp",
    "hints": [
        "1: Es una antigua deidad conocida por su naturaleza amable.",
        "2: Su apariencia es redondeada y su personalidad transmite serenidad.",
        "3: Poseía un poder notable antes de ser absorbido por una criatura mágica.",
        "4: Su absorción influyó en la personalidad bonachona de una de las formas de una criatura rosada."
    ]
}, {
    "id": 78,
    "name": "Kibito",
    "image": "https://dragonball-api.com/characters/Kibito_Artwork.webp",
    "hints": [
        "1: Es un asistente divino que se toma muy en serio sus deberes.",
        "2: Puede teletransportarse y curar heridas graves.",
        "3: Tiene cabello largo, piel rosada y vestimenta ceremonial.",
        "4: Es el asistente de un Kaio-shin y acaba fusionándose con él mediante pendientes mágicos."
    ]
}];


// export const charactersAvailable: Pick<Character, 'id' | 'name' | 'image'>[] = [{
//     "id": 1,
//     "name": "Goku",
//     "image": "https://dragonball-api.com/characters/goku_normal.webp"
// }, {
//     "id": 2,
//     "name": "Vegeta",
//     "image": "https://dragonball-api.com/characters/vegeta_normal.webp"
// }, {
//     "id": 3,
//     "name": "Piccolo",
//     "image": "https://dragonball-api.com/characters/picolo_normal.webp"
// }, {
//     "id": 4,
//     "name": "Bulma",
//     "image": "https://dragonball-api.com/characters/bulma.webp"
// }, {
//     "id": 5,
//     "name": "Freezer",
//     "image": "https://dragonball-api.com/characters/Freezer.webp"
// }, {
//     "id": 6,
//     "name": "Zarbon",
//     "image": "https://dragonball-api.com/characters/zarbon.webp"
// }, {
//     "id": 7,
//     "name": "Dodoria",
//     "image": "https://dragonball-api.com/characters/dodoria.webp"
// }, {
//     "id": 8,
//     "name": "Ginyu",
//     "image": "https://dragonball-api.com/characters/ginyu.webp"
// }, {
//     "id": 9,
//     "name": "Celula",
//     "image": "https://dragonball-api.com/characters/celula.webp"
// }, {
//     "id": 10,
//     "name": "Gohan",
//     "image": "https://dragonball-api.com/characters/gohan.webp"
// }, {
//     "id": 11,
//     "name": "Krillin",
//     "image": "https://dragonball-api.com/characters/Krilin_Universo7.webp"
// }, {
//     "id": 12,
//     "name": "Tenshinhan",
//     "image": "https://dragonball-api.com/characters/Tenshinhan_Universo7.webp"
// }, {
//     "id": 13,
//     "name": "Yamcha",
//     "image": "https://dragonball-api.com/characters/Final_Yamcha.webp"
// }, {
//     "id": 14,
//     "name": "Chi-Chi",
//     "image": "https://dragonball-api.com/characters/ChiChi_DBS.webp"
// }, {
//     "id": 15,
//     "name": "Gotenks",
//     "image": "https://dragonball-api.com/characters/Gotenks_Artwork.webp"
// }, {
//     "id": 16,
//     "name": "Trunks",
//     "image": "https://dragonball-api.com/characters/Trunks_Buu_Artwork.webp"
// }, {
//     "id": 17,
//     "name": "Master Roshi",
//     "image": "https://dragonball-api.com/characters/roshi.webp"
// }, {
//     "id": 18,
//     "name": "Bardock",
//     "image": "https://dragonball-api.com/characters/Bardock_Artwork.webp"
// }, {
//     "id": 19,
//     "name": "Launch",
//     "image": "https://dragonball-api.com/characters/Lunch_traje_de_sirvienta_en_el_manga.webp"
// }, {
//     "id": 20,
//     "name": "Mr. Satan",
//     "image": "https://dragonball-api.com/characters/Mr_Satan_DBSuper.webp"
// }, {
//     "id": 21,
//     "name": "Dende",
//     "image": "https://dragonball-api.com/characters/Dende_Artwork.webp"
// }, {
//     "id": 22,
//     "name": "Android 17",
//     "image": "https://dragonball-api.com/characters/17_Artwork.webp"
// }, {
//     "id": 23,
//     "name": "Android 16",
//     "image": "https://dragonball-api.com/characters/Androide_16.webp"
// }, {
//     "id": 24,
//     "name": "Android 19",
//     "image": "https://dragonball-api.com/characters/Android19.webp"
// }, {
//     "id": 25,
//     "name": "Android 20 (Dr. Gero)",
//     "image": "https://dragonball-api.com/characters/Dr._Gero nadroide 20.webp"
// }, {
//     "id": 26,
//     "name": "Android 13",
//     "image": "https://dragonball-api.com/characters/Androide13normal.webp"
// }, {
//     "id": 27,
//     "name": "Android 14",
//     "image": "https://dragonball-api.com/characters/14Dokkan.webp"
// }, {
//     "id": 28,
//     "name": "Android 15",
//     "image": "https://dragonball-api.com/characters/15Dokkan.webp"
// }, {
//     "id": 29,
//     "name": "Nail",
//     "image": "https://dragonball-api.com/characters/Nail_Artwork.webp"
// }, {
//     "id": 30,
//     "name": "Raditz",
//     "image": "https://dragonball-api.com/characters/Raditz_artwork_Dokkan.webp"
// }, {
//     "id": 31,
//     "name": "Babidi",
//     "image": "https://dragonball-api.com/characters/Babidi_Artwork.webp"
// }, {
//     "id": 32,
//     "name": "Majin Buu",
//     "image": "https://dragonball-api.com/characters/BuuGordo_Universo7.webp"
// }, {
//     "id": 33,
//     "name": "Bills",
//     "image": "https://dragonball-api.com/characters/Beerus_DBS_Broly_Artwork.webp"
// }, {
//     "id": 34,
//     "name": "Whis",
//     "image": "https://dragonball-api.com/characters/Whis_DBS_Broly_Artwork.webp"
// }, {
//     "id": 35,
//     "name": "Zeno",
//     "image": "https://dragonball-api.com/characters/Zeno_Artwork.webp"
// }, {
//     "id": 37,
//     "name": "Kibito-Shin",
//     "image": "https://dragonball-api.com/characters/Kibito_shin_Artwork.webp"
// }, {
//     "id": 38,
//     "name": "Jiren",
//     "image": "https://dragonball-api.com/characters/Jiren.webp"
// }, {
//     "id": 39,
//     "name": "Toppo",
//     "image": "https://dragonball-api.com/characters/Toppo.webp"
// }, {
//     "id": 40,
//     "name": "Dyspo",
//     "image": "https://dragonball-api.com/characters/Dispo_render.webp"
// }, {
//     "id": 42,
//     "name": "Marcarita ",
//     "image": "https://dragonball-api.com/characters/Marcarita.webp"
// }, {
//     "id": 43,
//     "name": "Vermoudh",
//     "image": "https://dragonball-api.com/characters/Vermoud.webp"
// }, {
//     "id": 44,
//     "name": "Grand Priest ",
//     "image": "https://dragonball-api.com/characters/Grand priest.webp"
// }, {
//     "id": 63,
//     "name": "Kaio del norte (Kaito)",
//     "image": "https://dragonball-api.com/characters/Kaio_del_Norte.webp"
// }, {
//     "id": 64,
//     "name": "Android 18",
//     "image": "https://dragonball-api.com/characters/Androide_18_Artwork.webp"
// }, {
//     "id": 65,
//     "name": "Gogeta",
//     "image": "https://dragonball-api.com/transformaciones/gogeta.webp"
// }, {
//     "id": 66,
//     "name": "Vegetto",
//     "image": "https://dragonball-api.com/transformaciones/Vegetto.webp"
// }, {
//     "id": 67,
//     "name": "Janemba",
//     "image": "https://dragonball-api.com/transformaciones/Janemba_artwork_SDBH.webp"
// }, {
//     "id": 68,
//     "name": "Broly",
//     "image": "https://dragonball-api.com/transformaciones/Broly_DBS_Base.webp"
// }, {
//     "id": 69,
//     "name": "Kaio del Sur",
//     "image": "https://dragonball-api.com/characters/Kaio_del_sur_cuerpo_completo.webp"
// }, {
//     "id": 70,
//     "name": "Kaio del este",
//     "image": "https://dragonball-api.com/characters/kaio del este.webp"
// }, {
//     "id": 71,
//     "name": "Kaio del Oeste",
//     "image": "https://dragonball-api.com/characters/Kaio del oeste.webp"
// }, {
//     "id": 72,
//     "name": "Gran Kaio",
//     "image": "https://dragonball-api.com/characters/Gran_kaio_sama12.webp"
// }, {
//     "id": 73,
//     "name": "Kaio-shin del Este",
//     "image": "https://dragonball-api.com/characters/Kaio-shin_del_este_Artwork.webp"
// }, {
//     "id": 74,
//     "name": "Kaio-shin del Norte",
//     "image": "https://dragonball-api.com/characters/Kaio-shin del norte.webp"
// }, {
//     "id": 75,
//     "name": "Kaio-shin del Sur",
//     "image": "https://dragonball-api.com/characters/Kaio-shin_del_Sur_Dokkan.webp"
// }, {
//     "id": 76,
//     "name": "Kaio-shin del Oeste",
//     "image": "https://dragonball-api.com/characters/Kaio-shin_del_Oeste_Dokkan.webp"
// }, {
//     "id": 77,
//     "name": "Gran Kaio-shin",
//     "image": "https://dragonball-api.com/characters/Gran_Kaio-shin_Artwork.webp"
// }, {
//     "id": 78,
//     "name": "Kibito",
//     "image": "https://dragonball-api.com/characters/Kibito_Artwork.webp"
// }];