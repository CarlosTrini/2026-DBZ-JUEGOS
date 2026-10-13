# Dragon Ball Z (Game + Gemini + API-DBZ)

Sitio con página de home, mini-juegos e información del anime DBZ

![alt text](/public/images/screen/index-page.png)

para gemini, usa su variable de entorno:  VITE_GEMINI_API_KEY

## Sitio desplegado en netlify
> https://dbz-mini-juegos.netlify.app/

## Video de muestra
> https://drive.google.com/file/d/1U9VHoQUh-6xKfEwLp0K7RZdEKg8Chh41/view?usp=drive_link


## ¿Qué se uso durante su desarrollo?

- google-gemini
- React-TS
- React-router-dom
- React-query (TanstackQuery)
- canvas-confetti
- axios
- TailwindCSS
- lucide-react
- api-dbz
- sweetalert2


## Páginas

-  1.- Home: Se muestra un hero con botones CTA para ir a los juegos (Ahorcado, Memory) o ver las sagas de Dragon Ball Z

- 2.-Mini-juegos: 
    - Ahorcado: Juego clásico de ahorcado con personajes de Dragon Ball Z. Se genera una palabra aleatoria (personaje, lugar, objeto, etc.) y el jugador debe adivinarla letra a letra. 
    
        -   Tiene un sistema de pistas generadas por Gemini y dos modalidaes de juego: VS tiempo o Limite de intentos. Muestra pantalla de victoria y derrota. Se usan animaciones de confetti

        - Memory: Juego de memoria con personajes de Dragon Ball Z. Se genera una matriz de personajes aleatorios y el jugador debe encontrar los pares. Tiene un contador de movimientos y un límite de tiempo. Muestra pantalla de victoria y derrota. Se usan animaciones de confetti

- 3.-Mundo Z: Aqui se cuenta con:
    -   Hero
    -   Sagas: se tiene un filtro para ver por sagas y cada saga cuenta con una card de dos vista: imagen y al dar click en el texto, la parte de atrás se muestra texto.
    -  Peronsajes: Se consume el api de DBZ y se muestran los personajes con su paginador
    - Planetas: Se consume el api de DBZ y se muestran los planetas con su paginador



## ¿Qué páginas contiene?

- Página de index ( https://komorebi-cafeshop.netlify.app/ )



## INICIO
![alt text](/public/images/screen/index-page.png)

## MINI JUEGOS Z
![alt text](/public/images/screen/games-page.png)

### Ahorcado

![alt text](/public/images/screen/games-page-hangman-1.png)
![alt text](/public/images/screen/games-page-hangman-2.png)

### Memory

![alt text](/public/images/screen/games-page-memory-1.png)

## Mundo Z
![alt text](/public/images/screen/world-page.png)


