<?php
include_once ("../../model/UsuariosModel.php");
$datosInsert=(count($_POST["datosInsert"]));
for($i = 0; $i <$datosInsert ; $i++){
    $nombre=($_POST["datosInsert"][$i]["nombre"]);
    $contrasena=($_POST["datosInsert"][$i]["contrasena"]);
    $tipo=($_POST["datosInsert"][$i]["tipo"]);
    $usuario=($_POST["datosInsert"][$i]["usuario"]);
    $correo=($_POST["datosInsert"][$i]["correo"]);
    //echo $i."  nombre ".$nombre, "  contrasena ".$contrasena,"  tipo ".$tipo,"  usuario ".$usuario,"  correo ".$correo;
    $usuarioNuevo = new UsuariosModel();
    
    $usuarioNuevo -> setNombre($nombre);
    $usuarioNuevo -> setCorreo($correo);
    $usuarioNuevo -> setContrasena($contrasena);
    $usuarioNuevo -> setUsuario($usuario);
    $usuarioNuevo -> setTipo($tipo);
    
    $resultado=$usuarioNuevo -> editarUsuario();
    echo $resultado;
}

$datosInsert=($_POST["datosInsert"]);




?>