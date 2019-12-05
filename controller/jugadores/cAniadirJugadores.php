<?php
include_once ("../../model/JugadoresModel.php");

$idEquipo = filter_input(INPUT_POST, 'idEquipo');
$nombre = filter_input(INPUT_POST, 'nombre');
$rol = filter_input(INPUT_POST, 'rol');
$imagen = filter_input(INPUT_POST, 'imagen');
$telefono = filter_input(INPUT_POST, 'telefono');

$jugador = new JugadoresModel();

$jugador -> setIdEquipo($idEquipo);
$jugador -> setNombre($nombre);
$jugador -> setRol($rol);
$jugador -> setImagen($imagen);
$jugador -> setTelefono($telefono);

$resultado = $jugador -> aniadirJugador();
?>