<?php
    include_once ("../../model/UsuariosModel.php");
    print_r($_POST["datosInsert"]);
    $nombre=($_POST["datosInsert"][0]["nombre"]);
    $contrasena=($_POST["datosInsert"][0]["contrasena"]);
    $tipo=($_POST["datosInsert"][0]["tipo"]);
    $usuario=($_POST["datosInsert"][0]["usuario"]);
    $correo=($_POST["datosInsert"][0]["correo"]);
    
//     $usuarios = new UsuariosModel();
    
//     $usuarios -> setNombre($nombre);
//     $usuarios -> setCorreo($correo);
//     $usuarios -> setContrasena($contrasena);
//     $usuarios -> setUsuario($usuario);
    
//     $usuarios -> aniadirUsuario();
?>