import { juegos,  } from "../componentes/bd";
import { orden } from "../funciones/funciones";

export const ranking = {
    template: //html
    `
    <header class="d-flex align-items-center justify-content-center">
        <img src="img/logo.png" alt="logo" width="200" class="mt-5" />
    </header>
    <main class="container mt-5 bg-opacity-50 bg-dark p-2">
        <!-- Pantalla tablas y ranking -->
        <div id="info" class="">
            <div id="ranking" class="m-5 p-5 bg-dark">
            </div>
            <div id="partidas" class="m-5 p-5 bg-dark">
            </div>
        </div>
    </main>
    `,
    script: () => {
        function pintaRanking() {
            const ranking = document.querySelector('#ranking');
            ranking.innerHTML = //html 
                `<h2 class="text-center text-light">Ranking</h2>
                <table class="table table-dark align-middle">
                    <thead>
                        <tr class="bg-dark">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fs-2">1</td>
                            <td><img src="" alt="avatar" /></td>
                            <td>ANDER</td>
                            <td>1255</td>
                        </tr>
                        <tr>
                            <td class="fs-2">2</td>
                            <td><img src="" alt="avatar" /></td>
                            <td>ANDER</td>
                            <td>1255</td>
                        </tr>
                        <tr>
                            <td class="fs-2">3</td>
                            <td><img src="" alt="avatar" /></td>
                            <td>ANDER</td>
                            <td>1255</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>`;
        }

        function pintaTabla() {
            const partidas = document.querySelector('#partidas');
            let tablaHTML = //html 
                `<h2 class="text-center text-light">Partidas</h2>
                <div class="input-group mb-3">
                    <button id="botonBuscar">BUSCAR</button>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Buscador"
                        aria-label="Buscador"
                        aria-describedby="button-addon2"
                        id="buscadorNick"
                    />
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                    >
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nick <i id="flechaNick" class="bi bi-arrow-up-square"></i></th>
                            <th>Puntuación<i id="flechaPuntuacion" class="bi bi-arrow-up-square"></i></th>
                            <th>Fecha <i id="flechaFecha" class="bi bi-arrow-up-square"></i></th>
                        </tr>
                    </thead>
                    <tbody>`;
        
            juegos.forEach(element => {
                tablaHTML += //html 
                    `<tr>
                        <td><img src="${element.avatar}" style= "width: 30px" alt=""></td>
                        <td>${element.nick}</td>
                        <td>${element.puntos}</td>
                        <td>${element.fecha}</td>
                    </tr>`;
            });
        
            tablaHTML += //html 
                `
                    </tbody>
                    <tfoot></tfoot>
                </table>`;
        
            partidas.innerHTML = tablaHTML;
        }

        const datosEjemploPartida = {
            avatar: 'https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg',
            nick: 'MANUEL',
            puntos: 100,
            fecha: '21 MAYO 2023'
        };

        function insertaNuevaPartida(datosEjemploPartida) {
            console.log("Guardando partida");
            juegos.push(datosEjemploPartida);
            console.log(juegos);
        }

        function pintaDatos(partida) {
            console.log('Datos de la partida:');
            console.log('Avatar:', partida.avatar);
            console.log('Nick:', partida.nick);
            console.log('Puntos:', partida.puntos);
            console.log('Fecha:', partida.fecha);
        }

        console.log(pintaRanking);
        console.log(pintaTabla);
        pintaTabla();
        pintaDatos(datosEjemploPartida);

        const botonBuscar = document.getElementById('botonBuscar');
        botonBuscar.addEventListener('click', buscar);

        function buscar() {
            const inputNick = document.getElementById('buscadorNick').value;
            console.log('nombre buscado: ', inputNick);

            // Filtra las partidas que coinciden con el nombre buscado
            const partidasFiltradas = juegos.filter(partida => partida.nick.toLowerCase().includes(inputNick.toLowerCase()));

            // Pinta la tabla con las partidas filtradas
            pintaTablaFiltrada(partidasFiltradas);
        }

        function pintaTablaFiltrada(partidas) {
            const partidasElement = document.querySelector('#partidas tbody');
            partidasElement.innerHTML = ''; // Limpia la tabla actual

            partidas.forEach(element => {
                const filaHTML = `
                    <tr>
                        <td><img src="${element.avatar}" style="width: 30px" alt=""></td>
                        <td>${element.nick}</td>
                        <td>${element.puntos}</td>
                        <td>${element.fecha}</td>
                    </tr>
                `;
                partidasElement.innerHTML += filaHTML;
            });
        }

        const iconoNick = document.querySelector('#flechaNick');
        iconoNick.addEventListener('click', function () {
            console.log('Click en flechaNick');
            orden('nick', 'down');
        });

        const iconoPoints = document.querySelector('#flechaPuntuacion');
        iconoPoints.addEventListener('click', function () {
            console.log('Click en flechaPuntuacion');
            orden('points', 'down');
        });

        const iconoDate = document.querySelector('#flechaFecha');
        iconoDate.addEventListener('click', function () {
            console.log('Click en flechaFecha');
            orden('date', 'down');
        });
    }
};
