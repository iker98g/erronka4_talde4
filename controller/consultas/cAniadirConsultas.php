<?php
include_once ("../../model/ConsultasModel.php");

$consulta = filter_input(INPUT_POST, 'consulta');
$idUsuario = filter_input(INPUT_POST, 'idUsuario');

$consultas = new ConsultasModel();

$consultas -> setConsulta($consulta);
$consultas -> setIdUsuario($idUsuario);

$resultado = $consultas -> aniadirConsulta();
?>