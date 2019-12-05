<?php
    require_once '../model/UsuariosModel.php';
    
    $username=filter_input(INPUT_GET, "username");
    $password=filter_input(INPUT_GET, "password");
    
    if(($username != null) && ($password != null)) {
        $user = new UsuariosModel();
        $user->setUsuario($username);
        $user->setContrasena($password);
        
        if ($user->findUserByUsername()){
            session_start();
            $_SESSION['usuario']=$username;
            $_SESSION['admin']=$user->getTipo();
            
            echo 1;
        }else {
            echo 0;
        }
    }else {
        echo 0;
    }
?>