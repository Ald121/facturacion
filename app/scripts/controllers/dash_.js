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
  	$scope.progress=false;
  	function success_menu(data){
  		$scope.menu_inicio=data.menu_inicio;
  		$scope.nav_bar=data.menu_inicio;
  		$scope.progress=false;
  	}
  	$scope.get_menu=function(){
  		$scope.progress=true;
  		Servicios_Generales.Menu().Get({},success_menu).$promise.then(function(data){},function(error){
  			$scope.get_menu();
  	});
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

	  	});

