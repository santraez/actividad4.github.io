////////////////////////////////////////////////////////////////////////////////////////
// NAVEGADOR
////////////////////////////////////////////////////////////////////////////////////////

// INSERTAR NAVEGADOR
document.addEventListener('DOMContentLoaded', () => {

  // INNER HTML
  document.getElementById('root').innerHTML = `
    <div style="width:100vw;height:100vh;display:grid;grid-template-columns:10% 90%;">
      <div>
        <button id="e1" style="width:100%;height:10%;font-size:25px;font-weight:700;">E - 01</button>
        <button id="e2" style="width:100%;height:10%;font-size:25px;font-weight:700;">E - 02</button>
        <button id="e3" style="width:100%;height:10%;font-size:25px;font-weight:700;">E - 03</button>
        <button id="e4" style="width:100%;height:10%;font-size:25px;font-weight:700;">E - 04</button>
        <button id="e5" style="width:100%;height:10%;font-size:25px;font-weight:700;">E - 05</button>
        <button id="e6" style="width:100%;height:10%;font-size:25px;font-weight:700;">E - 06</button>
        <button id="e7" style="width:100%;height:10%;font-size:25px;font-weight:700;">E - 07</button>
        <button id="e8" style="width:100%;height:10%;font-size:25px;font-weight:700;">E - 08</button>
        <button id="e9" style="width:100%;height:10%;font-size:25px;font-weight:700;">E - 09</button>
        <button id="e10" style="width:100%;height:10%;font-size:25px;font-weight:700;">E - 10</button>
      </div>
      <div style="display:grid;grid-template-rows:1fr 1fr;">
        <div id="formulario" style="width:90%;height:calc(100%-2px);display:flex;flex-direction:column;justify-content:center;align-items:center;border-bottom:2px dashed gray;margin:0 5%">
          <h1 style="font-size:50px;color:#C2C2C2;user-select:none;">FORMULARIO</h1>
        </div>
        <div id="resultado" style="width:90%;height:calc(100%-2px);display:flex;flex-direction:row;justify-content:center;align-items:center;border-top:2px dashed gray;margin:0 5%">
          <h1 style="font-size:50px;color:#C2C2C2;user-select:none;">RESULTADO</h1>
        </div>
      </div>
    </div>
  `;

  // LANZADORES DE EVENTOS
  document.getElementById('e1').addEventListener('click', () => ejercicio1());
  document.getElementById('e2').addEventListener('click', () => ejercicio2());
  document.getElementById('e3').addEventListener('click', () => ejercicio3());
  document.getElementById('e4').addEventListener('click', () => ejercicio4());
  document.getElementById('e5').addEventListener('click', () => ejercicio5());
  document.getElementById('e6').addEventListener('click', () => ejercicio6());
  document.getElementById('e7').addEventListener('click', () => ejercicio7());
  document.getElementById('e8').addEventListener('click', () => ejercicio8());
  document.getElementById('e9').addEventListener('click', () => ejercicio9());
  document.getElementById('e10').addEventListener('click', () => ejercicio10());

});

////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO 01
////////////////////////////////////////////////////////////////////////////////////////

/*
A un profesor le pagan según sus horas y una tarifa de pago por horas.
Si la cantidad de horas trabajadas es mayor a 40 horas, la tarifa
se incrementa en un 50 % para las horas extras. Calcular el salario del
profesor dadas las horas trabajadas y la tarifa.
*/

// INSERTAR FORMULARIO
const ejercicio1 = () => {

  // INNER HTML
  document.getElementById('formulario').innerHTML = `
    <section style="width:70%;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;">
      <p style="width:100%;text-align:center;font-size:12px;font-weight:700;background-color:black;color:white;margin:0;margin-bottom:10px;border-radius:23px 23px 0 0;padding:5px 0;user-select:none;">EJERCICIO 01</p>
      <input
        type="tel"
        id="horas-e1"
        placeholder="HORAS TRABAJADAS"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <input
        type="tel"
        id="tarifa-e1"
        placeholder="TARIFA POR HORA"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <button
        id="boton-e1"
        style="width:100%;border:none;font-size:25px;font-weight:700;color:white;background-color:black;border-radius:0 0 23px 23px;padding:15px 0;cursor:pointer;"}"
      ><< CALCULAR SALARIO >></button>
    </section>
  `;

  // FOCUS INPUT
  document.getElementById('horas-e1').focus();

  // LANZADORES DE EVENTOS
  document.getElementById('boton-e1').addEventListener('click', () => calcular1());
  document.getElementById("horas-e1").addEventListener("keypress", e => { if(e.key === "Enter") calcular1() });
  document.getElementById("tarifa-e1").addEventListener("keypress", e => { if(e.key === "Enter") calcular1() });

};

// INSERTAR RESULTADO
const calcular1 = () => {

  // VARIABLES
  const input1 = document.getElementById('horas-e1').value;
  const input2 = document.getElementById('tarifa-e1').value;
  const horas = parseInt(input1);
  const tarifa = parseInt(input2);
  const tarifaExtra = tarifa * 1.5;
  let salario;

  // CONDICIONALES
  if (horas && tarifa) {

    if (horas < 40) {

      // CALCULAR
      salario = horas * tarifa;

      // INNER HTML
      document.getElementById('resultado').innerHTML = `
        <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
          No tiene horas extra y su salario es de <span style="color:red">S./ ${salario}</span>.
        </h1>
      `;

    } else {

      // CALCULAR
      salario = (40 * tarifa) + ((horas - 40) * tarifaExtra);

      // INNER HTML
      document.getElementById('resultado').innerHTML = `
        <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
          Tiene horas extra y su salario es de <span style="color:red">S./ ${salario}</span>.
        </h1>
      `;

    };

  } else if ((!input1 && input2) || (input1 && !input2)) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Falta ingresar un dato!
      </h1>
    `;

  } else if (!input1 && !input2) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡No se ingresaron datos!
      </h1>
    `;

  } else {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Datos incorrectos!
      </h1>
    `;

  };

};

////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO 02
////////////////////////////////////////////////////////////////////////////////////////

/*
Calcular el perímetro de una circunferencia dado su radio. Luego calcule
el perímetro de la misma si se reduce al 50%. Luego calcule el perímetro
de la misma si se reduce al 25% con respecto al resultado anterior.
*/

// INSERTAR FORMULARIO
const ejercicio2 = () => {

  // INNER HTML
  document.getElementById('formulario').innerHTML = `
    <section style="width:70%;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;">
      <p style="width:100%;text-align:center;font-size:12px;font-weight:700;background-color:black;color:white;margin:0;margin-bottom:10px;border-radius:23px 23px 0 0;padding:5px 0;user-select:none;">EJERCICIO 02</p>
      <input
        type="tel"
        id="radio-e2"
        placeholder="RADIO DE LA CIRCUNFERENCIA"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <button
        id="boton-e2"
        style="width:100%;border:none;font-size:25px;font-weight:700;color:white;background-color:black;border-radius:0 0 23px 23px;padding:15px 0;cursor:pointer;"}"
      ><< CALCULAR PERIMETROS >></button>
    </section>
  `;

  // FOCUS INPUT
  document.getElementById('radio-e2').focus();

  // LANZADORES DE EVENTOS
  document.getElementById('boton-e2').addEventListener('click', () => calcular2());
  document.getElementById("radio-e2").addEventListener("keypress", e => { if(e.key === "Enter") calcular2() });

};

// INSERTAR RESULTADO
const calcular2 = () => {

  // VARIABLES
  const input = document.getElementById('radio-e2').value;
  const radio = parseInt(input);
  const perimetro1 = radio * 2 * Math.PI;
  let perimetro2;
  let perimetro3;

  // CONDICIONALES
  if (radio) {
    
    // CALCULAR
    perimetro2 = perimetro1 * 0.5;
    perimetro3 = perimetro2 * 0.25;

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:40px;color:black;text-align:center;padding:0 5%;">
        Tiene un perimetro de <span style="color:red">${perimetro1.toFixed(2)}</span>, luego de reducirlo al 50% es de <span style="color:red">${perimetro2.toFixed(2)}</span> y este al reducirlo al 25% del mismo es de <span style="color:red">${perimetro3.toFixed(2)}</span>.
      </h1>
    `;

  } else if (!input) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡No se ingresaron datos!
      </h1>
    `;

  } else {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Datos incorrectos!
      </h1>
    `;

  };

};

////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO 03
////////////////////////////////////////////////////////////////////////////////////////

/*
Dada las horas trabajadas de una persona y la tarifa de pago por hora,
calcular su salario y escribirla. y los valores porcentuales a su salario
en 10%, 30%, 60% y 80%.
*/

// INSERTAR FORMULARIO
const ejercicio3 = () => {

  // INNER HTML
  document.getElementById('formulario').innerHTML = `
    <section style="width:70%;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;">
      <p style="width:100%;text-align:center;font-size:12px;font-weight:700;background-color:black;color:white;margin:0;margin-bottom:10px;border-radius:23px 23px 0 0;padding:5px 0;user-select:none;">EJERCICIO 03</p>
      <input
        type="tel"
        id="horas-e3"
        placeholder="HORAS TRABAJADAS"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <input
        type="tel"
        id="tarifa-e3"
        placeholder="TARIFA POR HORA"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <button
        id="boton-e3"
        style="width:100%;border:none;font-size:25px;font-weight:700;color:white;background-color:black;border-radius:0 0 23px 23px;padding:15px 0;cursor:pointer;"}"
      ><< CALCULAR SALARIO >></button>
    </section>
  `;

  // FOCUS INPUT
  document.getElementById('horas-e3').focus();

  // LANZADORES DE EVENTOS
  document.getElementById('boton-e3').addEventListener('click', () => calcular3());
  document.getElementById("horas-e3").addEventListener("keypress", e => { if(e.key === "Enter") calcular3() });
  document.getElementById("tarifa-e3").addEventListener("keypress", e => { if(e.key === "Enter") calcular3() });

};

// INSERTAR RESULTADO
const calcular3 = () => {

  // VARIABLES
  const input1 = document.getElementById('horas-e3').value;
  const input2 = document.getElementById('tarifa-e3').value;
  const horas = parseInt(input1);
  const tarifa = parseInt(input2);
  const salarioTotal = horas * tarifa;
  const salario10 = salarioTotal * 0.1;
  const salario30 = salarioTotal * 0.3;
  const salario60 = salarioTotal * 0.6;
  const salario80 = salarioTotal * 0.8;

  // CONDICIONALES
  if (horas && tarifa) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:40px;color:black;text-align:center;padding:0 5%;">
        Su salario es de <span style="color:red">S./ ${salarioTotal}</span> y los valores porcentuales a su salario en 10%, 30%, 60% y 80% son de <span style="color:red">S./ ${salario10.toFixed(2)}</span>, <span style="color:red">S./ ${salario30.toFixed(2)}</span>, <span style="color:red">S./ ${salario60.toFixed(2)}</span> y <span style="color:red">S./ ${salario80.toFixed(2)}</span> respectivamente.
      </h1>
    `;

  } else if ((!input1 && input2) || (input1 && !input2)) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Falta ingresar un dato!
      </h1>
    `;

  } else if (!input1 && !input2) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡No se ingresaron datos!
      </h1>
    `;

  } else {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Datos incorrectos!
      </h1>
    `;

  };

};

////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO 04
////////////////////////////////////////////////////////////////////////////////////////

/*
Escribir un programa que me indique un monto en billetes y soles.
Considerar billetes de: 10 – 20 – 50 y monedas de 1 – 5.
*/

// INSERTAR FORMULARIO
const ejercicio4 = () => {

  // INNER HTML
  document.getElementById('formulario').innerHTML = `
    <section style="width:70%;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;">
      <p style="width:100%;text-align:center;font-size:12px;font-weight:700;background-color:black;color:white;margin:0;margin-bottom:10px;border-radius:23px 23px 0 0;padding:5px 0;user-select:none;">EJERCICIO 04</p>
      <input
        type="tel"
        id="monto-e4"
        placeholder="INGRESE UN MONTO"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <button
        id="boton-e4"
        style="width:100%;border:none;font-size:25px;font-weight:700;color:white;background-color:black;border-radius:0 0 23px 23px;padding:15px 0;cursor:pointer;"}"
      ><< CALCULAR DENOMINACION >></button>
    </section>
  `;

  // FOCUS INPUT
  document.getElementById('monto-e4').focus();

  // LANZADORES DE EVENTOS
  document.getElementById('boton-e4').addEventListener('click', () => calcular4());
  document.getElementById("monto-e4").addEventListener("keypress", e => { if(e.key === "Enter") calcular4() });

};

// INSERTAR RESULTADO
const calcular4 = () => {

  // VARIABLES
  const input = document.getElementById('monto-e4').value;
  const monto = parseInt(input);
  const billete50 = Math.floor((monto - (monto % 50)) / 50);
  const billete20 = Math.floor(((monto % 50) - ((monto % 50) % 20)) / 20);
  const billete10 = Math.floor((((monto % 50) % 20) - (((monto % 50) % 20) % 10)) / 10); 
  const moneda5 = Math.floor(((((monto % 50) % 20) % 10) - ((((monto % 50) % 20) % 10) % 5)) / 5);
  const moneda1 = Math.floor((((((monto % 50) % 20) % 10) % 5) - (((((monto % 50) % 20) % 10) % 5) % 1)) / 1);

  // CONDICIONALES
  if (monto) {
  
    if (monto < 50) {

      if (monto < 5) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${moneda1}</span> monedas(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if (monto < 10) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${moneda5}</span> moneda de <span style="color:red">S./ 5</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if (monto < 15) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete10}</span> billete de <span style="color:red">S./ 10</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if (monto < 20) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete10}</span> billete de <span style="color:red">S./ 10</span>, <span style="color:red">${moneda5}</span> moneda(s) de <span style="color:red">S./ 5</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if (monto < 25) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 20</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if (monto < 30) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 10</span>, <span style="color:red">${moneda5}</span> moneda(s) de <span style="color:red">S./ 5</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if (monto < 35) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 20</span>, <span style="color:red">${billete10}</span> billete de <span style="color:red">S./ 10</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;
      
      } else if (monto < 40) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 20</span>, <span style="color:red">${billete10}</span> billete de <span style="color:red">S./ 10</span>, <span style="color:red">${moneda5}</span> moneda(s) de <span style="color:red">S./ 5</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;
      
      } else if (monto < 45) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 20</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;
      
      } else {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 20</span>, <span style="color:red">${moneda5}</span> moneda(s) de <span style="color:red">S./ 5</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      };

    } else if (monto === 50) {
    
      // INNER HTML
      document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
        El monto ingresado es de <span style="color:red">${billete50}</span> billete de <span style="color:red">S./ 50</span>.
      </h1>
    `;

    } else {

      if ((monto % 50) < 5) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete50}</span> billete de <span style="color:red">S./ 50</span> y <span style="color:red">${moneda1}</span> monedas(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if ((monto % 50) < 10) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete50}</span> billete de <span style="color:red">S./ 50</span>, <span style="color:red">${moneda5}</span> moneda de <span style="color:red">S./ 5</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if ((monto % 50) < 15) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete50}</span> billete de <span style="color:red">S./ 50</span>, <span style="color:red">${billete10}</span> billete de <span style="color:red">S./ 10</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if ((monto % 50) < 20) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete50}</span> billete de <span style="color:red">S./ 50</span>, <span style="color:red">${billete10}</span> billete de <span style="color:red">S./ 10</span>, <span style="color:red">${moneda5}</span> moneda(s) de <span style="color:red">S./ 5</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if ((monto % 50) < 25) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete50}</span> billete de <span style="color:red">S./ 50</span>, <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 20</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if ((monto % 50) < 30) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete50}</span> billete de <span style="color:red">S./ 50</span>, <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 10</span>, <span style="color:red">${moneda5}</span> moneda(s) de <span style="color:red">S./ 5</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      } else if ((monto % 50) < 35) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete50}</span> billete de <span style="color:red">S./ 50</span>, <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 20</span>, <span style="color:red">${billete10}</span> billete de <span style="color:red">S./ 10</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;
      
      } else if ((monto % 50) < 40) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete50}</span> billete de <span style="color:red">S./ 50</span>, <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 20</span>, <span style="color:red">${billete10}</span> billete de <span style="color:red">S./ 10</span>, <span style="color:red">${moneda5}</span> moneda(s) de <span style="color:red">S./ 5</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;
      
      } else if ((monto % 50) < 45) {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete50}</span> billete de <span style="color:red">S./ 50</span>, <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 20</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;
      
      
      } else {

        // INNER HTML
        document.getElementById('resultado').innerHTML = `
          <h1 style="font-size:60px;color:black;text-align:center;padding:0 5%;">
            El monto ingresado es de <span style="color:red">${billete50}</span> billete de <span style="color:red">S./ 50</span>, <span style="color:red">${billete20}</span> billete de <span style="color:red">S./ 20</span>, <span style="color:red">${moneda5}</span> moneda(s) de <span style="color:red">S./ 5</span> y <span style="color:red">${moneda1}</span> moneda(s) de <span style="color:red">S./ 1</span>.
          </h1>
        `;

      };

    };
   
    /*
    50   0 0 0   0 0 0   0  0  0    0  0  0    0  0  0    0  0  0    0  0  0    0  0  0    0  0  0    0  0  0    1
    20   0 0 0   0 0 0   0  0  0    0  0  0    1  1  1    1  1  1    1  1  1    1  1  1    2  2  2    2  2  2    0
    10   0 0 0   0 0 0   1  1  1    1  1  1    0  0  0    0  0  0    1  1  1    1  1  1    0  0  0    0  0  0    0
    05   0 0 0   1 1 1   0  0  0    1  1  1    0  0  0    1  1  1    0  0  0    1  1  1    0  0  0    1  1  1    0
    01   0 1 4   0 1 4   0  1  4    0  1  4    0  1  4    0  1  4    0  1  4    0  1  4    0  1  4    0  1  4    0

         0-1-4 - 5-6-9 - 10-11-14 - 15-16-19 - 20-21-24 - 25-26-29 - 30-31-34 - 35-36-39 - 40-41-44 - 45-46-49 - 50
         <5      <10     <15        <20        <25        <30        <35        <40        <45        <50
    */

  } else if (!input) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡No se ingresaron datos!
      </h1>
    `;

  } else {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Datos incorrectos!
      </h1>
    `;

  };

};

////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO 05
////////////////////////////////////////////////////////////////////////////////////////

/*
Un alumno desea saber cuál será su calificación final en la materia
de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
- 55% del promedio de sus tres calificaciones parciales.
- 30% de la calificación del exámen final.
- 15% de la calificación de un trabajo final.
*/

// INSERTAR FORMULARIO
const ejercicio5 = () => {

  // INNER HTML
  document.getElementById('formulario').innerHTML = `
    <section style="width:70%;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;">
      <p style="width:100%;text-align:center;font-size:12px;font-weight:700;background-color:black;color:white;margin:0;margin-bottom:10px;border-radius:23px 23px 0 0;padding:5px 0;user-select:none;">EJERCICIO 05</p>
      <div style="width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <input
          type="tel"
          id="parcial1-e5"
          placeholder="PARCIAL 1"
          style="width:32%;outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;"
        >
        <input
          type="tel"
          id="parcial2-e5"
          placeholder="PARCIAL 2"
          style="width:32%;outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;"
        >
        <input
          type="tel"
          id="parcial3-e5"
          placeholder="PARCIAL 3"
          style="width:32%;outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;"
        >
      </div>
      <input
        type="tel"
        id="final-e5"
        placeholder="EXAMEN FINAL"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <input
        type="tel"
        id="trabajo-e5"
        placeholder="TRABAJO FINAL"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <button
        id="boton-e5"
        style="width:100%;border:none;font-size:25px;font-weight:700;color:white;background-color:black;border-radius:0 0 23px 23px;padding:15px 0;cursor:pointer;"}"
      ><< CALCULAR PERIMETROS >></button>
    </section>
  `;

  // FOCUS INPUT
  document.getElementById('parcial1-e5').focus();

  // LANZADORES DE EVENTOS
  document.getElementById('boton-e5').addEventListener('click', () => calcular5());
  document.getElementById("parcial1-e5").addEventListener("keypress", e => { if(e.key === "Enter") calcular5() });
  document.getElementById("parcial2-e5").addEventListener("keypress", e => { if(e.key === "Enter") calcular5() });
  document.getElementById("parcial3-e5").addEventListener("keypress", e => { if(e.key === "Enter") calcular5() });
  document.getElementById("final-e5").addEventListener("keypress", e => { if(e.key === "Enter") calcular5() });
  document.getElementById("trabajo-e5").addEventListener("keypress", e => { if(e.key === "Enter") calcular5() });

};

// INSERTAR RESULTADO
const calcular5 = () => {

  // VARIABLES
  const input1 = document.getElementById('parcial1-e5').value;
  const input2 = document.getElementById('parcial2-e5').value;
  const input3 = document.getElementById('parcial3-e5').value;
  const input4 = document.getElementById('final-e5').value;
  const input5 = document.getElementById('trabajo-e5').value;
  const parcial1 = parseInt(input1);
  const parcial2 = parseInt(input2);
  const parcial3 = parseInt(input3);
  const final = parseInt(input4);
  const trabajo = parseInt(input5);
  const calificacionFinal = (((parcial1 + parcial2 + parcial3) / 3) * 0.55) + (final * 0.30) + (trabajo * 0.15);
  
  document.getElementById('resultado').innerHTML = `
    <h1 style="font-size:40px;color:black;text-align:center;padding:0 5%;">
      &{input1}, &{input2}, &{input3}, &{input4}, &{input5}
    </h1>
  `;

  // CONDICIONALES
  if (parcial1 && parcial2 && parcial3 && final && trabajo) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:50px;color:black;text-align:center;padding:0 5%;">
        Su calificación final en la materia de Algoritmos es de <span style="color:red">${calificacionFinal.toFixed(2)} pts</span>.
      </h1>
    `;

  } else if (!input1 && !input2 && !input3 && !input4 && !input5) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡No se ingresaron datos!
      </h1>
    `;

  } else {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Datos incorrectos o incompletos!
      </h1>
    `;

  };

};

////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO 06
////////////////////////////////////////////////////////////////////////////////////////

/*
En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología.
El presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área:               % del presupuesto:
Ginecología         40%
Traumatología       30%
Pediatría           30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto presupuestal.
*/

// INSERTAR FORMULARIO
const ejercicio6 = () => {

  // INNER HTML
  document.getElementById('formulario').innerHTML = `
    <section style="width:70%;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;">
      <p style="width:100%;text-align:center;font-size:12px;font-weight:700;background-color:black;color:white;margin:0;margin-bottom:10px;border-radius:23px 23px 0 0;padding:5px 0;user-select:none;">EJERCICIO 06</p>
      <input
        type="tel"
        id="presupuesto-e6"
        placeholder="MONTO PRESUPUESTAL"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <button
        id="boton-e6"
        style="width:100%;border:none;font-size:25px;font-weight:700;color:white;background-color:black;border-radius:0 0 23px 23px;padding:15px 0;cursor:pointer;"}"
      ><< CALCULAR PRESUPUESTOS >></button>
    </section>
  `;

  // FOCUS INPUT
  document.getElementById('presupuesto-e6').focus();

  // LANZADORES DE EVENTOS
  document.getElementById('boton-e6').addEventListener('click', () => calcular6());
  document.getElementById("presupuesto-e6").addEventListener("keypress", e => { if(e.key === "Enter") calcular6() });

};

// INSERTAR RESULTADO
const calcular6 = () => {

  // VARIABLES
  const input = document.getElementById('presupuesto-e6').value;
  const presupuesto = parseInt(input);
  let ginecologia;
  let traumatologia;
  let pediatría;

  // CONDICIONALES
  if (presupuesto) {

    // CALCULOS
    ginecologia = presupuesto * 0.40;
    traumatologia = presupuesto * 0.30;
    pediatría = presupuesto * 0.30;

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:50px;color:black;text-align:center;padding:0 5%;">
        El presupuesto para Ginecologia es de <span style="color:red">S./ ${ginecologia.toFixed(2)}</span>, para Traumatologia es de <span style="color:red">S./ ${traumatologia.toFixed(2)}</span> y para Pediatria es de <span style="color:red">S./ ${pediatría.toFixed(2)}</span>.
      </h1>
    `;

  } else if (!input) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡No se ingresaron datos!
      </h1>
    `;

  } else {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Datos incorrectos!
      </h1>
    `;

  };

};

////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO 07
////////////////////////////////////////////////////////////////////////////////////////

/*
Escribir un programa al cual ingrese la velocidad de un móvil expresada
en metros por segundo e imprima en pantalla la velocidad en kilómetros por hora.
*/

// INSERTAR FORMULARIO
const ejercicio7 = () => {

  // INNER HTML
  document.getElementById('formulario').innerHTML = `
    <section style="width:70%;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;">
      <p style="width:100%;text-align:center;font-size:12px;font-weight:700;background-color:black;color:white;margin:0;margin-bottom:10px;border-radius:23px 23px 0 0;padding:5px 0;user-select:none;">EJERCICIO 07</p>
      <input
        type="tel"
        id="velocidad-e7"
        placeholder="INGRESAR VELOCIDAD (m / s)"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <button
        id="boton-e7"
        style="width:100%;border:none;font-size:25px;font-weight:700;color:white;background-color:black;border-radius:0 0 23px 23px;padding:15px 0;cursor:pointer;"}"
      ><< CALCULAR (km / h) >></button>
    </section>
  `;

  // FOCUS INPUT
  document.getElementById('velocidad-e7').focus();

  // LANZADORES DE EVENTOS
  document.getElementById('boton-e7').addEventListener('click', () => calcular7());
  document.getElementById("velocidad-e7").addEventListener("keypress", e => { if(e.key === "Enter") calcular7() });

};

// INSERTAR RESULTADO
const calcular7 = () => {

  // VARIABLES
  const input = document.getElementById('velocidad-e7').value;
  const velocidad1 = parseInt(input);
  let velocidad2;

  // CONDICIONALES
  if (velocidad1) {
    
    // CALCULAR
    velocidad2 = (velocidad1 * 3) / 50;

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:40px;color:black;text-align:center;padding:0 5%;">
        ${velocidad1} m/s equivale a <span style="color:red">${velocidad2.toFixed(2)} km/h</span>.
      </h1>
    `;

  } else if (!input) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡No se ingresaron datos!
      </h1>
    `;

  } else {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Datos incorrectos!
      </h1>
    `;

  };

};

////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO 08
////////////////////////////////////////////////////////////////////////////////////////

/*
Dado un vector de enteros, comprobar el mayor, el menor y por último
la media de todos.
*/

// INSERTAR FORMULARIO
const ejercicio8 = () => {

  // INNER HTML
  document.getElementById('formulario').innerHTML = `
    <section style="width:70%;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;">
      <p style="width:100%;text-align:center;font-size:12px;font-weight:700;background-color:black;color:white;margin:0;margin-bottom:10px;border-radius:23px 23px 0 0;padding:5px 0;user-select:none;">EJERCICIO 08</p>
      <input
        type="tel"
        id="enteros-e8"
        placeholder="ENTEROS (separados por espacios)"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <button
        id="boton-e8"
        style="width:100%;border:none;font-size:25px;font-weight:700;color:white;background-color:black;border-radius:0 0 23px 23px;padding:15px 0;cursor:pointer;"}"
      ><< COMPROBAR >></button>
    </section>
  `;

  // FOCUS INPUT
  document.getElementById('enteros-e8').focus();

  // LANZADORES DE EVENTOS
  document.getElementById('boton-e8').addEventListener('click', () => calcular8());
  document.getElementById("enteros-e8").addEventListener("keypress", e => { if(e.key === "Enter") calcular8() });

};

// INSERTAR RESULTADO
const calcular8 = () => {

  // VARIABLES
  const input = document.getElementById('enteros-e8').value;
  const arrayInput = input.split(' ');
  const arrayEnteros = arrayInput.map(inp => parseInt(inp));
  const arrayOrdenado = arrayEnteros.sort( (a, b) => a - b );

  // CONDICIONALES
  if (arrayOrdenado.length > 1) {

    // CALCULAR
    const mayor = arrayOrdenado[arrayOrdenado.length - 1];
    const menor = arrayOrdenado[0];
    const media = (arrayEnteros.reduce( (a, b) => a + b )) / arrayEnteros.length;

    if(media) {

      // INNER HTML
      document.getElementById('resultado').innerHTML = `
        <h1 style="font-size:40px;color:black;text-align:center;padding:0 5%;">
          El mayor es <span style="color:red">${mayor}</span>, el menor es <span style="color:red">${menor}</span> y por último la media de todos es <span style="color:red">${media.toFixed(2)}</span>.
        </h1>
      `;

    } else {

      // INNER HTML
      document.getElementById('resultado').innerHTML = `
        <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
          ¡Uno de los datos no es valido!
        </h1>
      `;

    };

  } else if (!input) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡No se ingresaron datos!
      </h1>
    `;

  } else {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Datos incorrectos!
      </h1>
    `;

  };

};

////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO 09
////////////////////////////////////////////////////////////////////////////////////////

/*
Ingresar n valores enteros, y luego ordenarlos.
*/

// INSERTAR FORMULARIO
const ejercicio9 = () => {

  // INNER HTML
  document.getElementById('formulario').innerHTML = `
    <section style="width:70%;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;">
      <p style="width:100%;text-align:center;font-size:12px;font-weight:700;background-color:black;color:white;margin:0;margin-bottom:10px;border-radius:23px 23px 0 0;padding:5px 0;user-select:none;">EJERCICIO 09</p>
      <input
        type="tel"
        id="enteros-e9"
        placeholder="ENTEROS (separados por espacios)"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <button
        id="boton-e9"
        style="width:100%;border:none;font-size:25px;font-weight:700;color:white;background-color:black;border-radius:0 0 23px 23px;padding:15px 0;cursor:pointer;"}"
      ><< ORDENARLOS >></button>
    </section>
  `;

  // FOCUS INPUT
  document.getElementById('enteros-e9').focus();

  // LANZADORES DE EVENTOS
  document.getElementById('boton-e9').addEventListener('click', () => calcular9());
  document.getElementById("enteros-e9").addEventListener("keypress", e => { if(e.key === "Enter") calcular9() });

};

// INSERTAR RESULTADO
const calcular9 = () => {

  // VARIABLES
  const input = document.getElementById('enteros-e9').value;
  const arrayInput = input.split(' ');
  const arrayEnteros = arrayInput.map(inp => parseInt(inp));

  // CONDICIONALES
  if (arrayInput.length > 1) {

    // VERIFICAR
    const arrayOrdenado = arrayEnteros.sort( (a, b) => a - b );
    const media = (arrayEnteros.reduce( (a, b) => a + b )) / arrayEnteros.length;

    if(media) {

      // INNER HTML
      document.getElementById('resultado').innerHTML = `
        <h1 style="font-size:40px;color:black;text-align:center;padding:0 5%;">
          Enteros ordenados:<br><span style="color:red">${arrayOrdenado.join(', ')}</span>.
        </h1>
      `;

    } else {

      // INNER HTML
      document.getElementById('resultado').innerHTML = `
        <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
          ¡Uno de los datos no es valido!
        </h1>
      `;

    };

  } else if (!input) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡No se ingresaron datos!
      </h1>
    `;

  } else {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Datos incorrectos!
      </h1>
    `;

  };

};

////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO 10
////////////////////////////////////////////////////////////////////////////////////////

/*
Realizar la serie de Fibonacci.
*/

// INSERTAR FORMULARIO
const ejercicio10 = () => {

  // INNER HTML
  document.getElementById('formulario').innerHTML = `
    <section style="width:70%;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;">
      <p style="width:100%;text-align:center;font-size:12px;font-weight:700;background-color:black;color:white;margin:0;margin-bottom:10px;border-radius:23px 23px 0 0;padding:5px 0;user-select:none;">EJERCICIO 10</p>
      <input
        type="tel"
        id="cantidad-e10"
        placeholder="CANTIDAD DE NUMEROS"
        style="width:calc(100% - 4px);outline:none;font-size:40px;text-align:center;border:2px solid black;padding:10px 0;margin:0;margin-bottom:10px;"
      >
      <button
        id="boton-e10"
        style="width:100%;border:none;font-size:25px;font-weight:700;color:white;background-color:black;border-radius:0 0 23px 23px;padding:15px 0;cursor:pointer;"}"
      ><< VER SERIE FIBONACCI >></button>
    </section>
  `;

  // FOCUS INPUT
  document.getElementById('cantidad-e10').focus();

  // LANZADORES DE EVENTOS
  document.getElementById('boton-e10').addEventListener('click', () => calcular10());
  document.getElementById("cantidad-e10").addEventListener("keypress", e => { if(e.key === "Enter") calcular10() });

};

// INSERTAR RESULTADO
const calcular10 = () => {

  // VARIABLES
  const input = document.getElementById('cantidad-e10').value;
  const cantidad = parseInt(input);
  let arrayFibonacci;

  // CONDICIONALES
  if (cantidad) {

    if (cantidad <= 70 && cantidad > 1) {

      // VARIABLE
      arrayFibonacci = [0, 1];

      // ITERACION
      for (let i = 2; i < cantidad; i++) {
        arrayFibonacci.push(arrayFibonacci[i - 2] + arrayFibonacci[i - 1]);
      };

      // INNER HTML
      document.getElementById('resultado').innerHTML = `
        <h1 style="font-size:20px;color:black;text-align:center;padding:0 5%;">
          Serie Fibonacci:<br><span style="color:red">${arrayFibonacci.join(', ')}</span>.
        </h1>
      `;

    } else if (cantidad === 0) {

      // VARIABLE
      arrayFibonacci = [0];

      // INNER HTML
      document.getElementById('resultado').innerHTML = `
        
          <h1 style="font-size:40px;color:black;text-align:center;padding:0 5%;">
          <span style="color:red">Serie Fibonacci:</span><br><span style="color:red">${arrayFibonacci}.
          </h1>

      `;
      
    } else {

      // VARIABLE
      arrayFibonacci = [0, 1];

      // ITERACION
      for (let i = 2; i < cantidad; i++) {
        arrayFibonacci.push(arrayFibonacci[i - 2] + arrayFibonacci[i - 1]);
      };

      // INNER HTML
      document.getElementById('resultado').innerHTML = `
        <h1 style="font-size:40px;color:black;text-align:center;padding:0 5%;">
          Serie Fibonacci excede el campo. Pero el ultimo numero es:<br><span style="color:red">${arrayFibonacci[arrayFibonacci.length - 1]}</span>.
        </h1>
      `;

    };

  } else if (!input) {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Ingresa la cantidad de numeros a ver de la serie Fibonacci!
      </h1>
    `;

  } else {

    // INNER HTML
    document.getElementById('resultado').innerHTML = `
      <h1 style="font-size:20px;color:red;text-align:center;padding:0 5%;">
        ¡Datos incorrectos!
      </h1>
    `;

  };

};