<?php
include_once ("../../model/EquiposModel.php");

$equipo = new EquiposModel();

$idEquipo = filter_input(INPUT_GET, "idEquipo");
$nombre = filter_input(INPUT_GET, "nombre");
$idCategoria = filter_input(INPUT_GET, "idCategoria");
$logo = filter_input(INPUT_GET, "logo");

if ($idEquipo != null) {
    $equipo -> setIdEquipo($idEquipo);

    if ($nombre != null) {
        $equipo -> setNombre($nombre);
    }
    
    if ($idCategoria != null) {
        $equipo -> setIdCategoria($idCategoria);
    }

    if ($logo != null) {
        $equipo -> setLogo($logo);
    }

    $resultado = $equipo -> editarEquipo();

} else {
    $resultado = "No se ha pasado la ID";
}
echo $resultado;
?>