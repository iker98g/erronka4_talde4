<?php
include_once ("../../model/UsuariosModel.php");

$nombre = filter_input(INPUT_POST, 'nombre');
$contrasena = filter_input(INPUT_POST, 'contrasena');
$tipo = filter_input(INPUT_POST, 'tipo');
$usuario = filter_input(INPUT_POST, 'usuario');
$correo = filter_input(INPUT_POST, 'correo');

$usuarios = new JugadoresModel();

$usuarios -> setNombre($nombre);
$usuarios -> setContrasena($contrasena);
$usuarios -> setTipo($tipo);
$usuarios -> setUsuario($usuario);
$usuarios -> setCorreo($correo);

$resultado = $usuarios -> aniadirUsuario();
?>