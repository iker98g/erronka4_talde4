<?php

require_once 'CategoriasClass.php';
require_once 'connect_data.php';

class CategoriasModel extends CategoriasClass {
    
    private $link;
    private $list = array();
    
    function getList(){
        return $this->list;
    }
    
    public function OpenConnect() {
        $konDat=new connect_data();
        try {
            $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
            // mysqli klaseko link objetua sortzen da dagokion konexio datuekin
            // se crea un nuevo objeto llamado link de la clase mysqli con los datos de conexión.
        }
        catch(Exception $e) {
            echo $e->getMessage();
        }
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta
        //                  //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    }
    
    public function CloseConnect() {
        mysqli_close ($this->link);
    }
    
    public function setList() {
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        $sql = "CALL spAllCategorias()"; // SQL sententzia - sentencia SQL
        
        $result = $this->link->query($sql); // result-en ddbb-ari eskatutako informazio dena gordetzen da
        // se guarda en result toda la información solicitada a la bbdd
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $new=new CategoriasModel();
            
            $new->setIdCategoria($row['idCategoria']);
            $new->setNombre($row['nombre']);
            $new->setImagen($row['imagen']);
            
            array_push($this->list, $new);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function aniadirCategoria(){
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        $nombre=$this->nombre;
        $imagen=$this->imagen;
        
        $sql="CALL spInsertarCategoria('$nombre','$imagen')";
        //         DELIMITER $$ CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertarCategoria`(IN `pNombre` VARCHAR(50), IN `pImagen` VARCHAR(200)) NO SQL INSERT INTO `categoria`(`nombre`, `imagen`) VALUES (pNombre,pImagen)$$ DELIMITER ;
        $numFilas=$this->link->query($sql);
        
        if ($numFilas>=1) {
            return "Entrenador insertado";
        } else {
            return "Error al insertar el entrenador";
        }
        
        $this->CloseConnect();
    }
    
    public function borrarCategoria() {
        $this->OpenConnect();
        
        $idCategoria=$this->getIdCategoria();
        
        $sql = "CALL spBorrarCategoria('$idCategoria')";
        
        if ($this->link->query($sql)>=1) { // aldatu egiten da
            return "La categoria se ha borrado con exito";
        } else {
            return "Fallo al borrar la categoria: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function editarCategoria() {
        $this->OpenConnect();
        
        $idCategoria=$this->getIdCategoria();
        $nombre=$this->getNombre();
        
        $sql = "CALL spModificarCategoria('$idCategoria','$nombre')";
        
        if ($this->link->query($sql)>=1) { // aldatu egiten da
            return "La categoria se ha modificado con exito";
        } else {
            return "Fallo al modificar la categoria: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    public function findCategoriaById() {
        
        $this->OpenConnect();
        $idCategoria=$this->idCategoria;
        $sql = "CALL spSeleccionarCategoriaPorId($idCategoria)";
        $result= $this->link->query($sql);
//         DELIMITER $$
//         CREATE DEFINER=`root`@`localhost` PROCEDURE `spSeleccionarCategoriaPorId`(IN `pIdCategoria` INT)
//         NO SQL
//         select * from categoria where categoria.idCategoria=pIdCategoria$$
//         DELIMITER ;
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $this->setIdCategoria($row['idCategoria']);
            $this->setNombre($row['nombre']);
            
            
            array_push($this->list, $this);
            
        }
        mysqli_free_result($result);
        $this->CloseConnect();
         
    }
    
    
    public function buscarCategoriaId() {
        
        $this->OpenConnect();
        $nombre=$this->nombre;
        $sql = "CALL spBuscarCategoriaId('$nombre')";
        $result= $this->link->query($sql);
        /*         DELIMITER $$
         CREATE DEFINER=`root`@`localhost` PROCEDURE `spBuscarCategoriaId`(IN `pNombre` VARCHAR(42))
         NO SQL
         select * from categoria where categoria.nombre=pNombre$$
         DELIMITER ; */
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            
            $this->setIdCategoria($row['idCategoria']);
            $this->setNombre($row['nombre']);
            $this->setImagen($row['imagen']);
            array_push($this->list, $this);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    
    function getListJsonString() {
        
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = get_object_vars($object);
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }
}