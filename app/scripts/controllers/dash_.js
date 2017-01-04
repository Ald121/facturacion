'use strict';

/**
 * @ngdoc function
 * @name facturacionApp.controller:DashCtrl
 * @description
 * # DashCtrl
 * Controller of the facturacionApp
 */
angular.module('facturacionApp')
  app.controller('DashCtrl', function ($scope, $location,$localStorage,Login_Services,LxNotificationService,Servicios_Generales) {
  	$scope.user=$localStorage.datosUser;
  	function success_menu(data){
  		$scope.menu_inicio=data.menu_inicio;
  		$scope.nav_bar=data.menu_inicio;
  	}
  	$scope.get_menu=function(){
  		Servicios_Generales.Menu().Get({},success_menu).$promise.then(function(data){},function(error){
  			$scope.get_menu();
  	});
  	}
  	$scope.get_menu();
			
		$scope.salir=function(){

			Login_Services.Log().Out().salir().$promise.then(function(data){
				if (data.respuesta==true) {
					LxNotificationService.success('Vuelve Pronto :)');
					$localStorage.$reset();
					$location.path('/');
				}else{
					 $location.path('/');
				}
			},function(error){
				 LxNotificationService.error('Ha ocurrido un error :(');
				 $location.path('/');
			});
		}

	  	});

