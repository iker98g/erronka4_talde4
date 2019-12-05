<?php
include_once ("../../model/JugadoresModel.php");

$jugador = new JugadoresModel();

$idJugador = filter_input(INPUT_GET, "idJugador");

if ($idJugador != null) {
    $jugador -> setIdJugador($idJugador);
    $resultado = $jugador -> borrarJugador();
} else {
    $resultado = "No se ha pasado la ID";
}
echo $resultado;
?>