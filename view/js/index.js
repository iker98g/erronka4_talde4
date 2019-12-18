$(document).ready(function() {
	modificarJumbotron();
	
	confirmarLetras();
	
	activarRegistro();
	
	realizarRegistro();
	
	activarSesion();
	
	comprobarSesion();
    
	iniciarSesion();

	cerrarSesion();
});

function modificarJumbotron() {
	//cambio del texto del jumbotron
    $('.card').click(function(){
        titulo = $(this).find('h5').html();
        parrafo = $(this).find('.hidden').html();

        $('.jumbotron').find('h1').html(titulo);
        $('.jumbotron').find('p').html(parrafo);
    });
}

function activarRegistro() {
	//activar boton de registro
    $('input[name = "insertarUsu"]').on('keyup', function() {
        empty = false;

        $('input[name = "insertarUsu"]').each(function() {
            empty = $(this).val().length == 0;
        });

        if (empty) {
            $('#btnRegistro').attr('disabled', 'disabled');
        }else {
            $('#btnRegistro').attr('disabled', false);
        }     
    });
}

function confirmarLetras() {
	$( "#nombreFormInsert" ).keypress(function(event) {
	    var codigo=event.which;
	    var codigoString=String.fromCharCode(codigo);
	    
	    alert(codigo);
	    alert(codigoString);
	    
	    if ((codigo > 64 && codigo < 91) || (codigo > 96 && codigo < 123)) {
	    	alert("Es una letra");
	    	return true;
	    }else {
	    	alert("No es una letra");
	        return false;
	    }
	});
}

function confirmarCorreo() {
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var correo=$("#emailFormInsert").val();
    
    if (emailRegex.test(correo)) {
        return true
    }else {
        return false;
    }
}

function comprobarUsuario() {
	$("#btnRegistro").click(function() {	
		var username=$("#usuarioFormInsert").val();

		$.ajax({
			data:{'username':username},
	       	url: "controller/usuarios/cBuscarUsuario.php", 
	       	dataType:"text",
	    	success: function(result) {
	    		console.log(result);
	    		if (result==0) {
	    			alert("El usuario esta libre");
	    		}else {
	    			alert("El usuario esta en uso");
	    		}
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
    });
}

function comprobarCorreo() {
	$("#btnRegistro").click(function() {	
		var correo=$("#emailFormInsert").val();

		$.ajax({
			data:{'correo':correo},
	       	url:"controller/usuarios/cBuscarCorreo.php", 
	       	dataType:"text",
	    	success:function(result) {
	    		if (result==0) {
	    			alert("El correo esta libre");
	    		}else {
	    			alert("El correo esta en uso");
	    			$("#nombreFormInsert").val("");
	    	        $("#emailFormInsert").val("");
	    	        $("#usuarioFormInsert").val("");
	    	        $("#passwordFormInsert").val("");
	    		}
			},
	       	error:function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
    });
}

function realizarRegistro() {
	//insertar usuario
    $("#btnRegistro").click(function() {
    	confirmarCorreo();
    	
		if(confirmarCorreo()) {
			registrarUsuario();
		}else {
			alert("La dirección de email es incorrecta.");
		}
    });
}

function registrarUsuario() {
	var nombre=$("#nombreFormInsert").val();
	var correo=$("#emailFormInsert").val();
	var usuario=$("#usuarioFormInsert").val();
	var contrasena=$("#passwordFormInsert").val();
	
	$.ajax({
		type:"POST",
		data:{'nombre':nombre,'correo':correo, 'usuario':usuario,'contrasena':contrasena},
	   	url:"controller/usuarios/cInsertUsuarios.php", 
	   	dataType:"text",
		success:function(result) { 
	   		alert("Usuario insertado");
	   		
	   		$("#nombreFormInsert").val("");
	   		$("#emailFormInsert").val("");
	   		$("#usuarioFormInsert").val("");
	   		$("#passwordFormInsert").val("");
		},
	   	error:function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
				
			$("#nombreFormInsert").val("");
	   		$("#emailFormInsert").val("");
	   		$("#usuarioFormInsert").val("");
	   		$("#passwordFormInsert").val("");
		}
	});
}

function activarSesion() {
	//activar boton de login
    $('#customControlInline').click(function() {
        empty = false;

        $('input[name = "loginInput"]').each(function() {
            empty = $(this).val().length == 0;
        });

        if (empty) {
            $('#btnLogin').attr('disabled', 'disabled');
        }else {
        	alert("Hola");
        	if ($('#customControlInline').prop('checked')) {
        		$('#btnLogin').attr('disabled', false);
        	}else {
        		$('#btnLogin').attr('disabled', 'disabled');
        	} 
        }     
    });
}

function iniciarSesion() {
	//datos del login
    $("#btnLogin").click(function() {	
		var username=$("#username").val();
        var password=$("#password").val();

		$.ajax({
			data:{'username':username,'password':password},
	       	url: "controller/cSessionVars.php", 
	       	dataType:"json",
	    	success: function(result) {
	    		sesionIniciada(result);
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   			
	   			$("#username").val("");
       			$("#password").val("");
	   		}
		});
    });
}

function comprobarSesion() {
	$.ajax({
		data:{},
       	url:"controller/cSessionVerVars.php", 
       	dataType:"json",
    	success:function(result) {
    		sesionIniciada(result);
		},
       	error:function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   			
   			$("#username").val("");
   			$("#password").val("");
   		}
	});
}

function sesionIniciada(result) {
	if (result != 0) {
		//generar botones de admin, registro y login
		newRow="";
		
		if (result.admin==0) {
			newRow+="<ul class='navbar-nav mr-auto'>";
	        newRow+="<li class='nav-item'>";
	        newRow+="<a class='nav-link text-light' id='panelAdmin' href='view/vAdmin.html'>Panel Admin</a>";
			newRow+="</li>";
			newRow+="<li class='nav-item'>";
			newRow+="<a class='nav-link text-light' id='usuario'>"+ result.usuario +" </a>";
			newRow+="</li>";
			newRow+="<li class='nav-item'>";
			newRow+="<i class='text-light fas fa-sign-out-alt' id='cerrarSesion'></i>";
			newRow+="</li>";
			newRow+="</ul>";
		}else {
			newRow+="<ul class='navbar-nav mr-auto'>";
			newRow+="<li class='nav-item'>";
			newRow+="<a class='nav-link text-light' id='usuario'>"+ result.usuario +" </a>";
			newRow+="</li>";
			newRow+="<li class='nav-item'>";
			newRow+="<i class='text-light fas fa-sign-out-alt' id='cerrarSesion'></i>";
			newRow+="</li>";
			newRow+="</ul>";
		}
		$("#nombreUsuario").html(newRow);
		
        $('#nombreUsuario').show();
        $('.sesion').hide();
        
        $("#username").val("");
        
        cerrarSesion();
	}else {	
		$("#username").val("");
		$("#password").val("");
	}
}

function cerrarSesion() {
	$("#cerrarSesion").click(function() {	
		$.ajax({
	       	url:"controller/cSessionLogout.php", 
	       	dataType:"text",
	    	success:function(result) {  
	    		alert("Vuelve pronto :)");
	    		window.location.href="index.html";
			},
	       	error:function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		}); 
	});
}