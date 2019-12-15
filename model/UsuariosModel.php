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
//             DELIMITER $$
//             CREATE DEFINER=`root`@`localhost` PROCEDURE `spSeleccionarUsuarioPorId`(IN `pIdUsuario` INT)
//             NO SQL
//             select * from usuario where usuario.idUsuario=pIdUsuario$$
//             DELIMITER ;
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
        public function buscarUsuarioId() {
            
            $this->OpenConnect();
            $usuario=$this->usuario;
            $sql = "CALL spBuscarUsuarioId('$usuario')";
            $result= $this->link->query($sql);
            /*DELIMITER $$ CREATE DEFINER=`root`@`localhost` PROCEDURE `spBuscarUsuarioId`(IN `pUsuario` VARCHAR(42)) NO SQL select * from usuario where usuario.usuario=pUsuario$$ DELIMITER ; */
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
            
            $sql="call spSeleccionarUsuarioPorUsername('$username')";
            $result= $this->link->query($sql);
            
            $userExists=false;
            
            if($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                $passwordEncripted=$row['contrasena'];
                
                if(password_verify($this->getContrasena(), $passwordEncripted)) {
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
            $tipo=$this->tipo;
            $nombre=$this->nombre;
            $correo=$this->correo;
            $usuario=$this->usuario;
            $contrasena=$this->contrasena;
            if($tipo=="Administrador"){
                $tipo="0";
            }else if($tipo=="Entrenador"){
                $tipo="1";
            }else if($tipo=="Anonimo"){
                $tipo="3";
            }else{
                $tipo="2";
            }

            $options=['cost'=>10];
            $encriptedPass=password_hash ($contrasena,PASSWORD_BCRYPT,$options) ;
            
            $sql="call spAniadirUsuario('$usuario', '$encriptedPass', '$nombre', '$correo',$tipo)";
/*             DELIMITER $$ CREATE DEFINER=`root`@`localhost` PROCEDURE `spAniadirUsuario`(IN `pUsuario` VARCHAR(50), IN `pContrasena` VARCHAR(255), IN `pNombre` VARCHAR(50), IN `pCorreo` VARCHAR(50), IN `pTipo` INT) NO SQL BEGIN INSERT INTO usuario (usuario.usuario, usuario.contrasena, usuario.nombre, usuario.correo,usuario.tipo) VALUES (pUsuario, pContrasena, pNombre, pCorreo,pTipo); END$$ DELIMITER ; */
            if ($this->link->query($sql)>=1) {
                return "El usuario se ha insertado con exito";
            }else {
                return "Fallo en la insercion del usuario: (" . $this->link->errno . ") " . $this->link->error;
            }
            
            $this->CloseConnect();
        }
        public function insertarUsuario() {
            $this->OpenConnect();
            
            $nombre=$this->nombre;
            $correo=$this->correo;
            $usuario=$this->usuario;
            $contrasena=$this->contrasena;
            
            $options=['cost'=>10];
            $encriptedPass=password_hash ($contrasena,PASSWORD_BCRYPT,$options) ;
            
            $sql="call spInsertarUsuario('$usuario', '$encriptedPass', '$nombre', '$correo')";
            
            if ($this->link->query($sql)>=1) {
                return "El usuario se ha insertado con exito";
            }else {
                return "Fallo en la insercion del usuario: (" . $this->link->errno . ") " . $this->link->error;
            }
            
            $this->CloseConnect();
        }
    }
?>
