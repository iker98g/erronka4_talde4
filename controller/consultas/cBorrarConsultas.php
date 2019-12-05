<?php
include_once ("../../model/ConsultasModel.php");

$consultas = new EntrenadoresModel();

$idConsulta = filter_input(INPUT_GET, "idConsulta");

if ($idConsulta != null) {
    $consultas -> setIdConsulta($idConsulta);
    $resultado = $consultas -> borrarConsulta();
} else {
    $resultado = "No se ha pasado la ID";
}
echo $resultado;
?>