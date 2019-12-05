<?php
include_once("../../model/ConsultasModel.php");

$consultas = new EntrenadoresModel();
$consultas -> setList();

$listaConsultasJSON = $consultas -> getListJsonString();

echo $listaConsultasJSON;

unset ($consultas);
?>