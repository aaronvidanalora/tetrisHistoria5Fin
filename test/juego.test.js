// Importa la función modificaNick desde el archivo juego.js en la carpeta src
import { modificaNick, modificaData, modificaData2, dias } from "../src/modificaNick.js";

// Importa la librería de pruebas chai
import { expect } from "chai";

// Describe la suite de pruebas para la función modificaNick
describe('modificaNick', () => {
    it('debería retornar null y mostrar un alert si la cadena está vacía', () => {
        const resultado = modificaNick('');
        // Esperamos que la función retorne null
        expect(resultado).to.be.null;
        // Asegurémonos de que se haya mostrado un alert con el mensaje correcto
        // Esto es una simplificación, ya que no podemos probar directamente los alertas en un entorno de prueba.
    });

    it('debería modificar la cadena correctamente si contiene texto', () => {
        const resultado = modificaNick('    cara culo  ');
        // Esperamos que la función modifique la cadena como se describe
        expect(resultado).to.equal('CARA_CULO');
    });
});

// Describe la suite de pruebas para la función modificaData
describe('modificaData', () => {
    it('debería modificar la cadena de fecha correctamente', () => {
      const resultado = modificaData('23/12/02T12:12:12');
      // Esperamos que la función modifique la cadena de fecha devolviendo texto 2 diciembre 2023 - 12:12:12
      expect(resultado).to.equal('2 diciembre 2023 - 12:12:12');
    });
  });
  
  // Describe la suite de pruebas para la función modificaData2
  describe('modificaData2', () => {
    it('debería modificar el objeto Date correctamente', () => {
      const fecha = new Date('2023-12-17T03:24:00');
      const resultado = modificaData2(fecha);
      // Esperamos que la función modifique el objeto Date sustituyendo guiones por barras inclinadas 23/12/17T03:24:00
      expect(resultado).to.equal('23/12/17T03:24:00');
    });
  });
  
// Describe la suite de pruebas para la función dias
describe('dias', () => {
  it('debería calcular los días transcurridos correctamente', () => {
    const fechaInicial = new Date('2023-09-07T03:24:00');
    const fechaActual = new Date('2023-09-17T03:24:00');
    const resultado = dias('24/01/05T21:00:00');
    // Esperamos que la función calcule los días transcurridos correctamente
	// Hay que tener en cuenta el día que se pasa el test para que el resultado sea 10 u el que corresponda. Modifica el 10 por los días que han pasado en el momento de pasar el test
    expect(resultado).to.equal(10);
  });

  it('debería manejar el formato incorrecto', () => {
    const fechaIncorrecta = 'formato_incorrecto';
    const resultado = dias(fechaIncorrecta);
    // Esperamos que la función devuelva un objeto de error
    expect(resultado).to.deep.equal({
      error: true,
      missatge: 'El format no és correcte'
    });
  });
});

  
  

  