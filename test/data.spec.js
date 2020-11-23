import funciones from '../src/data.js';


const pokefi = [{ name: "celeri", type: "water" }, { name: "asa", type: "water" }, { name: "pikachu", type: "poison" }];

describe('objeto', () => {
  it('es un objeto', () => {
    expect(typeof funciones).toBe('object');
  });

  describe('ordenarAZ', () => {    //describe la funcion
    it('se espera una funcion', () => {    // it lo que se espera como comentario 
      expect(typeof funciones.ordenarAZ).toBe('function'); // expect funcion como talñ funcion q traere de data
    });

    it('ordenar de az', () => {
      expect(funciones.ordenarAZ(pokefi)).toEqual([{ name: "asa", type: "water" }, { name: "celeri", type: "water" }, { name: "pikachu", type: "poison" }]); // expect lo que recibe y tobe es lo que se espera
    });
  });

  describe('ordenarZA', () => {    //describe la funcion
    it('se espera una funcion', () => {    // it lo que se espera como comentario 
      expect(typeof funciones.ordenarZA).toBe('function'); // expect funcion como talñ funcion q traere de data
    });

    it('ordenar de za', () => {
      expect(funciones.ordenarZA(pokefi)).toEqual([{ name: "pikachu", type: "poison" } , { name: "celeri", type: "water" },{ name: "asa", type: "water" } ]); // expect lo que recibe y tobe es lo que se espera
    });

  });

  describe('filtrar', () => {
    it('se espera una funcion de filtrado', () => {
      expect(typeof funciones.filtrarplanta).toBe('function');
    });

    it('filtrar por tipo', () => {    //que solo filtre esa linea .only
        expect(funciones.filtrarAgua(pokefi)).toEqual([{ name: "celeri", type: "water" }, { name: "asa", type: "water"}]);
    });
  });

});

