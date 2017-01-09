'use strict';

/**
 * @ngdoc function
 * @name facturacionApp.controller:InventarioCtrl
 * @description
 * # InventarioCtrl
 * Controller of the facturacionApp
 */
var app =angular.module('facturacionApp');
  app.controller('CategoriasCtrl', function ($scope,$rootScope, $location,$localStorage,$mdDialog,Inventario_Services) {
			$scope.selected=[];
			// -------------------------------------------------------CATEGORIAS------------------------------------------------------------
			//------------------------------------------------- LLENADO DE TABLA -----------------------------------------
			function success_tabla(result){
				$scope.data_table=result.respuesta.data;
			}
			$scope.get_tabla=function(){
				Inventario_Services.Categorias().Get().send({},success_tabla).$promise
			}
			$scope.get_tabla();

			$rootScope.$on("actualizar_tabla", function() {
        		$scope.get_tabla();
    		});
			//----------------------------------------------------- NUEVO -----------------------------------------

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

			function DialogController_nuevo($scope,Inventario_Services,LxNotificationService) {

				$scope.guardar=function(){
					Inventario_Services.Categorias().Add().send($scope.data).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha guardado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}

			//-------------------------------------------------------- DELETE  --------------------------------------------
			$scope.dialog_eliminar=function(obj){
				$mdDialog.show({
            controller: DialogController_delete,
            templateUrl: 'views/Dash/Inventario/Categorias/delete.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_delete($scope,Inventario_Services,LxNotificationService,obj) {
				$scope.eliminar=function(){
					Inventario_Services.Categorias().Delete().send({id:obj.id}).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha eliminado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}
			//-------------------------------------------------------- UPDATE  --------------------------------------------
			$scope.dialog_update=function(obj){
				$mdDialog.show({
            controller: DialogController_update,
            templateUrl: 'views/Dash/Inventario/Categorias/update.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_update($scope,Inventario_Services,LxNotificationService,obj) {
				$scope.data=obj;
				$scope.actualizar=function(){
					Inventario_Services.Categorias().Update().send($scope.data).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha actualizado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}

	  	});

  app.controller('MarcasCtrl', function ($scope,$rootScope, $location,$localStorage,$mdDialog,Inventario_Services) {
			$scope.selected=[];
			// -------------------------------------------------------MARCAS------------------------------------------------------------
			//------------------------------------------------- LLENADO DE TABLA -----------------------------------------
			function success_tabla(result){
				$scope.data_table=result.respuesta.data;
			}
			$scope.get_tabla=function(){
				Inventario_Services.Marcas().Get().send({},success_tabla).$promise
			}
			$scope.get_tabla();

			$rootScope.$on("actualizar_tabla", function() {
        		$scope.get_tabla();
    		});
			//----------------------------------------------------- NUEVO -----------------------------------------

			$scope.nuevo_dialog=function(){
				$mdDialog.show({
            controller: DialogController_nuevo,
            templateUrl: 'views/Dash/Inventario/Marcas/new.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false
        	});
			}

			function DialogController_nuevo($scope,Inventario_Services,LxNotificationService) {

				$scope.guardar=function(){
					Inventario_Services.Marcas().Add().send($scope.data).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha guardado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}

			//-------------------------------------------------------- DELETE  --------------------------------------------
			$scope.dialog_eliminar=function(obj){
				$mdDialog.show({
            controller: DialogController_delete,
            templateUrl: 'views/Dash/Inventario/Marcas/delete.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_delete($scope,Inventario_Services,LxNotificationService,obj) {
				$scope.eliminar=function(){
					Inventario_Services.Marcas().Delete().send({id:obj.id}).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha eliminado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}
			//-------------------------------------------------------- UPDATE  --------------------------------------------
			$scope.dialog_update=function(obj){
				$mdDialog.show({
            controller: DialogController_update,
            templateUrl: 'views/Dash/Inventario/Marcas/update.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_update($scope,Inventario_Services,LxNotificationService,obj) {
				$scope.data=obj;
				$scope.actualizar=function(){
					Inventario_Services.Marcas().Update().send($scope.data).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha actualizado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}

	  	});

 app.controller('ModelosCtrl', function ($scope,$rootScope, $location,$localStorage,$mdDialog,Inventario_Services) {
			$scope.selected=[];
			// -------------------------------------------------------MODELOS------------------------------------------------------------
			//------------------------------------------------- LLENADO DE TABLA -----------------------------------------
			function success_tabla(result){
				$scope.data_table=result.respuesta.data;
			}
			$scope.get_tabla=function(){
				Inventario_Services.Modelos().Get().send({},success_tabla).$promise
			}
			$scope.get_tabla();

			$rootScope.$on("actualizar_tabla", function() {
        		$scope.get_tabla();
    		});
			//----------------------------------------------------- NUEVO -----------------------------------------

			$scope.nuevo_dialog=function(){
				$mdDialog.show({
            controller: DialogController_nuevo,
            templateUrl: 'views/Dash/Inventario/Modelos/new.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false
        	});
			}

			function DialogController_nuevo($scope,Inventario_Services,LxNotificationService) {

				$scope.guardar=function(){
					Inventario_Services.Modelos().Add().send($scope.data).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha guardado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}

			//-------------------------------------------------------- DELETE  --------------------------------------------
			$scope.dialog_eliminar=function(obj){
				$mdDialog.show({
            controller: DialogController_delete,
            templateUrl: 'views/Dash/Inventario/Modelos/delete.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_delete($scope,Inventario_Services,LxNotificationService,obj) {
				$scope.eliminar=function(){
					Inventario_Services.Modelos().Delete().send({id:obj.id}).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha eliminado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}
			//-------------------------------------------------------- UPDATE  --------------------------------------------
			$scope.dialog_update=function(obj){
				$mdDialog.show({
            controller: DialogController_update,
            templateUrl: 'views/Dash/Inventario/Modelos/update.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_update($scope,Inventario_Services,LxNotificationService,obj) {
				$scope.data=obj;
				$scope.actualizar=function(){
					Inventario_Services.Modelos().Update().send($scope.data).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha actualizado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}

	  	});

app.controller('ProductosCtrl', function ($scope,$rootScope, $location,$localStorage,$mdDialog,Inventario_Services) {
			$scope.selected=[];
			
			function selectCallback(_newValue, _oldValue) {
            console.log('Old value: ', _oldValue);
            console.log('New value: ', _newValue);
        	}
			// -------------------------------------------------------PRODUCTOS------------------------------------------------------------
			//------------------------------------------------- LLENADO DE TABLA -----------------------------------------
			function success_tabla(result){
				$scope.data_table=result.respuesta.data;
			}
			$scope.get_tabla=function(){
				Inventario_Services.Productos().Get().send({},success_tabla).$promise
			}
			$scope.get_tabla();

			$rootScope.$on("actualizar_tabla", function() {
        		$scope.get_tabla();
    		});
			//----------------------------------------------------- NUEVO -----------------------------------------

			$scope.nuevo_dialog=function(){
				$mdDialog.show({
            controller: DialogController_nuevo,
            templateUrl: 'views/Dash/Inventario/Productos/new.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false
        	});
			}

			function DialogController_nuevo($scope,Inventario_Services,LxNotificationService,Servicios_Generales,FileUploader) {

				// ------------------------------LLENADO SELECTS ------------------------------
				var cm = $scope;
				function succes_categorias(result){
			        cm.selectCallback = selectCallback;
			        cm.ListCategorias = result.respuesta.data;
			        cm.selectModelCiudad = {
			            selectedCategoria: undefined
			        };
				}
				Inventario_Services.Categorias().Get().send({},succes_categorias).$promise;

				function succes_Tipo_gastos(result){
			        cm.selectCallback = selectCallback;
			        cm.ListTipoGastos = result.respuesta.data;
			        cm.ModelTipoGastos = {
			            selectedTipoGastos: undefined
			        };
				}
				Inventario_Services.Tipo_Gastos().Get().send({},succes_Tipo_gastos).$promise;

				function succes_Modelos(result){
			        cm.selectCallback = selectCallback;
			        cm.LIstaModelos = result.respuesta.data;
			        cm.ModelModelos = {
			            selectedModelo: undefined
			        };
				}
				Inventario_Services.Modelos().Get().send({},succes_Modelos).$promise;


				function succes_Marcas(result){
			        cm.selectCallback = selectCallback;
			        cm.ListaMarcas = result.respuesta.data;
			        cm.ModelMarcas = {
			            selectedMarca: undefined
			        };
				}
				Inventario_Services.Marcas().Get().send({},succes_Marcas).$promise;
			        
			    // ------------------------------FIN LLENADO SELECTS ------------------------------

			    var uploader = $scope.uploader = new FileUploader({
			        url: Servicios_Generales.server()+'Add_Productos',
			        headers: {
			        Authorization: 'Bearer ' + $localStorage.token,
			        },
			        removeAfterUpload:true
			    });

			    // FILTERS

			    uploader.filters.push({
			        name: 'customFilter',
			        fn: function(item /*{File|FileLikeObject}*/, options) {
			            return this.queue.length < 10;
			        }
			    });
			    uploader.onAfterAddingFile = function(fileItem) {
			         fileItem.formData=$scope.data_producto;
			         console.log(fileItem);
			    };

				$scope.guardar=function(){
					$scope.uploader.uploadAll();
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}

			//-------------------------------------------------------- DELETE  --------------------------------------------
			$scope.dialog_eliminar=function(obj){
				$mdDialog.show({
            controller: DialogController_delete,
            templateUrl: 'views/Dash/Inventario/Productos/delete.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_delete($scope,Inventario_Services,LxNotificationService,obj) {
				$scope.eliminar=function(){
					Inventario_Services.Productos().Delete().send({id:obj.id}).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha eliminado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}
			//-------------------------------------------------------- UPDATE  --------------------------------------------
			$scope.dialog_update=function(obj){
				$mdDialog.show({
            controller: DialogController_update,
            templateUrl: 'views/Dash/Inventario/Productos/update.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_update($scope,Inventario_Services,LxNotificationService,obj) {
				$scope.data=obj;
				$scope.actualizar=function(){
					Inventario_Services.Productos().Update().send($scope.data).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha actualizado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}

	  	});

app.controller('ProveedoresCtrl', function ($scope,$rootScope, $location,$localStorage,$mdDialog,Inventario_Services) {
			$scope.selected=[];
			// -------------------------------------------------------PROVEEDORES------------------------------------------------------------
			//------------------------------------------------- LLENADO DE TABLA -----------------------------------------
			function success_tabla(result){
				$scope.data_table=result.respuesta.data;
			}
			$scope.get_tabla=function(){
				Inventario_Services.Proveedores().Get().send({},success_tabla).$promise
			}
			$scope.get_tabla();

			$rootScope.$on("actualizar_tabla", function() {
        		$scope.get_tabla();
    		});
			//----------------------------------------------------- NUEVO -----------------------------------------

			$scope.nuevo_dialog=function(){
				$mdDialog.show({
            controller: DialogController_nuevo,
            templateUrl: 'views/Dash/Inventario/Proveedores/new.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false
        	});
			}

			function DialogController_nuevo($scope,Inventario_Services,LxNotificationService) {

				//---------------------------------------- LLENADO SELECTS -----------------------------------
				//----------------------------------------- CATEGORIAS ----------------------------------------
				

				$scope.guardar=function(){

					console.log($scope.data_producto);
					// Inventario_Services.Proveedores().Add().send({proveedor:$scope.data,persona:$scope.data_persona}).$promise.then(function(data){
					// 	if (data.respuesta==true) {
					// 		$rootScope.$emit("actualizar_tabla", {});
					// 		$mdDialog.hide();
					// 		LxNotificationService.success('Se ha guardado correctamente');
					// 	}
					// })
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}

			//-------------------------------------------------------- DELETE  --------------------------------------------
			$scope.dialog_eliminar=function(obj){
				$mdDialog.show({
            controller: DialogController_delete,
            templateUrl: 'views/Dash/Inventario/Proveedores/delete.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_delete($scope,Inventario_Services,LxNotificationService,obj) {
				$scope.eliminar=function(){
					Inventario_Services.Proveedores().Delete().send({id:obj.id}).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha eliminado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}
			//-------------------------------------------------------- UPDATE  --------------------------------------------
			$scope.dialog_update=function(obj){
				$mdDialog.show({
            controller: DialogController_update,
            templateUrl: 'views/Dash/Inventario/Proveedores/update.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_update($scope,Inventario_Services,LxNotificationService,obj) {
				$scope.data_persona=obj.datos_propietario;
				$scope.data=obj;
				$scope.data.correo=obj.datos_contacto.correo;
				$scope.data.telefono=obj.datos_contacto.telefono;
				$scope.data.celular=obj.datos_contacto.celular;
				$scope.actualizar=function(){
					Inventario_Services.Proveedores().Update().send({proveedor:$scope.data,persona:$scope.data_persona}).$promise.then(function(data){
						if (data.respuesta==true) {
							$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha actualizado correctamente');
						}
					})
				}

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}

	  	});