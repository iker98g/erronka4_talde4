$(document).ready(function() {
	//cambio del texto del jumbotron
    $('.card').click(function(){
        titulo = $(this).find('h5').html();
        parrafo = $(this).find('.hidden').html();

        $('.jumbotron').find('h1').html(titulo);
        $('.jumbotron').find('p').html(parrafo);
    });
    
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
    
    //insertar usuario
    $("#btnRegistro").click(function() {	
		var nombre=$("#nombreFormInsert").val();
        var correo=$("#emailFormInsert").val();
        var usuario=$("#usuarioFormInsert").val();
        var contrasena=$("#passwordFormInsert").val();

		$.ajax({
			type: "POST",
			data:{'nombre':nombre,'correo':correo, 'usuario':usuario,'contrasena':contrasena},
	       	url: "controller/usuarios/cAniadirUsuarios.php", 
	    	success: function() { 
	       		alert("Usuario insertado.");
	       		$("#nombreFormInsert").val("");
	       		$("#emailFormInsert").val("");
	       		$("#usuarioFormInsert").val("");
	       		$("#passwordFormInsert").val("");
			},
	       	error: function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
    });

    //activar boton de login
    $('input[name = "loginInput"]').on('keyup', function() {
        empty = false;

        $('input[name = "loginInput"]').each(function() {
            empty = $(this).val().length == 0;
        });

        if (empty) {
            $('#btnLogin').attr('disabled', 'disabled');
        }else {
            $('#btnLogin').attr('disabled', false);
        }     
    });

    //datos del login
    $("#btnLogin").click(function() {	
		var username=$("#username").val();
        var password=$("#password").val();

		$.ajax({
			data:{'username':username,'password':password},
	       	url: "controller/cSessionVars.php", 
	       	dataType:"text",
	    	success: function(result) { 
	       		if (result != 0) {
                    $('#nombreUsuario').show();
                    $('.sesion').hide();
	       		}else {
	       			alert("No se ha iniciado sesión");
	       		}
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
    });
    
    //cerrar sesión
    $("#cerrarSesion").click(function() {	
    	$.ajax({
	       	url: "controller/cSessionLogout.php", 
	       	dataType:"text",
	    	success: function(result){  
	    		alert("Vuelve pronto :)");
	    		window.location.href="index.php";
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		}); 
    });
});