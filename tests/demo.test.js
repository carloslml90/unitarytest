

describe('Pruebas en <DemoComponent />', () => {
test ('Esta prueba no debe fallar',()=> { 

   const message1= 'hola mundo';

   const message2= message1.trim();

expect(message1).toBe(message2);
});

});