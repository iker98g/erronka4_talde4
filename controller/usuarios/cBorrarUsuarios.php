<?php
include_once ("../../model/UsuariosModel.php");

$usuarios = new UsuariosModel();

$idUsuario = filter_input(INPUT_GET, "idUsuario");

if ($idUsuario != null) {
    $usuarios -> setIdUsuario($idUsuario);
    $resultado = $usuarios -> borrarUsuario();
} else {
    $resultado = "No se ha pasado la ID";
}
echo $resultado;
?>