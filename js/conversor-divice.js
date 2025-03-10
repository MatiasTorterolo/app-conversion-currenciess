
async function poblarSelectDivisas() {
    
    try{
        
        const response = await fetch('https://api.frankfurter.dev/v1/currencies');
        const data = await response.json();
        
        const selectDesde = document.getElementById('desde');
        const selectA = document.getElementById('a');
        
        for( const[divisa, nombreDivisa] of Object.entries(data)) {
            
            const optionDesde = document.createElement('option');
            optionDesde.value = divisa;
            optionDesde.textContent = `${nombreDivisa} (${divisa})`;
            selectDesde.appendChild(optionDesde);
            
            const optionA = document.createElement('option');
            optionA.value = divisa;
            optionA.textContent = `${nombreDivisa} (${divisa})`;
            selectA.appendChild(optionA);
        }
        
        selectDesde.value = 'USD';
        selectA.value = 'EUR';
        
        selectDesde.addEventListener('change', () => actualizarOpciones(selectDesde, selectA));
        selectA.addEventListener('change', () => actualizarOpciones(selectA, selectDesde));
        
        mostrarDivisasSeleccionadas();
        selectDesde.addEventListener('change', mostrarDivisasSeleccionadas);
        selectA.addEventListener('change', mostrarDivisasSeleccionadas);
        
        convertirDivisasSeleccionadas();
        selectDesde.addEventListener('change', convertirDivisasSeleccionadas);
        selectA.addEventListener('change', convertirDivisasSeleccionadas);
    } catch(error) {
        
        console.error('Error al cargar divisas', error);
    }
}

// Función para actualizar las opciones del otro select
function actualizarOpciones(selectActual, selectOpuesto) {
    
    const seleccionada = selectActual.value;

    for (const option of selectOpuesto.options) {
        option.disabled = option.value === seleccionada;
    }
}

document.addEventListener('DOMContentLoaded', poblarSelectDivisas);

function convertir() {
    
    const resultado = document.getElementById('resultado');
    const montoInput = document.getElementById('importe');
    const desdeSelect = document.getElementById('desde');
    const aSelect = document.getElementById('a');
    
    const desde = desdeSelect.value;
    const a = aSelect.value;
    const monto = montoInput.value;
    
    fetch(`https://api.frankfurter.dev/v1/latest?base=${desde}&symbols=${a}`)
        .then( response => response.json())
        .then(data => {
            
            if(monto.trim() !== ""){
                
                const montoConvertido = (monto * data.rates[a]).toFixed(2);
                resultado.innerText = `${monto} ${desde} son ${montoConvertido} ${a}`;
            } else {
                
                resultado.innerText = "";
            }
    });
}

function intercambiarDivisa(event) {
    
    event.preventDefault();
    
    const selectDesde = document.getElementById('desde');
    const selectA = document.getElementById('a');
    
    const valueSelectDesde = selectDesde.value;
    const valueSelectA = selectA.value;
    
    selectDesde.value = valueSelectA;
    selectA.value = valueSelectDesde;
    
    convertir();
    mostrarDivisasSeleccionadas();
    convertirDivisasSeleccionadas();
}

function mostrarDivisasSeleccionadas() {
    
    const selectDesde = document.getElementById('desde');
    const selectA = document.getElementById('a');
    
    const pDesde1 = document.querySelectorAll('.desde1');
    const pA1 = document.querySelectorAll('.a1');
    
    const pDesde2 = document.querySelectorAll('.desde2');
    const pA2 = document.querySelectorAll('.a2');
    
    pDesde1.innerText = selectDesde.value;
    pA1.innerText = selectA.value;
    
    pDesde2.innerText = selectA.value;
    pA2.innerText = selectDesde.value;
    
    pDesde1.forEach(span => span.innerText = selectDesde.value);
    pA1.forEach(span => span.innerText = selectA.value);
    
    pDesde2.forEach(span => span.innerText = selectA.value);
    pA2.forEach(span => span.innerText = selectDesde.value);
}

async function convertirDivisasSeleccionadas() {
    
    const valores = [1, 10, 100, 1000, 10000];
    
    const selectDesde = document.getElementById('desde');
    const selectA = document.getElementById('a');
    const resultadosLista1 = document.querySelectorAll('.resultado-lista1');
    const resultadosLista2 = document.querySelectorAll('.resultado-lista2');
    
    const desde = selectDesde.value;
    const a = selectA.value;
    
    for(let i = 0; i < valores.length; i++) {
        
        try {
            
            const resultado = await conversorDivisaSeleccionada(desde, a, valores[i]);
            resultadosLista1[i].innerText = resultado;
        } catch(error) {
            
            console.error('Error: ', error);
        }
    }
    
    for(let i = 0; i < valores.length; i++) {
        
        try {
            
            const resultado = await conversorDivisaSeleccionada(a, desde, valores[i]);
            resultadosLista2[i].innerText = resultado;
        } catch(error) {
            
            console.error('Error: ', error);
        }
    }
    
    
}

async function conversorDivisaSeleccionada(desde, a, monto) {
    
    try {
        
        const response = await fetch(`https://api.frankfurter.dev/v1/latest?base=${desde}&symbols=${a}`);
        const data = await response.json();
        
        if(response.ok && data.rates[a]) {
            
            const montoConvertido = (monto * data.rates[a]).toFixed(2);
            return montoConvertido;
        } else {
            
            console.log('Error');
        }
        
    } catch(error) {
        
        console.error('Error: ', error);
    }
}

document.getElementById('desde').addEventListener('change', convertir);
document.getElementById('a').addEventListener('change', convertir);
document.getElementById('importe').addEventListener('input', convertir);

