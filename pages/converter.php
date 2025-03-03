<?php include 'C:\xampp\htdocs\app-conversion-currencies\header.php';?>
<?php include 'C:\xampp\htdocs\app-conversion-currencies\navbar.php';?>
<body class='d-flex flex-column vh-100'>
    <div class='container d-flex h-100 align-items-center justify-content-center'>
        <form class='w-100'>
            <div class='row align-items-center justify-content-center p-3 clearfix border'>
                <div class='col-2 border rounded me-2'>
                    <label class='form-label' for='importe'>Importe:</label>
                
                    <input type='number' class='form-control' id='importe' value='1' min='1'>
                </div>
                
                <div class='col-3 border rounded me-2'>
                    <label class='form-label' for='de'>De:</label>
                    
                    <select class='form-select' id='de'></select>
                </div>
                
                <div class='col-1 border rounded-circle me-2 d-flex align-items-center justify-content-center container-size-exchange'>
                    <input type='image' src='../assets/images/intercambio.png' alt='intercambiar' class='img-fluid button-size-exchange'/>
                </div>
                
                <div class='col-3 border rounded'>
                    <label class='form-label' for='a'>A:</label>
                    
                    <select class='form-select' id='a'></select>
                </div>
            </div>
            
            <div class='row align-items-center justify-content-center p-3 clearfix border'>
                <div class='col-4 border rounded' id='resultado'>
                    
                </div>
            </div>
        </form>
        
    </div>
</body>    
<?php include 'C:\xampp\htdocs\app-conversion-currencies\footer.php';

