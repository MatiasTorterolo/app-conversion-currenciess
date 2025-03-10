<?php include 'C:\xampp\htdocs\app-conversion-currencies\header.php';?>
<?php include 'C:\xampp\htdocs\app-conversion-currencies\navbar.php';?>
<body class='d-flex flex-column vh-100'>
    <div class='container d-flex flex-column h-100 mt-4'>
        <form class='w-100 italic-text' id='conversor-form'>
            <div class='row align-items-center justify-content-center p-4 clearfix border border-3 border-color-converter rounded-3 background-color-converter'>
                <div class='col-2 border border-2 rounded me-2 p-3 border-info'>
                    <label class='form-label' for='importe'>Importe:</label>
                
                    <input type='number' class='form-control' id='importe' placeholder='Indique un valor...' min='1'>
                </div>
                
                <div class='col-3 border border-2 rounded me-2 p-3 border-info'>
                    <label class='form-label' for='desde'>De:</label>
                    
                    <select class='form-select' id='desde'></select>
                </div>
                
                <div class='col-1 border border-2 rounded-circle me-2 d-flex align-items-center justify-content-center container-size-exchange border-color-converter'>
                    <input type='image' src='../assets/images/intercambio.png' alt='intercambiar' class='img-fluid button-size-exchange' onclick='intercambiarDivisa(event)'/>
                </div>
                
                <div class='col-3 border border-2 rounded p-3 border-info'>
                    <label class='form-label' for='a'>A:</label>
                    
                    <select class='form-select' id='a'></select>
                </div>
                
                <span class='col-4 d-flex align-items-center justify-content-center mt-3 custom-color-font-p' id='resultado'></span>
            </div>
        </form>
        
        <div class='row justify-content-between p-4 clearfix border-color-converter rounded-3 background-color-converter'>
            <div class='col-5 justify-content-center d-flex flex-column border border-3 border-color-converter rounded-3 background-color-converter'>
                <h2 class='fs-1 italic-text text-center custom-color-title-font'>Convertir <span class='desde1'></span> a <span class='a1'></span></h2>
                
                <p class='text-center italic-text custom-color-font-p'>1 <span class='desde1'></span> son  <span class='resultado-lista1'></span> <span class='a1'></span></p>
                <p class='text-center italic-text custom-color-font-p'>10 <span class='desde1'></span> son <span class='resultado-lista1'></span> <span class='a1'></span></p>
                <p class='text-center italic-text custom-color-font-p'>100 <span class='desde1'></span> son <span class='resultado-lista1'></span> <span class='a1'></span></p>
                <p class='text-center italic-text custom-color-font-p'>1.000 <span class='desde1'></span> son <span class='resultado-lista1'></span> <span class='a1'></span></p>
                <p class='text-center italic-text custom-color-font-p'>10.000 <span class='desde1'></span> son <span class='resultado-lista1'></span> <span class='a1'></span></p>
            </div>
            
            <div class='col-2'></div>
            
            <div class='col-5 justify-content-center d-flex flex-column border border-3 border-color-converter rounded-3 background-color-converter'>
                <h2 class='fs-1 italic-text text-center custom-color-title-font'>Convertir <span class='desde2'></span> a <span class='a2'></span></h2>
                
                <p class='text-center italic-text custom-color-font-p'>1 <span class='desde2'></span> son <span class='resultado-lista2'></span> <span class='a2'></span></p>
                <p class='text-center italic-text custom-color-font-p'>10 <span class='desde2'></span> son <span class='resultado-lista2'></span> <span class='a2'></span></p>
                <p class='text-center italic-text custom-color-font-p'>100 <span class='desde2'></span> son <span class='resultado-lista2'></span> <span class='a2'></span></p>
                <p class='text-center italic-text custom-color-font-p'>1.000 <span class='desde2'></span> son <span class='resultado-lista2'></span> <span class='a2'></span></p>
                <p class='text-center italic-text custom-color-font-p'>10.000 <span class='desde2'></span> son <span class='resultado-lista2'></span> <span class='a2'></span></p>
            </div>
        </div>
    </div>
    <script src='../js/conversor-divice.js'></script>
</body>    
<?php include 'C:\xampp\htdocs\app-conversion-currencies\footer.php';

