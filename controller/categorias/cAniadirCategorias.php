<?php
include_once ("../../model/CategoriasModel.php");

$nombre = filter_input(INPUT_POST, 'nombre');

$categoria = new CategoriasModel();

$categoria -> setNombre($nombre);

$resultado = $categoria -> aniadirCategoria();
?>