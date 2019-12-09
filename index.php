<!DOCTYPE html>
<html lang="en">
<head>
  	<meta charset="UTF-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<meta http-equiv="X-UA-Compatible" content="ie=edge">
  	<title>Zornotza Quidditch</title>
    
    <link rel="icon" type="image/png" href="view/imagenes/favicon.ico">
  	<link href="view/css/index.css" rel="stylesheet" type="text/css" />
  	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

  	<script src="https://kit.fontawesome.com/661afcc94b.js"></script>
  	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  	
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  	<script src="view/js/index.js"></script>
</head>
<body>
	<header>
		<!-- NAV -->
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#"><img src="view/imagenes/logo_snitch.png"></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbarText" aria-controls="navbarText"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item"><a class="nav-link" href="view/vPrincipal.php">Equipos</a></li>
					<li class="nav-item"><a class="nav-link" href="view/vAdmin.php">Administración</a></li>
				</ul>
				<div class="btn-toolbar" role="toolbar"
					aria-label="Toolbar with button groups">
					<div class="btn-group mr-2" role="group" aria-label="First group">
						<button type="button" class="btn btn-outline-light">Regístrate</button>
					</div>
					<div class="btn-group mr-2" role="group" aria-label="Second group">
					  <button type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModal">Iniciar Sesión</button> <!-- Button trigger modal -->
					</div>
				</div>
			</div>
		</nav>
    <!-- FIN NAV -->

    <!-- MODAL -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">Zornotza Quidditch</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <form class="cardLogin">
                <div class="form-group">
                  <input type="text" class="form-control" id="username" placeholder="Usuario" name="loginInput" required> 
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="password" aria-describedby="passHelp" placeholder="Contraseña" name="loginInput" required>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <div class="form-group text-center w-100">
              <button type="button" class="btn btn-secondary w-100" id="btnLogin" disabled>Iniciar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN MODAL -->

	</header>
	<main> 
    <!-- JUMBOTRÓN -->
    <section class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">¿QUIÉNES SOMOS?</h1>
        <p class="lead">Somos Zornotza Quidditch, primer club de Quidditch formado en
        Vizcaya. El club se formo en noviembre de 2015, y desde entonces, todos los equipos 
        del club compiten en las mejores categorias de la provincia. Para nosotros, lo mas 
        importante es que nuestros jugadores se desarrollen tanto como personas como 
        deportistas, aprendiendo ante todo valores como el companerismo y el respeto hacia 
        los demas, ya sean companeros o contrincantes. Todo ello basado en el trabajo diario 
        y el convencimiento de que mejorar dia a dia es el camino a seguir.
        </p>
      </div>
    </section>
    <!-- FIN JUMBOTRÓN -->

    <!-- CARDS -->
    <div class="album py-5">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card mb-4 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">¿QUIÉNES SOMOS?</h5>
                <p class="card-text">Somos Zornotza Quidditch, primer club de Quidditch formado en
                Vizcaya. El club se formo en noviembre de 2015, y desde entonces, todos los equipos 
                del club compiten en las mejores categorias de la provincia. Para nosotros, lo mas 
                importante es que nuestros jugadores se desarrollen tanto como personas como 
                deportistas, aprendiendo ante todo valores como el companerismo y el respeto hacia 
                los demas, ya sean companeros o contrincantes. Todo ello basado en el trabajo diario 
                y el convencimiento de que mejorar dia a dia es el camino a seguir.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card mb-4 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">¿QUÉ ES EL QUIDDITCH?</h5>
                <p class="card-text">Some quick example text to build on the card
                  title and make up the bulk of the card's content. Some quick example 
                  text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card mb-4 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">¿CÓMO SE JUEGA?</h5>
                <p class="card-text">Some quick example text to build on the card
                  title and make up the bulk of the card's content. Some quick example 
                  text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card
                  title and make up the bulk of the card's content. Some quick example 
                  text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN CARDS -->
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
</body>
</html>