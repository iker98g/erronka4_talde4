<?php
include_once("../../model/EquiposModel.php");

$equipos = new EquiposModel();
$equipos -> setList();

$listaEquiposJSON = $equipos -> getListJsonString();

echo $listaEquiposJSON;

unset ($equipos);
?>
