<?php
include_once ("../../model/EntrenadoresModel.php");

$entrenador = new EntrenadoresModel();

$idEntrenador = filter_input(INPUT_GET, "idEntrenador");

if ($idEntrenador != null) {
    $entrenador -> setIdEntrenador($idEntrenador);
    $resultado = $entrenador -> borrarEntrenador();
} else {
    $resultado = "No se ha pasado la ID";
}
echo $resultado;
?>