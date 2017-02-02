'use strict';

/**
 * @ngdoc function
 * @name facturacionApp.controller:DashCtrl
 * @description
 * # DashCtrl
 * Controller of the facturacionApp
 */
var app= angular.module('facturacionApp');
  app.controller('DashCtrl', function ($scope,$rootScope, $location,$localStorage,Login_Services,LxNotificationService,Servicios_Generales,$timeout,$mdSidenav,$log,Inventario_Services,$mdDialog) {
  	$scope.user=$localStorage.datosUser;
  	$scope.progress=false;

    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

  	function success_menu(data){
  		$scope.menu_inicio=data.menu_inicio;
  		$scope.nav_bar=data.menu_inicio;
  		$scope.progress=false;
  	}
  	$scope.get_menu=function(){
  		if ($localStorage.token) {
	  		$scope.progress=true;
	  		Servicios_Generales.Menu().Get({},success_menu).$promise.then(function(data){},function(error){
	  			if (error.status==401) {
	  				$localStorage.$reset();
					$location.path('/');
	  			}
	  			$scope.get_menu();
	  		});
  		}
  	}
  	$scope.get_menu();
			
		$scope.salir=function(){
			$localStorage.$reset();
			$location.path('/');
			// Login_Services.Log().Out().salir().$promise.then(function(data){
			// 	if (data.respuesta==true) {
			// 		LxNotificationService.success('Vuelve Pronto :)');
			// 		$localStorage.$reset();
			// 		$location.path('/');
			// 	}else{
			// 		 $location.path('/');
			// 	}
			// },function(error){
			// 	 LxNotificationService.error('Ha ocurrido un error :(');
			// 	 $location.path('/');
			// });
		}


	/**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }


    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
      };
    }

$scope.close = function () {
      $mdSidenav('right').close()
    };

	function success_productos_agotados(result){
		$scope.productos_agotados=result.respuesta;
	}

    $scope.get_productos_agotados = function () {
      Inventario_Services.Productos().Get_Productos_Agotados().send({},success_productos_agotados).$promise;
    };

    $scope.get_productos_agotados();

    $rootScope.$on("actualizar_tabla_productos_agotados", function() {
        		$scope.get_productos_agotados();
    		});

	$scope.contactar_proveedor_dialog=function(producto){
				$mdDialog.show({
	            controller: DialogController_contactar,
	            templateUrl: 'views/Dash/Inventario/Proveedores/info.html',
	            parent: angular.element(document.body),
	            targetEvent: event,
	            ariaLabel: 'Respuesta Registro',
	            clickOutsideToClose: false,
	            locals:{proveedor:producto.id_proveedor}
	        	});
	}

	function DialogController_contactar($scope,Facturacion_Services,LxNotificationService,Servicios_Generales,proveedor) {
				$scope.load=true;
				function success_proveedor(result){
					$scope.data=result.proveedor;
					var datos_contacto=JSON.parse(result.proveedor.datos_contacto);
					$scope.data.telefono=datos_contacto.telefono;
					$scope.data.celular=datos_contacto.celular;
					$scope.data.correo=datos_contacto.correo;
					$scope.data_persona=JSON.parse(result.proveedor.datos_propietario);
					$scope.load=false;
				}

				Inventario_Services.Proveedores().Get_Proveedor_By_Ruc().send({ruc:proveedor},success_proveedor).$promise;
				console.log('proveedor');

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };

			}

  })
 


