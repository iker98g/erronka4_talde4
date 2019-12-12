<?php
    require_once 'connect_data.php';
    require_once 'UsuariosClass.php';
    
    class UsuariosModel extends UsuariosClass{
        private $list;
        
        public function getList() {
            return $this->list;
        }
        
        public function setList($list) {
            $this->list = $list;
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
        
        public function aniadirUsuario() {
            $this->OpenConnect();
            
            $nombre=$this->nombre;
            $correo=$this->correo;
            $usuario=$this->usuario;
            $contrasena=$this->contrasena;
            
            $sql="call spAniadirUsuario('$nombre', '$correo', '$usuario', '$contrasena')";
            
            if ($this->link->query($sql)>=1) {
                return "El usuario se ha insertado con exito";
            }else {
                return "Fallo en la insercion del usuario: (" . $this->link->errno . ") " . $this->link->error;
            }
            
            $this->CloseConnect();
        }
    }
?>
