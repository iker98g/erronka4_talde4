var comprobarJ=0;
var comprobarU=0;
var comprobarEq=0;
var comprobarCa=0;
var comprobarEn=0;
var comprobarCo=0;
var EquipoN;
var midato= new Object();
var equipos = [];
var m;// variable utilizada en frontal para sacar los tipos
$(document).ready(function(){
	
	
//CSS Y MOSTRAR LAS TABLAS 
	
	iniciarJAdmin(); //Mostrar datos de la tabla de jugadores con sus equipos
	
	$(".tituloJAdmin").click(function(){
		if(comprobarJ==0){
			$("#JugadoresPorEquipos").hide(800);
			$(".divTablaAdmin").hide(800);
			$("#JugadoresPorEquipos").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			$(".panelJ #JugadoresPorEquipos").show(1200);
			$(".panelJ #JugadoresPorEquipos").css({"margin-top":"50px", "margin-bottom": "50px"});
			$(".panelJ .titulo_boton").css({"border-bottom":"1px solid black", "background-color":"gray"});
			comprobarJ=1;
		}else{
			$("#JugadoresPorEquipos").hide(800);
			$("#JugadoresPorEquipos").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			comprobarJ=0;
		 }
    });
	
	iniciarEqAdmin();

    $(".tituloEqAdmin").click(function(){
		if(comprobarEq==0){
			$(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			$(".panelEq .divTablaAdmin").show(1200);
			$(".panelJ #JugadoresPorEquipos").hide(800);
			$(".panelEq .divTablaAdmin .rellenoAdminEquipo").css({"margin-top":"50px", "margin-bottom": "50px"});
			$(".panelEq .titulo_boton").css({"border-bottom":"1px solid black", "background-color":"gray"});
			comprobarEq=1;
		}else{
			$(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			comprobarEq=0;
		}
    });
    
    iniciarEnAdmin();
    
    $(".tituloEnAdmin").click(function(){
		if(comprobarEn==0){
            $(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			$(".panelEn .divTablaAdmin").show(1200);
			$(".panelJ #JugadoresPorEquipos").hide(800);
			$(".panelEn .divTablaAdmin .rellenoAdminEntrenador").css({"margin-top":"50px", "margin-bottom": "50px"});
			$(".panelEn .titulo_boton").css({"border-bottom":"1px solid black", "background-color":"gray"});
			comprobarEn=1;
		}else{
			$(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			comprobarEn=0;
		}
    });	

    iniciarCaAdmin();

    $(".tituloCaAdmin").click(function(){
		if(comprobarCa==0){
            $(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			$(".panelCa .divTablaAdmin").show(1200);
			$(".panelJ #JugadoresPorEquipos").hide(800);
			$(".panelCa .divTablaAdmin .rellenoAdminCategoria").css({"margin-top":"50px", "margin-bottom": "50px"});
			$(".panelCa .titulo_boton").css({"border-bottom":"1px solid black", "background-color":"gray"});
			comprobarCa=1;
		}else{
			$(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			comprobarCa=0;
		}
    });	
    iniciarCoAdmin();

    $(".tituloCoAdmin").click(function(){
		if(comprobarCo==0){
            $(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			$(".panelCo .divTablaAdmin").show(1200);
			$(".panelJ #JugadoresPorEquipos").hide(800);
			$(".panelCo .divTablaAdmin .rellenoAdminConsulta").css({"margin-top":"50px", "margin-bottom": "50px"});
			$(".panelCo .titulo_boton").css({"border-bottom":"1px solid black", "background-color":"gray"});
			comprobarCo=1;
		}else{
            $(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			comprobarCo=0;
		}
    });	

    iniciarUAdmin();
    
    $(".tituloUAdmin").click(function(){
		if(comprobarU==0){
			$(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			$(".panelU .divTablaAdmin").show(1200);
			$(".panelJ #JugadoresPorEquipos").hide(800);
			$(".panelU .divTablaAdmin .rellenoAdminUsuario").css({"margin-top":"50px", "margin-bottom": "50px"});
			$(".panelU .titulo_boton").css({"border-bottom":"1px solid black", "background-color":"gray"});
			comprobarU=1;
		}else{
			$(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			comprobarU=0;
		}
	});	
	
	
	});
	
	
//FIN DE CSS Y MOSTRAR LAS TABLAS 



/*INICIO DE INICIAR LAS TABLAS EN LA VISTA ADMIN
 * 
 * 
*/

function iniciarJAdmin(){
	$.ajax({
        type:"JSON",
        url:"../controller/jugadores/cSeleccionarJugadores.php",
        success: function(datosJugadores){
        	
        	miDatosJugadores=JSON.parse(datosJugadores);
//        	console.log(miDatosJugadores);
        	
 		$.each(miDatosJugadores,function(i,datosJugadores){
				var equipoClass=datosJugadores.objectEquipo.nombre.replace(/ /g, "");
				if(!equipos.includes(equipoClass)){

					$("#JugadoresPorEquipos").append(`
 				<div class="JugadoresEquiposTitulo paneles `+equipoClass+` " >
 				
					<div class="titulo_boton">
						<div class="tituloEquipo">
							<h2>`+datosJugadores.objectEquipo.nombre+`</h2>
						</div>
					</div>
					
			        <div class="divTablaAdmin">
						<div class="insertButton" ><button type="button" >+NUEVOS JUGADORES</button></div>
						<table class="rellenoAdminJugadoresEquipos">
					        <tr>
					        
					            <th>IDJUGADOR</th> 
					            <th>NOMBRE</th>
					            <th>IMAGEN</th>
					            <th>ROL</th>
					            <th>TELEFONO</th>
					            <th>EQUIPO</th>
					            <th>ACCION</th>
					        </tr>
					    </table>
					</div>
				</div>
 				`);
 				
 				equipos.push(equipoClass);
 			}
 		});
 		
 		botonInsertAdmin();//boton para insertar Nuevas lineas en cualquiera de las tablas
 		
 		
 		for(var i=0;i<equipos.length;i++){
 			var equipo=equipos[i];

 			
 		    $("."+equipos[i]+" .titulo_boton").click(function(){
 		    	var NombreEquipo=$(this).parent().attr("class");
 		    	
 		    	NombreEquipo=NombreEquipo.split(" ");
 		    	EquipoN =NombreEquipo[2];
 		    	
 		    	$(".divTablaAdmin").hide(800);
 		    	$("."+EquipoN+" .divTablaAdmin").show(1200);
 				$(".panelJ .divTablaAdmin .rellenoAdminJugadoresEquipos").css({"margin-top":"50px", "margin-bottom": "50px"});
 				$(".panelJ .titulo_boton").css({"border-bottom":"1px solid black", "background-color":"gray"});
	    		$(".JugadoresE ").html(``);

 		    	$.each(miDatosJugadores,function(i,datosJugadores){
 					var equipoJugador=datosJugadores.objectEquipo.nombre.replace(/ /g, "");
 					 					
 		    		if(equipoJugador==EquipoN){
 		    			$(".JugadoresEquipos").css("background-color","white!important");
 		    			$("."+EquipoN+" .rellenoAdminJugadoresEquipos").append(`<tr class="JugadoresE">
 		           		<td>`+datosJugadores.idJugador+`</td>            		
 		           		<td>`+datosJugadores.nombre+`</td>
 		           		<td><img src="`+datosJugadores.imagen+`" style="width:100px; height:auto;"></td>
 		           		<td>`+datosJugadores.rol+`</td>
 		           		<td>`+datosJugadores.telefono+`</td>
 		           		<td>`+datosJugadores.objectEquipo.nombre+`</td>
 		           		<td><i class="fas fa-edit" value="`+datosJugadores.idJugador+`"></i>
 		           		<i class="fas fa-trash-alt" value="`+datosJugadores.idJugador+`"></i></td>
 		       		</tr>`);
 		    		}
 		    		});
 		    		

 		    });
 		    }
 		
// 		$(".deleteV").click(function(){
// 			
// 			var id=$(this).val(); 
// 			console.log(id);
// 			
// 		  	$.ajax({
// 		       	type: "GET",
// 		       	data:{'id':id},
// 		       	url: "../controller/cDeleteVehiculo.php", 
//
// 		       	success: function(result){  
// 		       		
// 		       		console.log(result);
// 		       		location.reload(true);  //recarga la pagina
// 		       	},
// 		       	error : function(xhr) {
// 		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
// 		   		}
// 		       });
// 		  	
// 		 
// 	   });
//		$(".updateV").click(function(){
//			var todo=$(this).val();
//
//			var todo = todo.split("||");
//			
// 			var id=todo[0]; 
// 			var nombre=todo[1]; 
// 			var modelo=todo[2]; 
// 			var potencia=todo[3]; 
// 			var img=todo[4]; 
// 			var tipo=todo[5]; 
//
// 			$(".paneles").hide(800);
//    		$(".encabezado_vAdmin").hide(800);
//    		$("body").css("background-color", "	#abcdef");
//
// 		 
// 		       	$(".insertarAdmin").append(`<form id="form_vAdminUpdate" >
//	        		    <div id="elementos_vAdminUpdate">
//	        		    
//	        		        <div class="nombre_vAdminInsertU">
//	        		        <label>Nombre:</label>
//	        		        <input id="nombre" type="text" value="`+nombre+`">
//	        		        </div>
//	        		        
//	        		        <div class="contrasena_vAdminInsertU">
//	        		        <label>modelo:</label>
//	        		        <input id="modelo" type="text"  value="`+modelo+`">
//	        		        </div>	
//	        		        	        
//	        		        <div class="nombre_vAdminInsertU">
//	        		        <label>potencia:</label>
//	        		        <input id="potencia" type="text"  value="`+potencia+`">
//	        		        </div>	
//	        		        
//	        		        <div class="apellido_vAdminInsertU">
//	        		        <label>img:</label>
//	        		        <input id="img" type="text"  value="`+img+`">
//	        		        </div>
//	        		        
//	        		        <div class="telefono_vAdminInsertU">
//	        		        <label>tipo:</label>
//	        		        <select id="tipo">
//	        		        <option value="Bicicleta">Bicicleta</option>
//	        		        <option value="Coche">Coche</option>
//	        		        <option value="Monopatin">Monopatin</option>
//	        		        <option value="Patinete">Patinete</option>
//	        		        </select>
//	        		        </div>
//	        		        
//	        		        <input type="button" class="submit_vAdminUpdate" id="`+id+`" value="GO!">
//	        				
//	        		    </div>
//	        		    <button class="boton_atras_vAdminU goBack">GO BACK</button>
//	        		    </form>`);
// 		       		
//		        	$(".submit_vAdminUpdate").click(function(){
//		        		var id=$(this).attr("id"); 
//		        		var nombre=$("#nombre").val();
//		        		var modelo=$("#modelo").val();
//		        		var potencia=$("#potencia").val();
//		        		var img=$("#img").val();
//		        		var tipo=$("#tipo").val();
//		        		
//		        		$.ajax({
//		        		 	type: "GET",
//		        		 	data:{'id':id,'nombre':nombre , 'modelo':modelo , 'potencia':potencia, 'img':img , 'tipo':tipo },
//		     		       	url: "../controller/cUpdateVehiculo.php", 
//
//		     		       	success: function(result){  
//		     		       		
//		     		       		console.log(result);
//		     		       		location.reload(true);  //recarga la pagina
//		     		       	},
//		     		       	error : function(xhr) {
//		     		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
//		     		   		}
//		     		       });
//		 	       });
//		  });
		
 

        },
        error: function(xhr){
            alert("An error occured: "+xhr.status+" "+xhr.statusText);
        }
    });
	}


function iniciarEqAdmin(){
	$.ajax({
        type:"JSON",
        url:"../controller/equipos/cSeleccionarEquipos.php",
        success: function(datosEquipos){
        	
        	miDatosEquipos=JSON.parse(datosEquipos);
//        	console.log(miDatosEquipos);
        	
 		$.each(miDatosEquipos,function(i,datosEquipo){
				
 				$(".panelEq .divTablaAdmin table").append(`<tr>
 		           		<td>`+datosEquipo.idEquipo+`</td>            		
 		           		<td>`+datosEquipo.nombre+`</td>
 		           		<td><img src="`+datosEquipo.logo+`" style="width:100px; height:auto;"></td>
 		           		<td>`+datosEquipo.objectCategoria.nombre+`</td>
 		           		<td><i class="fas fa-edit" value="`+datosEquipo.idEquipo+`"></i>
 		           		<i class="fas fa-trash-alt" value="`+datosEquipo.idEquipo+`"></i></td>
 		       		</tr>`);
 				
 			});
 		
	 		
        },
        error: function(xhr){
            alert("An error occured: "+xhr.status+" "+xhr.statusText);
        }
    });
	}

function iniciarEnAdmin(){
	$.ajax({
        type:"JSON",
        url:"../controller/entrenadores/cSeleccionarEntrenadores.php",
        success: function(datosEntrenadores){
        	
        	miDatosEntrenadores=JSON.parse(datosEntrenadores);
//        	console.log(miDatosEntrenadores);
        	
 		$.each(miDatosEntrenadores,function(i,datosEntrenador){
				
 				$(".panelEn .divTablaAdmin table").append(`<tr>
 		           		<td>`+datosEntrenador.idEntrenador+`</td>            		
 		           		<td>`+datosEntrenador.nombre+`</td>
 		           		<td><img src="`+datosEntrenador.imagen+`" style="width:100px; height:auto;"></td>
 		           		<td>`+datosEntrenador.telefono+`</td>
 		           		<td>`+datosEntrenador.objectEquipo.nombre+`</td>
 		           		<td><i class="fas fa-edit" value="`+datosEntrenador.idEntrenador+`"></i>
 		           		<i class="fas fa-trash-alt" value="`+datosEntrenador.idEntrenador+`"></i></td>
 		       		</tr>`);
 				
 			});
 		
	 		
        },
        error: function(xhr){
            alert("An error occured: "+xhr.status+" "+xhr.statusText);
        }
    });
	}

function iniciarCaAdmin(){
	$.ajax({
        type:"JSON",
        url:"../controller/categorias/cSeleccionarCategorias.php",
        success: function(datosCategorias){
        	
        	miDatosCategorias=JSON.parse(datosCategorias);
//        	console.log(miDatosCategorias);
        	
 		$.each(miDatosCategorias,function(i,datosCategoria){
				
 				$(".panelCa .divTablaAdmin table").append(`<tr>
 		           		<td>`+datosCategoria.idCategoria+`</td>            		
 		           		<td>`+datosCategoria.nombre+`</td>
 		           		<td><img src="`+datosCategoria.imagen+`" style="width:100px; height:auto;"></td>
 		           		<td><i class="fas fa-edit" value="`+datosCategoria.idCategoria+`"></i>
 		           		<i class="fas fa-trash-alt" value="`+datosCategoria.idCategoria+`"></i></td>
 		       		</tr>`);
 				
 			});
 		
	 		
        },
        error: function(xhr){
            alert("An error occured: "+xhr.status+" "+xhr.statusText);
        }
    });
	}


function iniciarCoAdmin(){
	$.ajax({
        type:"JSON",
        url:"../controller/consultas/cSeleccionarConsultas.php",
        success: function(datosConsultas){
        	
        	miDatosConsultas=JSON.parse(datosConsultas);
//        	console.log(miDatosConsultas);
        	
 		$.each(miDatosConsultas,function(i,datosConsultas){

 			$(".panelCo .divTablaAdmin table").append(`<tr>
 		           		<td>`+datosConsultas.idConsulta+`</td>            		
 		           		<td>`+datosConsultas.consulta+`</td>
 		           		<td>`+datosConsultas.objectUsuario.usuario+`</td>
 		           		<td><i class="fas fa-edit" value="`+datosConsultas.idConsulta+`"></i>
 		           		<i class="fas fa-trash-alt" value="`+datosConsultas.idConsulta+`"></i></td>
 		       		</tr>`);
 				
 			});
 		
	 		
        },
        error: function(xhr){
            alert("An error occured: "+xhr.status+" "+xhr.statusText);
        }
    });
	}


function iniciarUAdmin(){
	$.ajax({
        type:"JSON",
        url:"../controller/usuarios/cSeleccionarUsuarios.php",
        success: function(datosUsuarios){
        	
        	miDatosUsuarios=JSON.parse(datosUsuarios);
//        	console.log(miDatosUsuarios);
        	
 		$.each(miDatosUsuarios,function(i,datosUsuarios){
 				$(".panelU .divTablaAdmin table").append(`<tr>
 		           		<td>`+datosUsuarios.idUsuario+`</td>            		
 		           		<td>`+datosUsuarios.usuario+`</td>
 		           		<td>`+datosUsuarios.contrasena+`</td>
 		           		<td>`+datosUsuarios.nombre+`</td>
 		           		<td>`+datosUsuarios.correo+`</td>
 		           		<td>`+datosUsuarios.tipo+`</td>
 		           		<td><i class="fas fa-edit" value="`+datosUsuarios.idUsuario+`"></i>
 		           		<i class="fas fa-trash-alt" value="`+datosUsuarios.idUsuario+`"></i></td>
 		       		</tr>`);
 				
 			});
 		
	 		
        },
        error: function(xhr){
            alert("An error occured: "+xhr.status+" "+xhr.statusText);
        }
    });
	}
/*FIN DE INSERTAR DATOS EN LAS TABLAS DESDE VADMIN */


/*INICIO DE INSERTAR NUEVOS DATOS EN LAS TABLAS EN LA VISTA ADMIN
*/
function botonInsertAdmin(){
$(".insertButton button").click(function(){
	var TablaInsert=$(this).text();
	var TablaInsert1=TablaInsert.split(" ",2);//RECOGEMOS EN UN ARRAY LO QUE ESTA ESCRITO EN EL BOTON
	TablaInsert =TablaInsert1[1]; 	//SELECCIONAMOS LA SEGUNDA POSICION del array Y LA GUARDAMOS EN UNA VARIABLE
	//alert(TablaInsert);
	
	minusculas=TablaInsert.substring(1,TablaInsert.length); //COGEMOS EL TEXTO EXCEPTO LA PRIMERA LETRA
	mayusculas=TablaInsert.substring(0,1); //COGEMOS LA PRIMERA LETRA
	minusculas=minusculas.toLowerCase(); //CAMBIAMOS EL TEXTO A MINUSCULAS
	var Tabla=mayusculas+minusculas;
	//alert(Tabla);
		
	var datosInsert=[{}];
	//[{firstName:"John", lastName:"Doe", age:46}]
	 var htmlCode=`<form>`;
	
	if(Tabla==="Equipos"||Tabla==="Jugadores"||Tabla==="Categorias"||Tabla==="Entrenadores"||Tabla==="Usuarios"){
		htmlCode+=`Nombre:<br><input type="text" id="nombre" name="nombre"><br>`;		
	}
	if(Tabla==="Equipos"||Tabla==="Jugadores"||Tabla==="Categorias"||Tabla==="Entrenadores"){
		htmlCode+=`Imagen:<br><select id="imagen"><option></option></select><br>`;
	}
	if(Tabla==="Jugadores"||Tabla==="Entrenadores"){
		htmlCode+=`Telefono:<br><input type="number" id="telefono" name="telefono"><br>Equipo:<br><select id="equipo"><option></option></select>`;
	}
	if(Tabla==="Equipos"){
		htmlCode+=`Categoria:<br><select id="categoria"><option></option></select>`;
	}
	if(Tabla==="Jugadores"){
		htmlCode+=`Rol:<br><select id="rol"><option></option></select>`;
	}
	if(Tabla==="Consultas"){
		htmlCode+=`Consulta:<br><input type="text" id="consulta" name="consulta"><br>Usuario:<br><select id="usuario"><option></option></select>`;
	}
	if(Tabla==="Usuarios"){
		htmlCode+=`Contrasena:<br><input type="password" id="contrasena" name="contrasena"><i class="fas fa-eye"></i><i class="fas fa-eye-slash"></i><br>Tipo:<br><select id="tipo"><option></option></select><br>Usuario:<br><input type="text" id="usuario" name="usuario"><br>Correo:<br><input type="text" name="correo"><br>`;
	}
	htmlCode+=`  <input id="button" type="button" value="Submit">`;
	htmlCode+=`</form>`;

	$("#formularioInsert").html(htmlCode);
	
	$("#formularioInsert form #button").click(function(){
		var nInput=$('#formularioInsert form :input').length-2;
		//alert(n);
		nombreInput=$("#formularioInsert form input");//array de todos los objetos tipo input
		
		//alert(nombre[0]);
		
		for(var i=0;i<nInput;i++){
			var id=$(nombreInput[i]).attr("id");
			//alert("id del input: "+id);
			var valor=$(nombreInput[i]).val();
			//alert("valor del input: "+valor);

		}
		
		var nSelect=$('#formularioInsert form * :not(:input)').length;
		alert(nSelect);
		nombreSelect=$("#formularioInsert form * :not(:input)");//array de todos los objetos tipo input
		
		alert(nombreSelect[0]);
		
		for(var i=0;i<nSelect;i++){
			var id=$(nombreSelect[i]).attr("id");
			alert("id del select: "+id);
			var valor=$(nombreSelect[i]).val();
			alert("valor del select: "+valor);

		}
		
		datosInsert.push({nombre:$( "#nombre" ).val(),tamanio:n});
		console.log(datosInsert);
	});

	
	$.ajax({
        type:"JSON",
        url:"../controller/usuarios/cSeleccionarUsuarios.php",
        success: function(datosUsuarios){
        	
        	miDatosUsuarios=JSON.parse(datosUsuarios);
//        	console.log(miDatosUsuarios);
        	
 		$.each(miDatosUsuarios,function(i,datosUsuarios){
 				$(".panelU .divTablaAdmin table").append(`<tr>
 		           		<td>`+datosUsuarios.idUsuario+`</td>            		
 		           		<td>`+datosUsuarios.usuario+`</td>
 		           		<td>`+datosUsuarios.contrasena+`</td>
 		           		<td>`+datosUsuarios.nombre+`</td>
 		           		<td>`+datosUsuarios.correo+`</td>
 		           		<td>`+datosUsuarios.tipo+`</td>
 		           		<td><i class="fas fa-edit" value="`+datosUsuarios.idUsuario+`"></i>
 		           		<i class="fas fa-trash-alt" value="`+datosUsuarios.idUsuario+`"></i></td>
 		       		</tr>`);
 				
 			});
 		
	 		
        },
        error: function(xhr){
            alert("An error occured: "+xhr.status+" "+xhr.statusText);
        }
    });
	
	
	
});
}
/*FIN DE INSERTAR NUEVOS DATOS EN LAS TABLAS DESDE VADMIN */
