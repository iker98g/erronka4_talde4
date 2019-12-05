<?php
include_once ("../../model/JugadoresModel.php");

$jugador = new JugadoresModel();

$idJugador = filter_input(INPUT_GET, "idJugador");
$idEquipo = filter_input(INPUT_GET, "idEquipo");
$nombre = filter_input(INPUT_GET, "nombre");
$rol = filter_input(INPUT_GET, "rol");
$imagen = filter_input(INPUT_GET, "imagen");
$telefono = filter_input(INPUT_GET, "telefono");

if ($idJugador != null) {
    $jugador -> setIdJugador($idJugador);

    if ($idEquipo != null) {
        $jugador -> setIdEquipo($idEquipo);
    }
    
    if ($nombre != null) {
        $jugador -> setNombre($nombre);
    }

    if ($rol != null) {
        $jugador -> setRol($rol);
    }

    if ($imagen != null) {
        $jugador -> setImagen($imagen);
    }

    if ($telefono != null) {
        $jugador -> setTelefono($telefono);
    }

    $resultado = $jugador -> editarJugador();

} else {
    $resultado = "No se ha pasado la ID";
}
echo $resultado;
?>