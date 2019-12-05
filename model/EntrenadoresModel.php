<?php
class EntrenadoresModel extends EntrenadoresClass {
    
    private $link;
    private $list = array();
    private $objectEquipo;
    
    function getList(){
        return $this->list;
    }
    
    public function getObjectEquipo(){
        return $this->objectEquipo;
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
        
        $sql = "CALL spAllEntrenadores()"; // SQL sententzia - sentencia SQL
        
        $result = $this->link->query($sql); // result-en ddbb-ari eskatutako informazio dena gordetzen da
        // se guarda en result toda la información solicitada a la bbdd
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $new=new EntrenadoresModel();
            
            $new->setIdEntrenador($row['idEntrenador']);
            $new->setNombre($row['nombre']);
            $new->setImagen($row['imagen']);
            $new->setTelefono($row['telefono']);
            $new->setIdEquipo($row['idEquipo']);
            
            $equipo=new EquiposModel();
            $equipo->setIdEquipo($row['idEquipo']);
            $new->objectEquipo=$equipo->findEquipoById();
            
            array_push($this->list, $new);
        }
        mysqli_free_result($result);
        unset($equipo);
        $this->CloseConnect();
    }
    
    public function aniadirEntrenador(){
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        $nombre=$this->getNombre();
        $imagen=$this->getImagen();
        $telefono=$this->getTelefono();
        $idEquipo=$this->getIdEquipo();
        
        $sql="CALL spInsertarEntrenador($nombre, $imagen, $telefono, $idEquipo)";
        
        $numFilas=$this->link->query($sql);
        
        if ($numFilas>=1) {
            return "Entrenador insertado";
        } else {
            return "Error al insertar el entrenador";
        }
        
        $this->CloseConnect();
    }
    
    public function borrarEntrenador() {
        $this->OpenConnect();
        
        $idEntrenador=$this->getIdEntrenador();
        
        $sql = "CALL spBorrarEntrenador('$idEntrenador')";
        
        if ($this->link->query($sql)>=1) { // aldatu egiten da
            return "El entrenador se ha borrado con exito";
        } else {
            return "Fallo al borrar el entrenador: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function editarJugador() {
        $this->OpenConnect();
        
        $idEntrenador=$this->getIdEntrenador();
        $nombre=$this->getNombre();
        $imagen=$this->getImagen();
        $telefono=$this->getTelefono();
        $idEquipo=$this->getIdEquipo();
        
        $sql = "CALL spModificarEntrenador('$idEntrenador','$nombre', '$imagen', '$telefono', '$idEquipo')";
        
        if ($this->link->query($sql)>=1) { // aldatu egiten da
            return "El entrenador se ha modificado con exito";
        } else {
            return "Fallo al modificar el entrenador: (" . $this->link->errno . ") " . $this->link->error;
        }
        
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
    
    function getListJsonStringObject() {
        
        // returns the list of objects in a srting with JSON format
        $arr=array();
        
        foreach ($this->list as $object) {
            $vars = $object->getObjectVars();
            
            $objEquipo=$object->getObjectEquipo()->getObjectVars();
            $vars['objectEquipo']=$objEquipo;
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    } 
}