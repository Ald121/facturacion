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
		$scope.Ingresar=function(){
			Login_Services.Log().In().ingresar($scope.data_user).$promise.then(function(data){
				if (data.respuesta==true) {
					$localStorage.datosUser=data.datosUser;
					$localStorage.token=data.token;
					LxNotificationService.success('Bienvenido'+'--User--');
				}else{
					 LxNotificationService.error('Usuario/Contraseña Incorrecta');
				}
			});
		}

	  	});

