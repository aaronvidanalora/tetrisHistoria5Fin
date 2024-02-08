import { juegos } from "../componentes/bd";



export const orden = (campo, tipo) => {
    let tablaHTML = '';
    const tbodyElement = document.querySelector('#partidas tbody');
    
    switch (campo) {
        case 'nick':
            console.log('Ordenar por nick');
            juegos.sort((a, b) => a.nick.localeCompare(b.nick, 'es', { sensitivity: 'base' }));
            tablaHTML = generarTablaHTML(juegos);
            tbodyElement.innerHTML = tablaHTML;
          
            return juegos;
        case 'points':
            console.log('Ordenar por puntos');
            juegos.sort((a, b) => b.puntos - a.puntos);
            tablaHTML = generarTablaHTML(juegos);
            tbodyElement.innerHTML = tablaHTML;
      
            return juegos;
        default:
            // campo date
            console.log('Ordenar por fecha');
            juegos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
            tablaHTML = generarTablaHTML(juegos);
            tbodyElement.innerHTML = tablaHTML;
          
            return juegos;
    }
};

// Agrega esta función para generar la tabla HTML
export const generarTablaHTML = (juegos) => {
    let tablaHTML = '';
    juegos.forEach(element => {
        tablaHTML += `
            <tr>
                <td><img src="${element.avatar}" style= "width: 30px" alt=""></td>
                <td>${element.nick}</td>
                <td>${element.puntos}</td>
                <td>${element.fecha}</td>
            </tr>`;
    });

    return tablaHTML;
};
