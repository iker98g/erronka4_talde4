//var comprobarJ=0;
//var comprobarU=0;
//var comprobarEq=0;
//var comprobarCa=0;
//var comprobarEn=0;
//var comprobarCo=0;
var EquipoN;
var LoopTimes=0;
var datosInsert=[];
var cantidad;
var cantidadInsert=-1;
var obj = {};//creamos un objeto vacio
var siguienteInsert=false;
var linea;
var Tabla;
var midato= new Object();
var equipos = [];
var clase;
var m;// variable utilizada en frontal para sacar los tipos
$(document).ready(function(){
	
	
	/*INICIO DE CREAR TABLAS */
	iniciarJAdmin(); //Mostrar datos de la tabla de jugadores por equipos

	iniciarEqAdmin(); //Mostrar datos de la tabla de equipos
    
    iniciarEnAdmin(); //Mostrar datos de la tabla de entrenadores
    
    iniciarCaAdmin(); //Mostrar datos de la tabla de categorias

    iniciarCoAdmin(); //Mostrar datos de la tabla de consultas

    iniciarUAdmin(); //Mostrar datos de la tabla de usuarios
	/*FIN DE CREAR TABLAS */

    /*INICIO DE AL CLICKCAR QUE APAREZCA LA TABLA CORRESPONDIENTE Y SE ESCONDAN LAS OTRAS*/
	$(".titulo_boton div").click(function(){
		//Al clickar en cualquier nombre de tabla, se esconden todas y se les cambia el fondo y el margen
		$(".divTablaAdmin").hide(800);
		$(".divTablaAdmin").css("margin","0px");
		$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
	
		//hemos creado un array con el nombre de las tablas
		var TablasPrograma=["jugadores","equipos","entrenadores","categorias","consultas","usuarios"];
		clase=$(this).parent().parent().attr(`class`);//recogemos la clase de el div abuelo del titulo de la tabla
		clases=clase.split(" "); //convertimos la clase en un array separandolo por sus clases 
		var encontrarClase=false; //creamos variable para saber si ha encontrado la clase con el mismo nombre que alguna de las tablas
		var index=0;
		while(encontrarClase==false){
			
			if(clases.indexOf(TablasPrograma[index])!=-1){ 
			/*Aqui busca en el array clases cada campo del array de las tablas, si no lo encuentra será -1 siempre
			 * y entonces no se meterá en el if. En caso de entrar en el if, 
			 * guardamos el indice donde está el nombre(de la clase) de la tabla (estamos en el array) en una variable,
			 * luego guardamos del array de clases el valor de la posicion encontrada y
			 * le decimos que la hemos encontrado cambiando a true encontrarClase*/
			num=clases.indexOf(TablasPrograma[index]);
			clase=clases[num];
			encontrarClase=true;
			}
			index+=1;
		}
			
		var visibilidad=$("."+clase+" .divTablaAdmin").is(`:visible`);
		/*si esta visible, se esconderá la tabla a la que hemos clickado (la que esta visible) y las 
		 * tablas de jugadores en caso de que esten abiertas, si no lo está, se mostrará*/
		if(visibilidad){
			$(window).scrollTop(0);
			$("."+clase+" .divTablaAdmin").hide(1200);
			$("#JugadoresPorEquipos").hide(800);
		}else{
			$(window).scrollTop(0);
			$("."+clase+" .divTablaAdmin").show(1200);
			$("#JugadoresPorEquipos").hide(800);
			$("#JugadoresPorEquipos").css("margin","0px");
			$(".relleno_"+clase).css({"margin-top":"50px", "margin-bottom": "50px"});
			$("."+clase+" .titulo_boton").css({"border-bottom":"1px solid black", "background-color":"gray"});
			$(".JugadoresEquiposTitulo .divTablaAdmin").hide();//Escondemos las tablas de jugadores por equipos (no los titulos)
			if(clase=="jugadores"){//aqui mostramos los nombres de los equipos
				$("#JugadoresPorEquipos").show(1200);
			}
		}
	}); /*FIN DE AL CLICKCAR QUE APAREZCA LA TABLA CORRESPONDIENTE Y SE ESCONDAN LAS OTRAS*/
});//FIN DEL DOCUMENT READY



/*INICIO DE INICIAR LAS TABLAS EN LA VISTA ADMIN*/
function iniciarJAdmin(){
	$.ajax({
        type:"JSON",
        url:"../controller/jugadores/cSeleccionarJugadores.php",
        success: function(datosJugadores){

        	miDatosJugadores=JSON.parse(datosJugadores);
        	$.each(miDatosJugadores,function(i,datosJugadores){
				var equipoClass=datosJugadores.objectEquipo.nombre.replace(/ /g, "");
				/*recogemos los nombres de los equipos (y les quitamos los espacios) y comprobramos si están en 
				 * el array equipos, en caso de no estar entra en el if y se añade al array el nombre del 
				 * equipo sin espacios*/
				if(!equipos.includes(equipoClass)){

					$("#JugadoresPorEquipos").append(`<div class="JugadoresEquiposTitulo paneles `+equipoClass+` " >
 				
					<div class="titulo_boton"><div class="tituloEquipo"><h2>`+datosJugadores.objectEquipo.nombre+`</h2></div></div>
					
			        <div class="divTablaAdmin">
						<div class="insertButton" ><button type="button" >+NUEVOS JUGADORES</button></div>
						<table class="rellenoAdminJugadoresEquipos"><tr><th>IDJUGADOR</th><th>NOMBRE</th><th>IMAGEN</th><th>ROL</th><th>TELEFONO</th><th>EQUIPO</th><th>ACCION</th></tr></table>
					</div>
					
				</div>`);
 				equipos.push(equipoClass);//añadimos el nombre del equipo al array
 			}
				/*LLAMADA A LA FUNCION PARA INSERTAR EN CUALQUIER TABLA LAS LINEAS QUE EL ADMINISTRADOR DESEE*/
	        	botonInsertAdmin();//boton para insertar nuevas lineas en cualquiera de las tablas
	        	/*LO PONEMOS AQUI PORQUE AQUI SE GENERA EL BOTON DE JUGADORES POR EQUIPOS(si no solo iria en las demas tablas)*/
 		});//AQUI TERMINA EL GENERADOR DE LOS TITULOS DE LOS EQUIPOS POR JUGADORES
 		
 		for(var i=0;i<equipos.length;i++){
 			var equipo=equipos[i];

 		    $("."+equipos[i]+" .titulo_boton").click(function(){//cuando clicke en alguno de los titulos de los equipos(tabla jugadores)
 		    	var NombreEquipo=$(this).parent().attr("class");//recogemos las clases del padre
 		    	
 		    	NombreEquipo=NombreEquipo.split(" ");//guardamos como array las clases del padre
 		    	EquipoN =NombreEquipo[2];
 		    	/*recogemos la clase que esta en el index 2 es decir, en la tercera posicion, 
 		    	 * ya que siempre será el nombre del equipo*/
 				$(window).scrollTop(0);
 				var visibilidadJugadores=$("."+EquipoN+" .divTablaAdmin").is(`:visible`);
 				if(visibilidadJugadores){
 					$(".divTablaAdmin").hide(800);
 				}else{
 					$(".divTablaAdmin").hide(800);
 	 		    	$("."+EquipoN+" .divTablaAdmin").show(1200);//mostramos la tabla de jugadores del equipo en el que hemos clickado
 	 				$(".panelJ .divTablaAdmin .rellenoAdminJugadoresEquipos").css({"margin-top":"50px", "margin-bottom": "50px"});
 	 				$(".panelJ .titulo_boton").css({"border-bottom":"1px solid black", "background-color":"gray"});

 				}
 				
 		    	$.each(miDatosJugadores,function(i,datosJugadores){
 					var equipoJugador=datosJugadores.objectEquipo.nombre.replace(/ /g, "");
 					//volvemos a recoger el nombre del equipo
 					 					
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

	 //async	
$(".insertButton button").click(function(){
	
	/*AQUI EMPIEZA EL RECOGER VALOR DE EL BOTON CLICK INSERTAR*/
	
	$("#tablas").hide();
	var TablaInsert=$(this).text();
	var TablaInsert1=TablaInsert.split(" ",2);//RECOGEMOS EN UN ARRAY LO QUE ESTA ESCRITO EN EL BOTON
	TablaInsert =TablaInsert1[1]; 	//SELECCIONAMOS LA SEGUNDA POSICION del array Y LA GUARDAMOS EN UNA VARIABLE
	
	
	minusculas=TablaInsert.substring(1,TablaInsert.length); //COGEMOS EL TEXTO EXCEPTO LA PRIMERA LETRA
	mayusculas=TablaInsert.substring(0,1); //COGEMOS LA PRIMERA LETRA
	minusculas=minusculas.toLowerCase(); //CAMBIAMOS EL TEXTO A MINUSCULAS
	Tabla=mayusculas+minusculas;
	minusculas=TablaInsert.toLowerCase();
	//alert(Tabla);
	
	/*AQUI TERMINA EL RECOGER VALOR DE EL BOTON CLICK INSERTAR*/
	
	
	/*AQUI EMPIEZA EL PREGUNTAR LA CANTIDAD DEL INSERT DESEADOS*/

	
	
	$("#formularioInsert").css("margin-top","16px");

	var htmlCodes=`<form id="formularioCantidadInsertar">`;
	htmlCodes+=`Cantidad de `+minusculas+` que desee insertar:  <select name="`+Tabla+`" id="cantidad"></select><br>`;		
	htmlCodes+=`<input id="aceptarInsert" type=button value="Aceptar"></input>`;
	htmlCodes+=`<input id="cancelarInsert" type=button value="Cancelar"></input>`;
	htmlCodes+=`</form>`;
	
	$("#formularioInsert").html(htmlCodes);
	for(var i=1;i<13;i++){
		$("#formularioInsert select").append(`<option id=`+i+`> `+i+` </option>`);	
	}


	$("#cancelarInsert").click(function(){
	$("#tablas").show();
	$("#formularioInsert").html("");
	});	
		
		
	/*AQUI TERMINA EL PREGUNTAR LA CANTIDAD DEL INSERT DESEADOS*/
		
	$("#aceptarInsert").click(function(){

		cantidad=$("#cantidad").val();
		cantidadInsert=parseInt(cantidad);
		
		console.log("ACEPTAR");
		$("#formularioInsert").html("");
		
		generarInserts();
	});
	
		

});
}
	

function generarInserts(){
		siguienteInsert=true;
		$("#formularioInsert form").html("");
		if(LoopTimes==0){
		generarCodigoGuardarEnArrayInputs();
		}
		
//		$("#formularioInsert form #button").click(function(){
			console.log(LoopTimes +"loop y siguiente"+siguienteInsert);
			
		if(cantidadInsert>=1 &&LoopTimes!=cantidadInsert && siguienteInsert==true){
			generarCodigoGuardarEnArrayInputs();
		}else{
			$("#formularioInsert").html("");

		}LoopTimes+=1;
//		});
	
}


function generarCodigoGuardarEnArrayInputs(){
	
	generar();
	
	$("#formularioInsert form #button").click(function(){	
		
		siguienteInsert=true;
		console.log(LoopTimes+"LoopTimes y insertCantidad"+cantidadInsert);
		
		
		var elements = document.getElementsByName( Tabla );
		datosInsert = [];
		for(var i=0;i<elements.length;i++){
			var input=elements[i];
			var id = elements[i].getAttribute( 'id' );
			var contenido = $("#"+id).val();
			//datosInsert.push({[id]:contenido});
			linea+=id+":"+contenido+",";	//añadimos 
		}
		linea=linea.slice(0,-1);
		//console.log(datosInsert);
		var values = linea.split(",");//separamos las partes de nuestro futuro array
		for(var i=0; i<values.length; i++) {
		    var keyValue = values[i].split(":");//separamos cada parte de cada campo ya que es key:value
		    obj[keyValue[0]] = keyValue[1];//asignamos que el key sea el que esta en la posicion principal y el value en la secundaria del objeto
		}
		console.log(obj);
		datosInsert.push(obj);//añadimos al array creado anteriormente el objeto 
		console.log(datosInsert);
		//alert(minusculas+"<-carpeta Tabla->"+Tabla);
		generar();
		siguienteInsert=false;


	});
}

function generar(){
	$("#formularioInsert").html("");

	var htmlCode=`<form id="FormInsert">`;
	
	if(Tabla==="Equipos"||Tabla==="Jugadores"||Tabla==="Categorias"||Tabla==="Entrenadores"||Tabla==="Usuarios"){
		htmlCode+=`Nombre:<br><input type="text" id="nombre" name="`+Tabla+`"><br>`;		
	}
	if(Tabla==="Jugadores"||Tabla==="Categorias"||Tabla==="Entrenadores"){
		htmlCode+=`Imagen:<br><select name="`+Tabla+`" id="imagen"><option></option></select><br>`;
	}
	if(Tabla==="Jugadores"||Tabla==="Entrenadores"){
		htmlCode+=`Telefono:<br><input type="number" id="telefono" name="`+Tabla+`"><br>Equipo:<br><select id="equipo" name="`+Tabla+`"><option></option></select>`;
	}
	if(Tabla==="Equipos"){
		htmlCode+=`Categoria:<br><select id="categoria" name="`+Tabla+`"><option></option></select>Logo:<br><select name="`+Tabla+`" id="logo"><option></option></select><br>`;
	}
	if(Tabla==="Jugadores"){
		htmlCode+=`Rol:<br><select id="rol" name="`+Tabla+`"><option></option></select>`;
	}
	if(Tabla==="Consultas"){
		htmlCode+=`Consulta:<br><input type="text" id="consulta" name="`+Tabla+`"><br>Usuario:<br><select id="usuario" name="`+Tabla+`"><option></option></select>`;
	}
	if(Tabla==="Usuarios"){
		htmlCode+=`Contrasena:<br><input type="password" id="contrasena" name="`+Tabla+`"><i class="fas fa-eye"></i><i class="fas fa-eye-slash"></i><br>Tipo:<br><select id="tipo" name="`+Tabla+`"><option></option></select><br>Usuario:<br><input type="text" id="usuario" name="`+Tabla+`"><br>Correo:<br><input type="text" id="correo" name="`+Tabla+`"><br>`;
	}
	htmlCode+=`</form>`;
	htmlCode+=`  <input id="button" type="button" value="Submit" onclick="generarInserts()">`;

	linea="";
	
	$("#formularioInsert").html(htmlCode);
	
}
/*FIN DE INSERTAR NUEVOS DATOS EN LAS TABLAS DESDE VADMIN */

//var nInput=$('#formularioInsert form :input').length-2;
////alert(n);
//nombreInput=$("#formularioInsert form input");//array de todos los objetos tipo input
//
////alert(nombre[0]);
//
//for(var i=0;i<nInput;i++){
//	var id=$(nombreInput[i]).attr("id");
//	//alert("id del input: "+id);
//	var valor=$(nombreInput[i]).val();
//	//alert("valor del input: "+valor);
//
//}
//
//var nSelect=$('#formularioInsert form * :not(:input)').length;
//alert(nSelect);
//nombreSelect=$("#formularioInsert form * :not(:input)");//array de todos los objetos tipo input
//
//alert(nombreSelect[0]);
//
//for(var i=0;i<nSelect;i++){
//	var id=$(nombreSelect[i]).attr("id");
//	alert("id del select: "+id);
//	var valor=$(nombreSelect[i]).val();
//	alert("valor del select: "+valor);
//
//}
//