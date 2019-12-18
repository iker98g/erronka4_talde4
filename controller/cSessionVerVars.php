<?php
    session_start();
    
    if ((isset($_SESSION['usuario']))  && (isset($_SESSION['admin']))){
        $obj['usuario']=$_SESSION['usuario'];
        $obj['admin']=$_SESSION['admin'];
        
        $objJson= json_encode($obj);
        
        echo $objJson;         // ver var session
    } else{
        echo 0;
    }
?>