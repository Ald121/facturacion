'use strict';

/**
 * @ngdoc function
 * @name facturacionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the facturacionApp
 */
var app = angular.module('facturacionApp');

app.controller('MainCtrl', function ($scope, $location,$localStorage,Login_Services,LxNotificationService,Auth) {
	//------------------------------------------------------------------------------- Licencia -----------------------------------
	function success_licencia(result){
		$scope.dias_restantes=result.dias_restantes;
	}

	$scope.Get_Licencia=function(){
		Login_Services.Licencia().Get().send({},success_licencia).$promise.then(function(){},function(error){

			if (error.status==401) {
				LxNotificationService.error('Actualice su licencia para seguir usando el sistema :(');
			}

			if (error.status==500) {
				LxNotificationService.error('Ha ocurrido un error con la Licencia :(');
			}

		});
	}

	$scope.Get_Licencia();

//------------------------------------------------------------------------------- Acceso -----------------------------------
	$scope.progreso=false;
		$scope.Ingresar=function(){
			$scope.progreso=true;
			Login_Services.Log().In().ingresar($scope.data_user).$promise.then(function(data){
				if (data.respuesta==true) {
					$localStorage.datosUser=data.datosUser;
					$localStorage.token=data.token;
					// Auth.setUser(data.datosUser);
					LxNotificationService.success('Bienvenido '+data.datosUser.id);
					$location.path('/Dash/Inicio');
					$scope.progreso=false;
				}else{
					 LxNotificationService.error('Usuario/Contraseña Incorrecta :)');
					 $scope.progreso=false;
				}
			},function(error){

				if (error.status==401) {
				LxNotificationService.error('Actualice su licencia para seguir usando el sistema :(');
					}

				if (error.status==500) {
					LxNotificationService.error('Ha ocurrido un error con la Licencia :(');
				}
			});
		}

	  	});

