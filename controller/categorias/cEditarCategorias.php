<?php
include_once ("../../model/CategoriasModel.php");

$categoria = new CategoriasModel();

$idCategoria = filter_input(INPUT_GET, "idCategoria");
$nombre = filter_input(INPUT_GET, "nombre");

if ($idCategoria != null) {
    $categoria -> setIdCategoria($idCategoria);

    if ($nombre != null) {
        $categoria -> setNombre($nombre);
    }

    $resultado = $categoria -> editarCategoria();

} else {
    $resultado = "No se ha pasado la ID";
}
echo $resultado;
?>