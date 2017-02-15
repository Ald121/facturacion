'use strict';

/**
 * @ngdoc function
 * @name facturacionApp.controller:ReportesCtrl
 * @description
 * # ReportesCtrl
 * Controller of the facturacionApp
 */
var app =angular.module('facturacionApp');
  app.controller('ReportesCtrl', function ($scope,$rootScope,Proformas_Services,Reportes_Services,$window,$mdDialog) {
		
		console.log('reportes');
//Productos Mas Vendidos
  
function succes_mas_vendidos(result){
  $scope.labels = result.labels;
  $scope.data = result.sumas;
}
Reportes_Services.Productos().Mas_vendidos().send({},succes_mas_vendidos).$promise.then(function(){},function(error){

			if (error.status==401) {
				LxNotificationService.error('Su sesión ha caducado');
			}

			if (error.status==500) {
				LxNotificationService.error('Ha ocurrido un error ');
			}
			$LocalStorage.reset();

		});;



//VENTAS POR MES 

$scope.series_x_mes=['Nro. Ventas'];
function succes_x_mes(result){
  $scope.labels_x_mes = result.labels;
  $scope.data_x_mes = result.sumas;
}
Reportes_Services.Facturacion().ventas_x_mes().send({},succes_x_mes).$promise.then(function(){},function(error){

			if (error.status==401) {
				LxNotificationService.error('Su sesión ha caducado');
			}

			if (error.status==500) {
				LxNotificationService.error('Ha ocurrido un error ');
			}
			$LocalStorage.reset();

		});;


// $scope.meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
// $scope.data_ventas = [
//     [0, 59, 80, 81, 56, 55, 40,100]
//   ];


	  	});

