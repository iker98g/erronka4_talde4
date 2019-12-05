<?php
include_once ("../../model/UsuariosModel.php");

$usuarios = new UsuariosModel();

$idUsuario = filter_input(INPUT_GET, "idUsuario");
$nombre = filter_input(INPUT_GET, "nombre");
$contrasena = filter_input(INPUT_GET, "contrasena");
$tipo = filter_input(INPUT_GET, "tipo");
$usuario = filter_input(INPUT_GET, "usuario");
$correo = filter_input(INPUT_GET, "correo");

if ($idUsuario != null) {
    $usuarios -> setIdUsuario($idUsuario);

    if ($nombre != null) {
        $usuarios -> setNombre($nombre);
    }
    
    if ($contrasena != null) {
        $usuarios -> setContrasena($contrasena);
    }

    if ($tipo != null) {
        $usuarios -> setTipo($tipo);
    }

    if ($usuario != null) {
        $usuarios -> setUsuario($usuario);
    }

    if ($correo != null) {
        $usuarios -> setCorreo($correo);
    }

    $resultado = $usuarios -> editarUsuario();

} else {
    $resultado = "No se ha pasado la ID";
}
echo $resultado;
?>