<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Zornotza Quidditch</title>
        <script src="https://kit.fontawesome.com/661afcc94b.js"></script>
        <!--<link rel="icon" type="image/png" href="view/img/favicon.ico"> -->
        <link rel="stylesheet" href="css/principal.css">
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
                    <a class="nav-link" href="../index.php">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="vAdmin.php">Administración</a>
                  </li>
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
          <!-- CARDS -->
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Junior</h5>
                    <img src="imagenes/plantilla.jpg" class="card-img-top" alt="...">
                    <button type="button" class="btn btn-primary botones" data-toggle="modal" data-target="#exampleModal">
                        Ver jugadores
                    </button>
                      
                    <!-- MODAL -->
                      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Jugadores Junior</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <h6>Cazadores</h5>
                                <div class="row">
                                  <div class="col-sm-6">
                                    <div class="card">
                                      <div class="card-body">
                                        <img src="https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png" class="card-img-top" alt="...">
                                        <h5 class="card-title">Eukene</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    <!-- FIN MODAL -->
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Senior</h5>
                    <img src="imagenes/plantilla_2.jpg" class="card-img-top" alt="...">
                    <button type="button" class="btn btn-primary botones" data-toggle="modal" data-target="#exampleModal">
                        Ver jugadores
                    </button>
                      
                    <!-- MODAL -->
                      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Jugadores Senior</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <h6>Cazadores</h5>
                                <div class="row">
                                  <div class="col-sm-6">
                                    <div class="card">
                                      <div class="card-body">
                                        <img src="https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png" class="card-img-top" alt="...">
                                        <h5 class="card-title">Eukene</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    <!-- FIN MODAL -->
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Master</h5>
                      <img src="imagenes/plantilla_3.jpg" class="card-img-top" alt="...">
                      <button type="button" class="btn btn-primary botones" data-toggle="modal" data-target="#exampleModal">
                          Ver jugadores
                      </button>
                        
                      <!-- MODAL -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Jugadores Junior</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <h6>Cazadores</h5>
                                  <div class="row">
                                    <div class="col-sm-6">
                                      <div class="card">
                                        <div class="card-body">
                                          <img src="https://www.stickpng.com/assets/thumbs/585e4bf3cb11b227491c339a.png" class="card-img-top" alt="...">
                                          <h5 class="card-title">Eukene</h5>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      <!-- FIN MODAL -->
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
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </body>
</html>