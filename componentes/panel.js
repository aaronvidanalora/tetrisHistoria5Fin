import { models } from "./models";
import { ModeloPieza } from "../funciones/clases";
import { juego } from "../vistas/juego";

export const panel = {
  matriz: [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],


  
  pintaPanel: () => {
    const panelElement = document.querySelector('#panel');
    panelElement.innerHTML = '';

    for (let fila = 0; fila < panel.matriz.length - 1; fila++) {
        let divFilas = '<div class="fila" style="display: flex; justify-content: center;">';

        for (let columna = 1; columna < panel.matriz[fila].length - 1; columna++) {
            let divCeldas = '';
            if (panel.matriz[fila][columna] === 0) {
                divCeldas += '<div class="celda" style="background-color: #343a40; border: 1px solid black"></div>';
            } else {
                divCeldas += '<div class="celda" style="background-color: #007bff; border: 1px solid black"></div>';
            }
            divFilas += divCeldas;
        }
        divFilas += '</div>';
        panelElement.innerHTML += divFilas;
    }
},

  



  borrarPieza: () => {
    if (panel.nuevaPieza) {
      for (let i = 0; i < panel.nuevaPieza.altura; i++) {
        for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
          const elemento = panel.nuevaPieza.matriz[i][x];
          if (elemento) {
            panel.matriz[i + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = 0;
          }
        }
      }
      panel.pintaPanel();
    }
  },
  
  
  crearNuevaPieza: () => {
    const aleatorioModelo = Math.floor(Math.random() * 7);
    
    // Obtener el ancho de la pieza directamente
    const ancho = models[aleatorioModelo].matriz[0].length;
    
    let aleatorioX;
    switch (ancho) {
      case 1:
        aleatorioX = Math.floor(Math.random() * 10);
        break;
      case 2:
        aleatorioX = Math.floor(Math.random() * 9);
        break;
      case 3:
        aleatorioX = Math.floor(Math.random() * 8);
        break;
      case 4:
        aleatorioX = Math.floor(Math.random() * 7);
        break;
    }
    
    const pieza = new ModeloPieza(aleatorioModelo, aleatorioX, 1, 0);
    panel.nuevaPieza = pieza; 
    return pieza;
   
  },
  
  insertarPieza: () => {
    for(let i=0; i<panel.nuevaPieza.altura; i++){
      for(let x=0; x<panel.nuevaPieza.longitud; x++){
        const elemento = panel.nuevaPieza.matriz[i][x];
        if(elemento){
          panel.matriz[i + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = elemento;
        }
      }
    }
    
    panel.pintaPanel();
  },
  
  
  
  
  



  moverDra: () => {
    if (panel.nuevaPieza) {
      if((panel.nuevaPieza.x + panel.nuevaPieza.longitud)<11){
        panel.borrarPieza();
        panel.nuevaPieza.x ++
        panel.insertarPieza();
        panel.pintaPanel()
      }
      
    }
    
    
  },
  
  moverIzq: () => {
    if (panel.nuevaPieza) {
      if(panel.nuevaPieza.x >1){
        panel.borrarPieza();
        panel.nuevaPieza.x --
        panel.insertarPieza();
        panel.pintaPanel()
      }
      
    }
  },
  
  bajar: () => {
    if (panel.nuevaPieza) {
      if((panel.nuevaPieza.y + panel.nuevaPieza.altura)<21){
        panel.borrarPieza();
        panel.nuevaPieza.y ++
        panel.insertarPieza();
        panel.pintaPanel()
      }
      
    }
  },


  iniciarMovimiento: () => {
    panel.movimientoInterval = setInterval(() => {
      panel.bajar();
    }, 1000);
  },
  
  

  controlTeclas: () => {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          panel.moverIzq();
          console.log('izquierda');
          break;
        case "ArrowRight":
           panel.moverDra();
          console.log('derecha');
          break;
        case "ArrowDown":
           panel.bajar();
          console.log('abajo');
          break;
        case "ArrowUp":
          panel.borrarPieza()
          panel.nuevaPieza.girar();
          panel.insertarPieza()
          console.log('arriba');
          break;
        default:
          break;
      }
    });
  },
  
};



