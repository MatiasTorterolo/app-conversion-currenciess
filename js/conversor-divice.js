
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
}

function mostrarDivisasSeleccionadas() {
    
    const selectDesde = document.getElementById('desde');
    const selectA = document.getElementById('a');
    
    const desde1 = document.getElementById('desde1');
    const desde2 = document.getElementById('desde2');
    
    console.log("llega" + selectDesde.value);
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    
    desde1.innerText = selectDesde.value;
    a1.innerText = selectA.value;
    
    desde2.innerText = selectA.value;
    a2.innerText = selectDesde.value;
}

document.getElementById('desde').addEventListener('change', convertir);
document.getElementById('a').addEventListener('change', convertir);
document.getElementById('importe').addEventListener('input', convertir);

