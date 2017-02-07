var app =angular.module('facturacionApp');
  app.controller('ConfiguracionCtrl', function ($scope,$rootScope,$mdDialog,Configuracion_Services,LxNotificationService,Servicios_Generales,$http,$localStorage) {
		$scope.show_edit_img=false;
		function sucess_data_empresa(result){
			if (result.respuest!==false) {
				$scope.show_edit_img=true;
				$scope.data=result.respuesta;
				$scope.data.imagen=Servicios_Generales.server()+$scope.data.imagen;
			}
			
		}

		$scope.get_datos_empresa = function(){
      	Configuracion_Services.Empresa().Get().send({},sucess_data_empresa).$promise.then(function(){},function(error){
      		if (error.status==401) {
                    $localStorage.$reset();
                    $location.path('/');
            }
            if (error.status==500) {
                   $scope.get_datos_empresa();
            }
            
            
      	});	
    	};
    	$scope.get_datos_empresa();

    	$scope.cambiar_img = function(){
    		if ($scope.show_edit_img) {
    			$scope.show_edit_img=false;
    		}else $scope.show_edit_img=true;
    		
    	}

    	 $scope.save_datos_empresa = function(){
            var formData = new FormData();

            formData.append('nombre',$scope.data.nombre);
            formData.append('ruc',$scope.data.ruc);
            formData.append('direccion',$scope.data.direccion);
            formData.append('telefono',$scope.data.telefono);
            formData.append('celular',$scope.data.celular);
            formData.append('correo',$scope.data.correo);

            formData.append('token', $localStorage.token);

            console.log($scope.files);

            angular.forEach($scope.files,function(obj){
                if(!obj.isRemote){
                    formData.append('files[]', obj.lfFile);
                }
            });
            $http.post(Servicios_Generales.server()+'Add_Informacion', formData, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined,Authorization: 'Bearer ' + $localStorage.token}
            }).then(function(result){
                LxNotificationService.success('Datos Guardados Correctamente');               
            },function(err){
                if (err.status==401) {
                    $localStorage.$reset();
                    $location.path('/');
            }
            LxNotificationService.error('Ha ocurrido un error intentalo nuevamente :(');
            });
        };

	  	});

  