<html>
<head>
<title>Administracion</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/admin.js" type="text/javascript"></script>
<script src="https://kit.fontawesome.com/661afcc94b.js"></script>
<script
  src="https://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>
<link rel="stylesheet" href="css/admin.css">
</head>

<body>
	<header class="encabezado_vAdmin">
        <a class="logo_vAdmin" href="../index.php"><img src="imagenes/logo_snitch.png"></a>

        <a class="link_Inicio_vAdmin" href="../index.php"><div>Inicio</div></a>
        <a class="link_Equipos_vAdmin" href="vPrincipal.php"><div>Equipos</div></a>
        <a class="link_Admin_vAdmin" href="vAdmin.php"><div>Admin</div></a>

	</header>
<div id="tablas">
    	<div class="panelJ paneles" id="panelJ" >
            <div class="titulo_boton">
                <div class="tituloJAdmin" data-tipo="Jugador"><h2>Jugadores</h2></div>
              </div>
		<div id="JugadoresPorEquipos" ></div>
        </div> 
        
		<div class="panelEq paneles" id="panelEq" >
			<div class="titulo_boton">
        		<div class="tituloEqAdmin" data-tipo="Equipo">
        			<h2>Equipos</h2>
        		</div>
    		<!-- <button class="insertEq insert_paneles">INSERT</button> -->
    		</div>
            <div class="divTablaAdmin" >
                <div class="insertButton" ><button type="button" >+NUEVO EQUIPO</button></div>
                <table class="rellenoAdminEquipo">
    			<tr>
    			
         			<th>IDEQUIPO</th>
         			<th>NOMBRE</th> 
         			<th>LOGO</th> 
         			<th>CATEGORIA</th>
                     <th>ACCION</th>
                </tr>
        	</table>
        	        		
        </div>
    </div>     
        <div class="panelEn paneles" id="panelEn" >
            <div class="titulo_boton">
                <div class="tituloEnAdmin" data-tipo="Entrenador"><h2>Entrenadores</h2></div>
                <!-- <button class="insertEn insert_paneles" >INSERT</button> -->
            </div>
            <div class="divTablaAdmin" >
                <div class="insertButton"><button type="button">+NUEVO ENTRENADOR</button></div>
                <table class="rellenoAdminEntrenador">
                    <tr>
                    
                         <th>IDENTRENADOR</th> 
                         <th>NOMBRE</th>
                         <th>IMAGEN</th>
                         <th>TELEFONO</th>
                         <th>EQUIPO</th>
                         <th>ACCION</th>
                    </tr>
                </table>
            </div>
        </div> 
            <div class="panelCa paneles" id="panelCa" >
                <div class="titulo_boton"  >
                    <div class="tituloCaAdmin" data-tipo="Categoria"><h2>Categorias</h2></div>
                    <!-- <button class="insertCa insert_paneles" >INSERT</button> -->
                </div>
                <div class="divTablaAdmin" >
                    <div class="insertButton" ><button type="button" >+NUEVA CATEGORIA</button></div>
                    <table class="rellenoAdminCategoria">
                        <tr>
                        
                             <th>IDCATEGORIA</th> 
                             <th>NOMBRE</th>
                             <th>IMAGEN</th>
                             <th>ACCION</th>
                        </tr>
                    </table>
                </div>
                </div>
                
        
                <div class="panelCo paneles" id="panelCo" >
                    <div class="titulo_boton">
                        <div class="tituloCoAdmin" data-tipo="Consulta"><h2 >Consultas</h2></div>
                        <!-- <button class="insertCo insert_paneles" >INSERT</button> -->
                    </div>
                    <div class="divTablaAdmin" >
                        <div class="insertButton" ><button type="button" >+NUEVA CONSULTA</button></div>
                        <table class="rellenoAdminConsulta">
                            <tr>
                            
                                    <th>IDCONSULTA</th> 
                                    <th>CONSULTA</th>
                                    <th>IDUSUARIO</th>
                                    <th>ACCION</th>
                            </tr>
                        </table>
                    </div>    
                </div> 
        <div class="panelU paneles" id="panelU">
			<div class="titulo_boton">
    		<div class="tituloUAdmin" data-tipo="Usuario"><h2>Usuarios</h2></div>
    		<!-- <button class="insertU insert_paneles">INSERT</button> -->
    		</div>
            <div class="divTablaAdmin">
                <div class="insertButton" ><button type="button" >+NUEVO USUARIO</button></div>
                <table class="rellenoAdminUsuario">
    			<tr>
    			
         			<th>IDUSUARIO</th>
         			<th>USUARIO</th> 
         			<th>CONTRASENA</th> 
         			<th>NOMBRE</th>
         			<th>CORREO</th>
         			<th>TIPO</th>
                     <th>ACCION</th>
                </tr>
        	</table>
        	      </div>  		
    	</div>
    
    </div>
    <!-- <div  class="GOINDEXbtn" style="margin-top:20px;"><a href="../index.html"><button class="boton_atras_vAdminV ">GO INDEX</button></a></div> -->
    <footer class="footer_vAdmin">
            <ul class="">
                <li class=""><a href="https://es-es.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
              <li class=""><a href="https://twitter.com/?lang=es"><i class="fab fa-twitter"></i></a></li>
              <li class=""><a href="https://www.instagram.com/?hl=es"><i class="fab fa-instagram"></i></a></li>
              <li class=""><a href="https://www.youtube.com/?gl=ES&hl=es"><i class="fab fa-youtube"></i></a></li>
              <li class=""><a href="https://support.google.com/plus/?hl=es-419#topic=9259565"><i class="fab fa-google-plus-g"></i></a></li>
          </ul>
          <p class="mb-1">&copy; Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores ipsam in inventore voluptatibus. Labore, provident. Quos ratione accusantium facere? Rem assumenda, a adipisci possimus repudiandae ipsam mollitia debitis architecto.</p>
        </footer>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
		integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
		crossorigin="anonymous"></script>
</body>
</html>

