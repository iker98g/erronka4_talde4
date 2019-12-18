var miApp=angular.module('miApp',[]);
        miApp.controller('miControlador',['$scope','$http', function($scope,$http){
           $scope.ver="no";
           $scope.verJugadores='no';
           $scope.verEntrenadores='no'; 
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
    	   $scope.verEntrenadores='no';
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
    	   $scope.verEntrenadores='no';
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
        
       
       $scope.mostrarEntrenadores=function(bb){
    	   $scope.verEntrenadores='si';
    	   $scope.verJugadores='no';
    	   $scope.id= bb;
    	   $http({url:'../controller/entrenadores/cMostrarEntrenadoresPorEquipo.php',
    		   method: "GET",
    		   params:{value:$scope.id}}).then(function(data){
    		   
    			  //JSON.stringify
    			 
               $scope.misEntrenadores=data.data;
               
               console.log($scope.misEntrenadores);
            
              
              
             }).catch(function(response){
          	   console.error('Error ocurred: ',response.status,response.data);
          	   
      	   }).finally(function(){
      		   console.log("Task finished.");
      	   });
       }     
                
       
       $scope.nuevaConsulta=function(){
    	 //TODOS LOS USUARIOS SON ANONIMOS .DE MOMENTO
    	 var consulta=$scope.miConsulta;
    	 var usuario=100;
    	 //alert(consulta);
    	 misDatosInsert={
    		consulta:$scope.miConsulta,
    		usuario:"100"
    	 }
    	 
    	 misDatosInsert=JSON.stringify(misDatosInsert);
    	 alert(misDatosInsert);
    	 
    	   $http({url:'../controller/consultas/cInsertConsultaPrincipal.php',
    		   method: "GET",
    		   params:{datosInsert:misDatosInsert}}).then(function(data){
    		   
    			
    			 
    			   
            
              
              
             }).catch(function(response){
          	   console.error('Error ocurred: ',response.status,response.data);
          	   
      	   }).finally(function(){
      		   console.log("Consulta enviada.");
      	   });
       }
     
                
        }]);


        