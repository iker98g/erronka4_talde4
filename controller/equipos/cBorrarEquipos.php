<?php
include_once ("../../model/EquiposModel.php");

$equipo = new EquiposModel();

$idEquipo = filter_input(INPUT_GET, "idEquipo");

if ($idEquipo != null) {
    $equipo -> setIdEquipo($idEquipo);
    $resultado = $equipo -> borrarEquipo();
} else {
    $resultado = "No se ha pasado la ID";
}
echo $resultado;
?>