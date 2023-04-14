
 import { getSaludo } from "../../public/src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () =>{

test('saludo debe retornar hola fernando', ()=>{

    
    
const name='Fernando';
const message= getSaludo(name)


    console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
})

}); 