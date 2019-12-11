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
	
	
	
	
    // iniciarUAdmin();

    

    $(".tituloEqAdmin").click(function(){
		if(comprobarEq==0){
			$(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			$(".panelEq .divTablaAdmin").show(1200);
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
    
    $(".tituloEnAdmin").click(function(){
		if(comprobarEn==0){
            $(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			$(".panelEn .divTablaAdmin").show(1200);
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


    $(".tituloCaAdmin").click(function(){
		if(comprobarCa==0){
            $(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			$(".panelCa .divTablaAdmin").show(1200);
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

    $(".tituloCoAdmin").click(function(){
		if(comprobarCo==0){
            $(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			$(".panelCo .divTablaAdmin").show(1200);
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

    $(".tituloUAdmin").click(function(){
		if(comprobarU==0){
			$(".divTablaAdmin").hide(800);
			$(".divTablaAdmin").css("margin","0px");
			$(".titulo_boton").css({"border-bottom":"0px","background-color":"white"});
			$(".panelU .divTablaAdmin").show(1200);
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
        	console.log(miDatosJugadores);
        	
 		$.each(miDatosJugadores,function(i,datosJugadores){
				var equipoClass=datosJugadores.objectEquipo.nombre.replace(/ /g, "");
				if(!equipos.includes(equipoClass)){
 				console.log(equipoClass);
 				$("#JugadoresPorEquipos").append(`
 				<div class="JugadoresEquiposTitulo paneles `+equipoClass+` " >
 				
					<div class="titulo_boton">
						<div class="">
							<h2>`+datosJugadores.objectEquipo.nombre+`</h2>
						</div>
					</div>
					
			        <div class="divTablaAdmin">
						<div class="insertButton" ><button type="button" >+NUEVO JUGADOR</button></div>
						<table class="rellenoAdminJugadoresEquipos">
					        <tr>
					        
					            <th>IDJUGADOR</th> 
					            <th>NOMBRE</th>
					            <th>IMAGEN</th>
					            <th>ROL</th>
					            <th>TELEFONO</th>
					            <th>IDEQUIPO</th>
					            <th>ACCION</th>
					        </tr>
					    </table>
					</div>
				</div>
 				`);
 				
 				equipos.push(equipoClass);
 			}
 		});
	 		console.log(equipos);

 		for(var i=0;i<equipos.length;i++){
 			var equipo=equipos[i];
 		    $("."+equipos[i]).click(function(){
 		    	var NombreEquipo=this.className.split(" ");
 		    	console.log(NombreEquipo[2]);
 		    	EquipoN =NombreEquipo[2];
 		    	
 		    	$(".divTablaAdmin").hide(800);
 		    	$("."+EquipoN+" .divTablaAdmin").show(1200);
 				$(".panelJ .divTablaAdmin .rellenoAdminJugadoresEquipos").css({"margin-top":"50px", "margin-bottom": "50px"});
 				$(".panelJ .titulo_boton").css({"border-bottom":"1px solid black", "background-color":"gray"});
 		    	
 		    	
 		    	//AQUI FALTAN COSASSS
 		    	$.each(miDatosJugadores,function(i,datosJugadores){
 					var equipoJugador=datosJugadores.objectEquipo.nombre.replace(/ /g, "");
 					
 					console.log(equipoJugador+" // "+EquipoN);
 					
 		    		if(equipoJugador==EquipoN){
 		    			$(".JugadoresEquipos").css("background-color","white!important");
 		    			
 		    			$("."+EquipoN+" .rellenoAdminJugadoresEquipos").append(`<tr>
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
 		
 		$(".deleteV").click(function(){
 			
 			var id=$(this).val(); 
 			console.log(id);
 			
 		  	$.ajax({
 		       	type: "GET",
 		       	data:{'id':id},
 		       	url: "../controller/cDeleteVehiculo.php", 

 		       	success: function(result){  
 		       		
 		       		console.log(result);
 		       		location.reload(true);  //recarga la pagina
 		       	},
 		       	error : function(xhr) {
 		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
 		   		}
 		       });
 		  	
 		 
 	   });
		$(".updateV").click(function(){
			var todo=$(this).val();

			var todo = todo.split("||");
			
 			var id=todo[0]; 
 			var nombre=todo[1]; 
 			var modelo=todo[2]; 
 			var potencia=todo[3]; 
 			var img=todo[4]; 
 			var tipo=todo[5]; 

 			$(".paneles").hide(800);
    		$(".encabezado_vAdmin").hide(800);
    		$("body").css("background-color", "	#abcdef");

 		 
 		       	$(".insertarAdmin").append(`<form id="form_vAdminUpdate" >
	        		    <div id="elementos_vAdminUpdate">
	        		    
	        		        <div class="nombre_vAdminInsertU">
	        		        <label>Nombre:</label>
	        		        <input id="nombre" type="text" value="`+nombre+`">
	        		        </div>
	        		        
	        		        <div class="contrasena_vAdminInsertU">
	        		        <label>modelo:</label>
	        		        <input id="modelo" type="text"  value="`+modelo+`">
	        		        </div>	
	        		        	        
	        		        <div class="nombre_vAdminInsertU">
	        		        <label>potencia:</label>
	        		        <input id="potencia" type="text"  value="`+potencia+`">
	        		        </div>	
	        		        
	        		        <div class="apellido_vAdminInsertU">
	        		        <label>img:</label>
	        		        <input id="img" type="text"  value="`+img+`">
	        		        </div>
	        		        
	        		        <div class="telefono_vAdminInsertU">
	        		        <label>tipo:</label>
	        		        <select id="tipo">
	        		        <option value="Bicicleta">Bicicleta</option>
	        		        <option value="Coche">Coche</option>
	        		        <option value="Monopatin">Monopatin</option>
	        		        <option value="Patinete">Patinete</option>
	        		        </select>
	        		        </div>
	        		        
	        		        <input type="button" class="submit_vAdminUpdate" id="`+id+`" value="GO!">
	        				
	        		    </div>
	        		    <button class="boton_atras_vAdminU goBack">GO BACK</button>
	        		    </form>`);
 		       		
		        	$(".submit_vAdminUpdate").click(function(){
		        		var id=$(this).attr("id"); 
		        		var nombre=$("#nombre").val();
		        		var modelo=$("#modelo").val();
		        		var potencia=$("#potencia").val();
		        		var img=$("#img").val();
		        		var tipo=$("#tipo").val();
		        		
		        		$.ajax({
		        		 	type: "GET",
		        		 	data:{'id':id,'nombre':nombre , 'modelo':modelo , 'potencia':potencia, 'img':img , 'tipo':tipo },
		     		       	url: "../controller/cUpdateVehiculo.php", 

		     		       	success: function(result){  
		     		       		
		     		       		console.log(result);
		     		       		location.reload(true);  //recarga la pagina
		     		       	},
		     		       	error : function(xhr) {
		     		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		     		   		}
		     		       });
		 	       });
		  });
		
 

        },
        error: function(xhr){
            alert("An error occured: "+xhr.status+" "+xhr.statusText);
        }
    });
	}


/*FIN DE INSERTAR DATOS EN LAS TABLAS DESDE VADMIN */