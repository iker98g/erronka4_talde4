var miApp=angular.module('miApp',[]);
        miApp.controller('miControlador',['$scope','$http', function($scope,$http){
           $scope.ver="no";
           $scope.verJugadores='no';     
                $http.get('../controller/categorias/cSeleccionarCategorias.php').then(function(data) {
                	
                         //console.log(data.data);
                         

                        $scope.misdatosJSON = data.data;
                        
                       }).catch(function(response){
                    	   console.error('Error ocurred: ',response.status,response.data);
                    	   
                	   }).finally(function(){
                		   console.log("Task finished.");
                	   });
   
            
                
                
       $scope.mostrarEquipos=function(gg){
    	   $scope.ver='si';
    	   $scope.verJugadores='no';
    	   $scope.id= gg;
    	   $http({url:'../controller/equipos/cEquiposPorCategoria.php',
    		   method: "GET",
    		   params:{value:$scope.id}}).then(function(data){
    		   
    			  //JSON.stringify
    			 
               $scope.misEquipos=data.data;
               
               console.log($scope.misEquipos);
            
              
              
             }).catch(function(response){
          	   console.error('Error ocurred: ',response.status,response.data);
          	   
      	   }).finally(function(){
      		   console.log("Task finished.");
      	   });
       }         
                
            
       $scope.mostrarJugadores=function(ff){
    	   $scope.verJugadores='si';
    	   $scope.id= ff;
    	   $http({url:'../controller/jugadores/cMostrarJugadoresPorEquipo.php',
    		   method: "GET",
    		   params:{value:$scope.id}}).then(function(data){
    		   
    			  //JSON.stringify
    			 
               $scope.misJugadores=data.data;
               
               console.log($scope.misJugadores);
            
              
              
             }).catch(function(response){
          	   console.error('Error ocurred: ',response.status,response.data);
          	   
      	   }).finally(function(){
      		   console.log("Task finished.");
      	   });
       }         
                
                
                
                
                
        }]);


        