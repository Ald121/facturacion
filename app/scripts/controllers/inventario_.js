'use strict';

/**
 * @ngdoc function
 * @name facturacionApp.controller:InventarioCtrl
 * @description
 * # InventarioCtrl
 * Controller of the facturacionApp
 */
angular.module('facturacionApp')
  app.controller('InventarioCtrl', function ($scope, $location,$localStorage,$mdDialog) {
			$scope.selected=[];

			//----------------------------------------------------- NUEVA CATEGORIA -----------------------------------------

			$scope.nuevo_dialog=function(){
				$mdDialog.show({
            controller: DialogController_nuevo,
            templateUrl: 'views/Dash/Inventario/Categorias/new.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false
        	});
			}

			function DialogController_nuevo($scope) {

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}

	  	});