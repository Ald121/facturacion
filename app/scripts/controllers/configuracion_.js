var app =angular.module('facturacionApp');
  app.controller('ConfiguracionCtrl', function ($scope,$rootScope,$mdDialog,Configuracion_Services,LxNotificationService,Servicios_Generales,$http,$localStorage) {
		
		function sucess_data_empresa(result){
			$scope.data=result.respuesta;
		}

		$scope.get_datos_empresa = function(){
      	Configuracion_Services.Empresa().Get().send({},sucess_data_empresa).$promise.then(function(){},function(error){
      		if (error.status==401) {
                    $localStorage.$reset();
                    $location.path('/');
            }else{
            	$scope.get_datos_empresa();
            }
      	});	
    	};
    	$scope.get_datos_empresa();

    	// $scope.save_datos_empresa = function(){
     //  	Configuracion_Services.Empresa().Add().send($scope.data).$promise.then(function(data){
     //  		if (data.respuesta) {
     //  			$scope.get_datos_empresa();
     //  			LxNotificationService.success('Datos Guardados Correctamente');
     //  		}
     //  	},function(error){
     //  		if (error.status==401) {
     //                $localStorage.$reset();
     //                $location.path('/');
     //        }
     //        LxNotificationService.error('Ha ocurrido un error intentalo nuevamente :(');
     //  	});	
    	// };


    	 $scope.save_datos_empresa = function(){
            var formData = new FormData();

            formData.append('nombre',$scope.data.nombre);
            formData.append('ruc',$scope.data.ruc);
            formData.append('direccion',$scope.data.direccion);
            formData.append('telefono',$scope.data.telefono);
            formData.append('celular',$scope.data.celular);
            formData.append('correo',$scope.data.correo);

            formData.append('token', $localStorage.token);

            angular.forEach($scope.files,function(obj){
                if(!obj.isRemote){
                    formData.append('files[]', obj.lfFile);
                }
                formData.append('files[]', obj.lfFile);
            });
            $http.post(Servicios_Generales.server()+'Add_Informacion', formData, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined,Authorization: 'Bearer ' + $localStorage.token}
            }).then(function(result){
                LxNotificationService.success('Datos Guardados Correctamente');               
            },function(err){
                if (error.status==401) {
                    $localStorage.$reset();
                    $location.path('/');
            }
            LxNotificationService.error('Ha ocurrido un error intentalo nuevamente :(');
            });
        };

	  	});

  