

// Modifica la función para aceptar un argumento y retornar el nick modificado
export function modificaNick(nick) {
    // trim elimina espacios en blanco
    const nombre = nick.trim();

    // Si está vacío, muestra un alert y retorna null
    if (!nombre) {
        // alert('El nick no puede estar en blanco');
        return null;
    } else {
        // Reemplaza espacios en blanco por _ y convierte a mayúsculas
        const modificadoNick = nombre.replace(/\s+/g, '_').toUpperCase();
        return modificadoNick;
    }
}
export function modificaData(inputFecha) {
    
    const anyo = inputFecha[0] + inputFecha[1];
    const numeroMes = inputFecha[3] + inputFecha[4];
    const dia = parseInt(inputFecha[6] + inputFecha[7], 10); // Convertir a número para quitar el cero delante si existe
    const hora = inputFecha.substring(9, 17);

    // Array nombre meses
    const meses = [
        'enero', 'febrero', 'marzo', 'abril',
        'mayo', 'junio', 'julio', 'agosto',
        'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    // Obtener nombre que corresponde al número del mes
    const mesFinal = meses[parseInt(numeroMes, 10) - 1];

    // Formato que pide día, nombre mes, año y hora
    const fechaFinal = `${dia} ${mesFinal} 20${anyo} - ${hora}`;

    return fechaFinal;
}

















export function modificaData2(inputFecha2) {
    const anyo = inputFecha2.getFullYear() % 100;
    const mes = (inputFecha2.getMonth() + 1).toString().padStart(2, '0');
    const dia = inputFecha2.getDate().toString().padStart(2, '0');
    const hora = inputFecha2.getHours().toString().padStart(2, '0');
    const minutos = inputFecha2.getMinutes().toString().padStart(2, '0');
    const segundos = inputFecha2.getSeconds().toString().padStart(2, '0');
    const fechaFinal = `${anyo}/${mes}/${dia}T${hora}:${minutos}:${segundos}`;
    return fechaFinal;
}

export const dias = (textoFecha) => {
    const formato = /^(\d{2})\/(\d{2})\/(\d{2})T(\d{2}):(\d{2}):(\d{2})$/
    const coincidenciaFecha = textoFecha.match(formato)
    
    if (!coincidenciaFecha) {
      return {
        error: true,
        missatge: 'El format no és correcte'
      }
    }
  
    const [, anyo, mes, dia, hora, minuto, segundo] = coincidenciaFecha
    const fechaEntrada = new Date(`20${anyo}-${mes}-${dia}T${hora}:${minuto}:${segundo}`)
    const fechaActual = new Date()
  
    const diferenciaTiempo = fechaActual - fechaEntrada
    const diferenciaEnDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24))
  
    return diferenciaEnDias
  }
  
  function buscar() {
    const inputNick = document.getElementById('buscadorNick').value;
    console.log('nombre buscado: ', inputNick);

    // Filtra las partidas que coinciden con el nombre buscado
    const partidasFiltradas = juegos.filter(partida => partida.nick.toLowerCase().includes(inputNick.toLowerCase()));

    // Pinta la tabla con las partidas filtradas
    pintaTablaFiltrada(partidasFiltradas);
}














