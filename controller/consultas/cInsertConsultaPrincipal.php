<?php
include_once ("../../model/ConsultasModel.php");
include_once ("../../model/UsuariosModel.php");

echo $_GET["datosInsert"];
$misDatos=json_decode($_GET["datosInsert"]);

$consulta=$misDatos->consulta;
$usuario=$misDatos->usuario;

echo $consulta;
echo $usuario;


    
    $consultaNueva = new ConsultasModel();
    
    $consultaNueva -> setConsulta($consulta);

  
     $consultaNueva->setidUsuario($usuario);
     if($usuario==100){
         
         $resultado=$consultaNueva -> aniadirConsulta();
     }else{
         
         $consultaUsuarioNueva->buscarUsuarioId();
         $consultaNueva -> setIdUsuario($consultaUsuarioNueva->getIdUsuario());
         $consultaUsuarioNueva -> setIdUsuario($consultaUsuarioNueva->getIdUsuario());
         
         $consultaUsuarioNueva->findUsuarioById();
         $resultado=$consultaNueva -> aniadirConsulta();
     }
    
    
    
    
    
   echo $resultado;




?>