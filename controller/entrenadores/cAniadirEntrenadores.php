<?php
include_once ("../../model/EntrenadoresModel.php");

$nombre = filter_input(INPUT_POST, 'nombre');
$imagen = filter_input(INPUT_POST, 'imagen');
$telefono = filter_input(INPUT_POST, 'telefono');
$idEquipo = filter_input(INPUT_POST, 'idEquipo');

$entrenador = new EntrenadoresModel();

$entrenador -> setNombre($nombre);
$entrenador -> setImagen($imagen);
$entrenador -> setTelefono($telefono);
$entrenador -> setIdEquipo($idEquipo);

$resultado = $entrenador -> aniadirEntrenador();
?>