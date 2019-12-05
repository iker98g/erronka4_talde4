<?php
include_once ("../../model/EquiposModel.php");

$nombre = filter_input(INPUT_POST, 'nombre');
$idCategoria = filter_input(INPUT_POST, 'idCategoria');
$logo = filter_input(INPUT_POST, 'logo');

$equipo = new EquiposModel();

$equipo -> setNombre($nombre);
$equipo -> setIdCategoria($idCategoria);
$equipo -> setLogo($logo);

$resultado = $equipo -> aniadirEquipo();
?>