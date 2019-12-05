$(document).ready(function() {
    $('.card').click(function(){
        titulo = $(this).find('h5').html();
        parrafo = $(this).find('p').html();
        console.log(titulo);

        $('.jumbotron').find('h1').html(titulo);
        $('.jumbotron').find('p').html(parrafo);
    });

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
	       		if (result == 1) {
	       			alert("Sesión iniciada");
	       		}else {
	       			alert("No se ha iniciado sesión");
	       		}
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		}); 
	});
});