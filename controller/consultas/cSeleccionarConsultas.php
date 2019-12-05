<?php
include_once("../../model/ConsultasModel.php");

$consultas = new ConsultasModel();
$consultas -> setList();

$listaConsultasJSON = $consultas -> getListJsonString();

echo $listaConsultasJSON;

unset ($consultas);
?>