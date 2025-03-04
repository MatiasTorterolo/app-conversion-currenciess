<?php include 'C:\xampp\htdocs\app-conversion-currencies\header.php';?>
<?php include 'C:\xampp\htdocs\app-conversion-currencies\navbar.php';?>
<body class='d-flex flex-column vh-100'>
    <div class='container d-flex h-100 mt-4 align-items-start justify-content-center'>
        <form class='w-100' id='conversor-form'>
            <div class='row align-items-center justify-content-center p-3 clearfix'>
                <div class='col-2 border rounded me-2 p-3'>
                    <label class='form-label' for='importe'>Importe:</label>
                
                    <input type='number' class='form-control' id='importe' placeholder='Indique un valor...' min='1'>
                </div>
                
                <div class='col-3 border rounded me-2 p-3'>
                    <label class='form-label' for='desde'>De:</label>
                    
                    <select class='form-select' id='desde'></select>
                </div>
                
                <div class='col-1 border rounded-circle me-2 d-flex align-items-center justify-content-center container-size-exchange'>
                    <input type='image' src='../assets/images/intercambio.png' alt='intercambiar' class='img-fluid button-size-exchange' onclick='intercambiarDivisa(event)'/>
                </div>
                
                <div class='col-3 border rounded p-3'>
                    <label class='form-label' for='a'>A:</label>
                    
                    <select class='form-select' id='a'></select>
                </div>
                
                <span class='col-4 d-flex align-items-center justify-content-center mt-3' id='resultado'></span>
            </div>
        </form>
    </div>
    <script src='../js/conversor-divice.js'></script>
</body>    
<?php include 'C:\xampp\htdocs\app-conversion-currencies\footer.php';

