<?php
include_once ("../../model/EntrenadoresModel.php");

$entrenador = new EntrenadoresModel();

$idEntrenador = filter_input(INPUT_GET, "idEntrenador");
$nombre = filter_input(INPUT_GET, "nombre");
$imagen = filter_input(INPUT_GET, "imagen");
$telefono = filter_input(INPUT_GET, "telefono");
$idEquipo = filter_input(INPUT_GET, "idEquipo");

if ($idEntrenador != null) {
    $entrenador -> setIdEntrenador($idEntrenador);

    if ($nombre != null) {
        $entrenador -> setNombre($nombre);
    }
    
    if ($imagen != null) {
        $entrenador -> setImagen($imagen);
    }

    if ($telefono != null) {
        $entrenador -> setTelefono($telefono);
    }

    if ($idEquipo != null) {
        $entrenador -> setIdEquipo($idEquipo);
    }

    $resultado = $entrenador -> editarEntrenador();

} else {
    $resultado = "No se ha pasado la ID";
}
echo $resultado;
?>