<!DOCTYPE html>
<html lang="en" ng-app='miApp'>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Zornotza Quidditch</title>
        <script src="https://kit.fontawesome.com/661afcc94b.js"></script>
        <!--<link rel="icon" type="image/png" href="view/img/favicon.ico"> -->
        <link rel="stylesheet" href="css/principal.css">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script> 
         <script src="js/principal.js" type="text/javascript"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
    	<header>
        	<!-- NAV -->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <a class="navbar-brand" href="#"><img src="imagenes/logo_snitch.png" width="50px"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="../index.html">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="vAdmin.php">Administración</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="modal" data-target="#examModal">Contáctanos</a>
                  </li>
  
                <!-- Modal -->
				<div class="modal fade" id="examModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  					<div class="modal-dialog" role="document">
    					<div class="modal-content">
      						<div class="modal-header">
        						<h5 class="modal-title" id="exampleModalLabel">Contáctanos</h5>
        						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          							<span aria-hidden="true">&times;</span>
        						</button>
      						</div>
      						<div class="modal-body">
        						<form>
  									<div class="form-group">
    									<h6>Consulta</h1>
    									<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  									</div>
  									<div class="form-group">
    									<h6>Valoración</h6>
    									<p class="clasificacion">
    										<input id="radio1" type="radio" name="estrellas" value="5">
                                            <label for="radio1">★</label>
                                            <input id="radio2" type="radio" name="estrellas" value="4">
                                            <label for="radio2">★</label>
                                            <input id="radio3" type="radio" name="estrellas" value="3">
                                            <label for="radio3">★</label>
                                            <input id="radio4" type="radio" name="estrellas" value="2">
                                            <label for="radio4">★</label>
                                            <input id="radio5" type="radio" name="estrellas" value="1">
                                            <label for="radio5">★</label>
  										</p>
  									</div>
								</form>
      						</div>
      						<div class="modal-footer">
        						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        						<button type="button" class="btn btn-primary" data-dismiss="modal">Enviar consulta</button>
      						</div>
    					</div>
  					</div>
				</div>
                </ul>
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-light">Regístrate</button>
                  </div>
                  <div class="btn-group mr-2" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-light">Iniciar Sesión</button>
                  </div>
                </div>
              </div>
            </nav>
          <!-- FIN NAV -->
    	</header>
        <main role="main">
          <!-- CAROUSEL -->
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="imagenes/quidditch.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="imagenes/quidditch_2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="imagenes/quidditch_3.jpg" class="d-block w-100" alt="...">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          <!-- FIN CAROUSEL -->
          
          <div style="text-align: center" ng-controller="miControlador">
<!--          		////MOSTRAR CATEGORIAS////// -->
			
			
			 <div style="margin-top: 30px; color:black;text-align:center;margin-left:50p">
         		<h1>CATEGORIAS</h1>
          	</div>
          
          <div style="display:inline-block" ng-repeat="dato in misdatosJSON ">
          <div class="row">
       
          
            <div class="card" style="width: 28rem; margin: 20px;">
              
              <div class="card-body">
              
                <h5 class="card-title">{{dato.nombre}}</h5>
                <img src="{{dato.imagen}}" class="card-img-top" height="270px" alt="..." >
<!--                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
          
                <a href="" style="margin-top:20px;" id="{{dato.idCategoria}}" ng-click="mostrarEquipos(dato.idCategoria)" class="btn btn-primary" >Ver equipos</a>
                
                	
              </div>
         
            </div>
			</div>
          </div>
          <div> 
                  	<div ng-show="ver=='si'" ng-repeat="datos in misEquipos " style="text-align: center">
                        	<h1>{{datos.nombre}}</h1>
                        	<img src="{{datos.logo}}" width="200px" height="150px" alt="..." >
                        	<a href="" id="{{datos.idEquipo}}" ng-click="mostrarJugadores(datos.idEquipo)" class="btn btn-dark" >Ver jugadores</a>
                        	<a href="" id="{{datos.idEquipo}}" ng-click="mostrarEntrenadores(datos.idEquipo)" class="btn btn-danger" >Ver entrenadores</a>
                    </div>
               		<div ng-show="verEntrenadores=='si'" ng-repeat="entrenador in misEntrenadores " style="text-align: center">
                        	<h1 style="color:red">{{entrenador.nombre}}</h1>
                        	<img src="{{entrenador.imagen}}" width="200px" height="150px" alt="..." >
                        	
                    </div>
            </div>
			<div class="row">

			<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"  ng-show="verJugadores=='si'"  ng-repeat="datos in misJugadores" style="text-align: center">
					<div style="display:inline-block">
						<img src="{{datos.imagen}}" width="200px" height="150px" alt="..." >
						<h2>{{datos.nombre}}</h2>
						<h3 style="color: blue">{{datos.rol}}</h3>
					</div> 
					
			</div>
			
			</div>
			
			
			
			
			
			
          </div>
        </main> 
        <!-- FOOTER -->
        <footer class="footer text-muted text-center bg-secondary">
    	    <ul class="list-inline pt-3">
    		    <li class="list-inline-item"><a href="https://es-es.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="https://twitter.com/?lang=es"><i class="fab fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/?hl=es"><i class="fab fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="https://www.youtube.com/?gl=ES&hl=es"><i class="fab fa-youtube"></i></a></li>
            <li class="list-inline-item"><a href="https://support.google.com/plus/?hl=es-419#topic=9259565"><i class="fab fa-google-plus-g"></i></a></li>
          </ul>
          <p class="mb-1">&copy; Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores ipsam in inventore voluptatibus. Labore, provident. Quos ratione accusantium facere? Rem assumenda, a adipisci possimus repudiandae ipsam mollitia debitis architecto.</p>
        </footer>
        <!-- FIN FOOTER -->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </body>
</html>