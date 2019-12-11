<?php
    require_once 'connect_data.php';
    require_once 'UsuariosClass.php';
    
    class UsuariosModel extends UsuariosClass{
        private $list= array();
        
        public function getList() {
            return $this->list;
        }
        
      
        ////////////////////////////////////////////////
        public function OpenConnect() {
            $konDat=new connect_data();
            try {
                $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
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
            
            $sql = "CALL spAllUsuarios()"; // SQL sententzia - sentencia SQL
            
            $result = $this->link->query($sql); // result-en ddbb-ari eskatutako informazio dena gordetzen da
            // se guarda en result toda la información solicitada a la bbdd
            
            while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                
                $new=new UsuariosModel();
                
                $new->setIdUsuario($row['idUsuario']);
                $new->setNombre($row['nombre']);
                $new->setContrasena($row['contrasena']);
                $new->setTipo($row['tipo']);
                $new->setUsuario($row['usuario']);
                $new->setCorreo($row['correo']);
                
                array_push($this->list, $new);
            }
            mysqli_free_result($result);
            $this->CloseConnect();
        }
        
        
        public function findUsuarioById() {
            
            $this->OpenConnect();
            $idUsuario=$this->idUsuario;
            $sql = "CALL spSeleccionarUsuarioPorId($idUsuario)";
            $result= $this->link->query($sql);
            
            if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
            {
                $this->setIdUsuario($row['idUsuario']);
                $this->setUsuario($row['usuario']);
                $this->setNombre($row['nombre']);
                $this->setContrasena($row['contrasena']);
                $this->setCorreo($row['correo']);
                $this->setTipo($row['tipo']);
                
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
        ////////////////////////////////////////////////
        
        public function findUserByUsername() {
            $this->OpenConnect();
            
            $username=$this->usuario;
            $password=$this->contrasena;
            
            $sql="call spFindUserByUsername('$username')";
            $result= $this->link->query($sql);
            
            $userExists=false;
            
            if($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                
                if($password == $row['contrasena']) {
                    $this->setTipo($row['tipo']);
                    $userExists=true;
                }
            }
            return $userExists;
            
            mysqli_free_result($result);
            $this->CloseConnect();
        }
    }
?>
