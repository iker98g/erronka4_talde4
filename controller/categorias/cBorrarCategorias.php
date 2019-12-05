<?php
include_once ("../../model/CategoriasModel.php");

$categoria = new CategoriasModel();

$idCategoria = filter_input(INPUT_GET, "idCategoria");

if ($idCategoria != null) {
    $categoria -> setIdCategoria($idCategoria);
    $resultado = $categoria -> borrarCategoria();
} else {
    $resultado = "No se ha pasado la ID";
}
echo $resultado;
?>