<?php
include_once("../../model/EntrenadoresModel.php");

$entrenadores = new EntrenadoresModel();
$entrenadores -> setList();

$listaEntrenadoresJSON = $entrenadores -> getListJsonString();

echo $listaEntrenadoresJSON;

unset ($entrenadores);
?>