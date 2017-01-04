'use strict';

/**
 * @ngdoc function
 * @name facturacionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the facturacionApp
 */
var app = angular.module('facturacionApp');

app.controller('MainCtrl', function ($scope, $location,$localStorage,Login_Services,LxNotificationService) {
	//------------------------------------------------------------------------------- Acceso -----------------------------------
	$scope.progreso=false;
		$scope.Ingresar=function(){
			$scope.progreso=true;
			Login_Services.Log().In().ingresar($scope.data_user).$promise.then(function(data){
				if (data.respuesta==true) {
					$localStorage.datosUser=data.datosUser;
					$localStorage.token=data.token;
					LxNotificationService.success('Bienvenido '+data.datosUser.id);
					$location.path('/Dash/Inicio');
					$scope.progreso=false;
				}else{
					 LxNotificationService.error('Usuario/Contraseña Incorrecta :)');
					 $scope.progreso=false;
				}
			},function(error){
				 LxNotificationService.error('Ha ocurrido un error intentalo nuevamente :(');
			});
		}

	  	});

