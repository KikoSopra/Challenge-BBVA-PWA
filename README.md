# Challenge BBVA PWA

Un pequeño challenge propuesto por el BBVA que consiste en una pequeña
demo del famoso juego "Red Light, Green Light".





## Funcionalidad

La funcionalidad del juego es bastante simple: se trata de una PWA
(Aplicación web progresiva) y cuenta con dos vistas.

-La primera vista, el `HomeComponent`, cuenta con un sencillo login
de usuario, donde este se registra o se logea en función de si es
la primera vez que juega, o no. 
Estos datos son almacenados en `localStorage`, por lo que son persistentes.
Además, el input valida si se ha introducido un nombre de usuario o no.

-La segunda vista, el `GameComponent`, es la vista del juego, donde
el usuario deberá ir clicando en los botones de izquierda y derecha
(empezando por la izquierda), mientras se muestre la palabra 'RUN'
para sumar puntos a su marcador.
Si el usuario clica dos veces seguidas en el mismo botón, perderá un punto,
mientras que si hace click en cualquier botón mientras se muestra la 
palabra 'STOP', su puntuación se reiniciará y marcará 0.

Tanto la puntuación actual como la puntuación máxima de cada usuario
se registrará en el localStorage junto a su nombre y se actualizará automáticamente.

Si en la pantalla de Home se vuelve a introducir un usuario que ya tiene
una partida en marcha, se continuará desde el punto donde se dejó.




## Home

![App Screenshot](https://i.imgur.com/OzIRebG.png)

## Game
![App Screenshot](https://i.imgur.com/mH1Ur2s.png)

## Instalación

Cómo descargar el proyecto y correrlo en modo local.

```bash
  git clone https://github.com/KikoSopra/Challenge-BBVA-PWA.git
  cd challenge-bbva-pwa
  npm install
  ng serve -o
```
Esto clonará el proyecto en el directorio deseado, se instalarán las
dependencias necesarias, y se servirá la aplicación en modo local
automáticamente (con el flag -o) en el puerto 4200.
