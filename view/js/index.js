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
	       	dataType:"text",
	    	success: function(result) { 
	       		alert("Usuario insertado");
	       		
	       		$("#nombreFormInsert").val("");
	       		$("#emailFormInsert").val("");
	       		$("#usuarioFormInsert").val("");
	       		$("#passwordFormInsert").val("");
			},
	       	error: function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   			
	   			$("#nombreFormInsert").val("");
	       		$("#emailFormInsert").val("");
	       		$("#usuarioFormInsert").val("");
	       		$("#passwordFormInsert").val("");
	   		}
		});
    });

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
        		alert("Hola1");
        	}else {
        		$('#btnLogin').attr('disabled', 'disabled');
        		alert("Hola2");
        	}
            
        }     
    });

    //datos del login
    $("#btnLogin").click(function() {	
		var username=$("#username").val();
        var password=$("#password").val();

		$.ajax({
			data:{'username':username,'password':password},
	       	url: "controller/cSessionVars.php", 
	       	dataType:"json",
	    	success: function(result) {
	    		console.log(result);
	    		
	       		if (result != 0) {
	       			//generar botones de admin, registro y login
	    			newRow="";
	    			
	    			newRow+="<button id='dropdownMenuButton' class='btn btn-dark' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>";
	    				newRow+="<a>"+ result.usuario +" </a>";
	    				newRow+="<i class='far fa-user-circle fa-lg'></i>";
	    			newRow+="</button>";
	    			
	    			if (result.admin==1) {
	    			newRow+="<div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>";
	    				newRow+="<a class='dropdown-item' href='view/vAdmin.php'>";
	    					newRow+="<i class='fas fa-users-cog'></i>";
	    				newRow+=" Panel Admin</a>";
	    				newRow+="<div class='dropdown-divider'></div>";
	    				newRow+="<a class='dropdown-item' id='cerrarSesion' href='javascript:void(0);'>";
	    					newRow+="<i class='fas fa-sign-out-alt'></i>";
	    				newRow+=" Cerrar sesión</a>";
	    			newRow+="</div>";
	    			
	    			}else {
    				newRow+="<div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>";
	    				newRow+="<a class='dropdown-item' id='cerrarSesion' href='javascript:void(0);'>";
	    					newRow+="<i class='fas fa-sign-out-alt'></i>";
	    				newRow+=" Cerrar sesión</a>";
	    			newRow+="</div>";
	    			}
	    			
	    			$("#nombreUsuario").append(newRow);
	    			
                    $('#nombreUsuario').show();
                    $('.sesion').hide();
                    
                    $("#username").val("");
                    
                    cerrarSesion();
	       		}else {
	       			alert("No se ha iniciado sesión");
	       			
	       			$("#username").val("");
	       			$("#password").val("");
	       		}
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   			
	   			$("#username").val("");
       			$("#password").val("");
	   		}
		});
    });
});

function cerrarSesion() {
	$("#cerrarSesion").click(function() {	
    	$.ajax({
	       	url: "controller/cSessionLogout.php", 
	       	dataType:"text",
	    	success: function(result){  
	    		alert("Vuelve pronto :)");
	    		window.location.href="index.html";
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		}); 
    });
}