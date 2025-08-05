document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIÓN PARA EJERCICIO 1: NÚMEROS PRIMOS ---
    function calcularPrimos() {
        const desdeInput = document.getElementById('primosDesde');
        const hastaInput = document.getElementById('primosHasta');
        const resultadoDiv = document.getElementById('resultadoPrimos');

        const desde = parseInt(desdeInput.value);
        const hasta = parseInt(hastaInput.value);

        if (isNaN(desde) || isNaN(hasta) || desde < 0 || hasta < 0) {
            resultadoDiv.textContent = 'Por favor, ingresa números válidos y positivos.';
            return;
        }
        if (desde > hasta) {
            resultadoDiv.textContent = 'El número "desde" no puede ser mayor que "hasta".';
            return;
        }

        const primos = [];
        for (let i = desde; i <= hasta; i++) {
            if (i < 2) continue;
            let esPrimo = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) { esPrimo = false; break; }
            }
            if (esPrimo) primos.push(i);
        }
        resultadoDiv.textContent = primos.length > 0 ? primos.join(', ') : 'No se encontraron números primos en ese rango.';
    }

    // --- FUNCIÓN PARA EJERCICIO 2: SERIE FIBONACCI ---
    function generarFibonacci() {
        const limiteInput = document.getElementById('fibonacciLimite');
        const resultadoDiv = document.getElementById('resultadoFibonacci');
        const limite = parseInt(limiteInput.value);

        if (isNaN(limite) || limite < 0) {
            resultadoDiv.textContent = 'Por favor, ingresa un número positivo.';
            return;
        }
        if (limite === 0) {
            resultadoDiv.textContent = '0';
            return;
        }
        
        const secuencia = [0, 1];
        if (limite < 1) {
            resultadoDiv.textContent = '0';
            return;
        }
        
        while (true) {
            let siguiente = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
            if (siguiente > limite) break;
            secuencia.push(siguiente);
        }
        resultadoDiv.textContent = secuencia.join(', ');
    }

    // --- FUNCIÓN PARA EJERCICIO 3: CÁLCULO DE IMC ---
    function calcularIMC() {
        const alturaInput = document.getElementById('imcAltura');
        const pesoInput = document.getElementById('imcPeso');
        const resultadoDiv = document.getElementById('resultadoIMC');
        
        const alturaM = parseFloat(alturaInput.value);
        const pesoLbs = parseFloat(pesoInput.value);

        if (isNaN(alturaM) || isNaN(pesoLbs) || alturaM <= 0 || pesoLbs <= 0) {
            resultadoDiv.textContent = 'Por favor, ingresa valores válidos y positivos.';
            return;
        }
        const pesoKg = pesoLbs * 0.453592;
        const imc = pesoKg / (alturaM * alturaM);
        let categoria = (imc < 18.5) ? "Bajo peso" : (imc < 24.9) ? "Peso normal" : (imc < 29.9) ? "Sobrepeso" : "Obesidad";
        resultadoDiv.textContent = `Tu IMC es ${imc.toFixed(2)} (${categoria}).`;
    }

    // --- FUNCIÓN PARA EJERCICIO 4: PALABRA PALÍNDROMA ---
    function verificarPalindromo() {
        const textoInput = document.getElementById('palindromoTexto');
        const resultadoDiv = document.getElementById('resultadoPalindromo');
        const texto = textoInput.value;

        if (!texto.trim()) {
            resultadoDiv.textContent = 'Por favor, ingresa una palabra o frase.';
            return;
        }
        const textoLimpio = texto.toLowerCase().replace(/[\W_]/g, '');
        if (!textoLimpio) {
            resultadoDiv.textContent = 'El texto está vacío después de limpiar.';
            return;
        }
        const textoInvertido = textoLimpio.split('').reverse().join('');
        resultadoDiv.textContent = (textoLimpio === textoInvertido) ? `"${texto}" ¡Es un palíndromo!` : `"${texto}" no es un palíndromo.`;
    }

    // --- CONEXIÓN DE EVENTOS (EVENT LISTENERS) ---
    
    // Botones de "Calcular"
    document.getElementById('btnPrimos').addEventListener('click', calcularPrimos);
    document.getElementById('btnFibonacci').addEventListener('click', generarFibonacci);
    document.getElementById('btnIMC').addEventListener('click', calcularIMC);
    document.getElementById('btnPalindromo').addEventListener('click', verificarPalindromo);

    // Enlaces de "Ejemplo"
    document.getElementById('ejemploPrimos').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('primosDesde').value = 1;
        document.getElementById('primosHasta').value = 50;
        calcularPrimos(); // Llama a la función directamente
    });

    document.getElementById('ejemploFibonacci').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('fibonacciLimite').value = 100;
        generarFibonacci();
    });

    document.getElementById('ejemploIMC').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('imcAltura').value = 1.75;
        document.getElementById('imcPeso').value = 165;
        calcularIMC();
    });
    
    document.getElementById('ejemploPalindromo').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('palindromoTexto').value = 'Anita lava la tina';
        verificarPalindromo();
    });
});