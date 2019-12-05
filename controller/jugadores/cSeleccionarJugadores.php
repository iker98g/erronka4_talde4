<?php
include_once("../../model/JugadoresModel.php");

$jugadores = new JugadoresModel();
$jugadores -> setList();

$listaJugadoresJSON = $jugadores -> getListJsonString();

echo $listaJugadoresJSON;

unset ($jugadores);
?>