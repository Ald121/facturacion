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

			var bookmark;
			$scope.query = {
			        filter: '',
			        num_registros: 5,
			        pagina_actual: 1,
			        limit: '5',
			        page_num: 1
			    };

			function success_tabla(result){
				$scope.data_table=result.respuesta.data;
			}
			$scope.get_tabla=function(){
				Inventario_Services.Categorias().Get().send($scope.query,success_tabla).$promise
			}

			$scope.$watch('query.filter', function(newValue, oldValue) {
		        if (!oldValue) {
		            bookmark = $scope.query.page;
		        }

		        if (newValue !== oldValue) {
		            $scope.query.page = 1;
		        }

		        if (!newValue) {
		            $scope.query.page = bookmark;
		        }
		        $scope.get_tabla();
		    });

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

			var bookmark;
			$scope.query = {
			        filter: '',
			        num_registros: 5,
			        pagina_actual: 1,
			        limit: '5',
			        page_num: 1
			    };

			function success_tabla(result){
				$scope.data_table=result.respuesta.data;
			}
			$scope.get_tabla=function(){
				Inventario_Services.Marcas().Get().send($scope.query,success_tabla).$promise
			}

			$scope.$watch('query.filter', function(newValue, oldValue) {
		        if (!oldValue) {
		            bookmark = $scope.query.page;
		        }

		        if (newValue !== oldValue) {
		            $scope.query.page = 1;
		        }

		        if (!newValue) {
		            $scope.query.page = bookmark;
		        }
		        $scope.get_tabla();
		    });

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

			var bookmark;
			$scope.query = {
			        filter: '',
			        num_registros: 5,
			        pagina_actual: 1,
			        limit: '5',
			        page_num: 1
			    };

			function success_tabla(result){
				$scope.data_table=result.respuesta.data;
			}
			$scope.get_tabla=function(){
				Inventario_Services.Modelos().Get().send($scope.query,success_tabla).$promise
			}

			$scope.$watch('query.filter', function(newValue, oldValue) {
		        if (!oldValue) {
		            bookmark = $scope.query.page;
		        }

		        if (newValue !== oldValue) {
		            $scope.query.page = 1;
		        }

		        if (!newValue) {
		            $scope.query.page = bookmark;
		        }
		        $scope.get_tabla();
		    });

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

			var bookmark;
			$scope.query = {
			        filter: '',
			        num_registros: 5,
			        pagina_actual: 1,
			        limit: '5',
			        page_num: 1
			    };

			function success_tabla(result){
				$scope.data_table=result.respuesta.data;
			}
			$scope.get_tabla=function(){
				Inventario_Services.Productos().Get().send($scope.query,success_tabla).$promise
			}

			$scope.$watch('query.filter', function(newValue, oldValue) {
		        if (!oldValue) {
		            bookmark = $scope.query.page;
		        }

		        if (newValue !== oldValue) {
		            $scope.query.page = 1;
		        }

		        if (!newValue) {
		            $scope.query.page = bookmark;
		        }
		        $scope.get_tabla();
		    });

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

			function DialogController_nuevo($localStorage,$scope,Inventario_Services,LxNotificationService,Servicios_Generales,FileUploader) {

				// ------------------------------LLENADO SELECTS ------------------------------
				function succes_impuestos(result){
					cm.selectCallback = selectCallback;
			        cm.ListaImpuestos = result.respuesta.data;
			        cm.ModelImpuestos = {
			            selectedPerson: undefined,
			            selectedPeople: [],
			            selectedPeopleSections: [],
			            selectedVegetables: []
			        };
				}

				Inventario_Services.Impuestos().Get().send({},succes_impuestos).$promise;
				var cm = $scope;
				function succes_categorias(result){
			        cm.selectCallback = selectCallback;
			        cm.ListCategorias = result.respuesta.data;
			        cm.ModelCategorias = {
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

				function succes_Unidades(result){
			        cm.selectCallback = selectCallback;
			        cm.ListUnidades = result.respuesta.data;
			        cm.ModelUnidades = {
			            selectedUnidad: undefined
			        };
			        console.log(cm.ListUnidades);
				}
				Inventario_Services.Unidades().Get().send({},succes_Unidades).$promise;
			        
			    // ------------------------------FIN LLENADO SELECTS ------------------------------
			    // ------------------------------ PROVEEDOR -------------------------------------

			    $scope.buscar_proveedor=function(){
			    	if ($scope.ruc_proveedor!=undefined) {
				    	if ($scope.ruc_proveedor.length==10||$scope.ruc_proveedor.length==13) {
				    		Inventario_Services.Proveedores().Get_Proveedor_By_Ruc().send({ruc: $scope.ruc_proveedor}).$promise.then(function(data){
				    			if (data.respuesta==true) {
				    				$scope.data_proveedor=data.proveedor;
				    				$scope.no_proveedor=false;
				    			}else{
				    				$scope.no_proveedor=true;
				    			}		                     
			                });
				    	}else {
				    		$scope.data_proveedor="";
				    		$scope.no_proveedor=true;
				    	}
			    	}
			    }

			    //-------------------------------- SUBIR IMAGENES -------------------------------
			    var uploader = $scope.uploader = new FileUploader({
			        url: Servicios_Generales.server()+'Add_Productos',
			        headers: {
			        Authorization: 'Bearer ' + $localStorage.token
			        },
			        removeAfterUpload:true,
			        queueLimit: 1
			    });

			    // FILTERS
			    uploader.filters.push({
			        name: 'customFilter',
			        fn: function(item /*{File|FileLikeObject}*/, options) {
			            return this.queue.length < 10;
			        }
			    });

			    uploader.onAfterAddingFile = function(fileItem) {

			    var modelo =(cm.ModelModelos.selectedModelo!=undefined)? cm.ModelModelos.selectedModelo.id:0;

			    $scope.data_producto.impuestos=JSON.stringify($scope.ModelImpuestos.selectedPeople);
			    $scope.data_producto.categoria=cm.ModelCategorias.selectedCategoria.id;
			    $scope.data_producto.tipo_gasto=cm.ModelTipoGastos.selectedTipoGastos.id;
			    $scope.data_producto.modelo=modelo;
			    $scope.data_producto.marca=cm.ModelMarcas.selectedMarca.id;
			    $scope.data_producto.token=$localStorage.token;
			    $scope.data_producto.proveedor=$scope.data_proveedor.ruc;
	            fileItem.formData.push($scope.data_producto);
			    };

			     uploader.onSuccessItem = function(response, status) {
		            if (status.respuesta==true) {
		            	$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha Creado correctamente');
		            }else{
		            	LxNotificationService.success('Ha Ocurrido un error Intentalo Nuevamente');
		            }
		        };

				$scope.guardar=function(){

				var modelo =(cm.ModelModelos.selectedModelo!=undefined)? cm.ModelModelos.selectedModelo.id:0;

			    $scope.data_producto.impuestos=JSON.stringify($scope.ModelImpuestos.selectedPeople);
			    $scope.data_producto.categoria=cm.ModelCategorias.selectedCategoria.id;
			    $scope.data_producto.tipo_gasto=cm.ModelTipoGastos.selectedTipoGastos.id;
			    $scope.data_producto.unidad=cm.ModelUnidades.selectedUnidad.id;
			    $scope.data_producto.modelo=modelo;
			    $scope.data_producto.marca=cm.ModelMarcas.selectedMarca.id;
			    $scope.data_producto.token=$localStorage.token;
			    $scope.data_producto.proveedor=$scope.data_proveedor.ruc;


					for (var i = 0; i < $scope.uploader.queue.length; i++) {
						$scope.uploader.queue[i].formData[0]=$scope.data_producto
						console.log($scope.uploader.queue[i]);
					}
					$scope.uploader.uploadAll();
				}


		        $scope.isImage=function(item) {
		            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
		            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
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

			var bookmark;
			$scope.query = {
			        filter: '',
			        num_registros: 5,
			        pagina_actual: 1,
			        limit: '5',
			        page_num: 1
			    };

			function success_tabla(result){
				$scope.data_table=result.respuesta.data;
			}
			$scope.get_tabla=function(){
				Inventario_Services.Proveedores().Get().send($scope.query,success_tabla).$promise
			}

			$scope.$watch('query.filter', function(newValue, oldValue) {
		        if (!oldValue) {
		            bookmark = $scope.query.page;
		        }

		        if (newValue !== oldValue) {
		            $scope.query.page = 1;
		        }

		        if (!newValue) {
		            $scope.query.page = bookmark;
		        }
		        $scope.get_tabla();
		    });

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

				$scope.guardar=function(){
					Inventario_Services.Proveedores().Add().send({proveedor:$scope.data,persona:$scope.data_persona}).$promise.then(function(data){
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

app.controller('IngresoMercaderiaCtrl', function ($scope,$rootScope, $location,$localStorage,$mdDialog,Inventario_Services) {
			$scope.selected=[];
			function selectCallback(_newValue, _oldValue) {
            console.log('Old value: ', _oldValue);
            console.log('New value: ', _newValue);
        	}
			// -------------------------------------------------------PROVEEDORES------------------------------------------------------------
			//------------------------------------------------- LLENADO DE TABLA -----------------------------------------

			var bookmark;
			$scope.query = {
			        filter: '',
			        num_registros: 5,
			        pagina_actual: 1,
			        limit: '5',
			        page_num: 1
			    };

			function success_tabla(result){
				$scope.data_table=result.respuesta.data;
			}
			$scope.get_tabla=function(){
				Inventario_Services.Movimientos().Get().send($scope.query,success_tabla).$promise
			}

			$scope.$watch('query.filter', function(newValue, oldValue) {
		        if (!oldValue) {
		            bookmark = $scope.query.page;
		        }

		        if (newValue !== oldValue) {
		            $scope.query.page = 1;
		        }

		        if (!newValue) {
		            $scope.query.page = bookmark;
		        }
		        $scope.get_tabla();
		    });

			$rootScope.$on("actualizar_tabla", function() {
        		$scope.get_tabla();
    		});
			//----------------------------------------------------- NUEVO -----------------------------------------

			$scope.nuevo_dialog=function(){
				$mdDialog.show({
			multiple: true,
            controller: DialogController_nuevo,
            templateUrl: 'views/Dash/Inventario/Ingreso-Mercaderia/new.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false
        	});
			}

			function DialogController_nuevo($scope,Inventario_Services,LxNotificationService) {
				
				var cm=$scope;

				function succes_tipo_documentos(result){
					cm.selectCallback = selectCallback;
			        cm.ListaTipo_Documentos = result.respuesta.data;
			        cm.ModelTipo_Documentos = {
			            selectedTipo_Doc: undefined
			        };
				}

				Inventario_Services.Tipo_Documentos().Get().send({},succes_tipo_documentos).$promise;

					var bookmark,bookmark2;
				$scope.query = {
				        filter: '',
				        num_registros: 5,
				        pagina_actual: 1,
				        limit: '5',
				        page_num: 1,
				        proveedor:''
				    };

				$scope.$watch('query.filter', function(newValue, oldValue) {
			        if (!oldValue) {
			            bookmark = $scope.query.page;
			        }

			        if (newValue !== oldValue) {
			            $scope.query.page = 1;
			        }

			        if (!newValue) {
			            $scope.query.page = bookmark;
			        }
			        $scope.buscar_proveedor();
			    });

			    $scope.$watch('query.proveedor', function(newValue, oldValue) {
			        if (oldValue.length==10||newValue.length==13) {
			        	$scope.buscar_proveedor();
			        }

			        if (newValue.length==10||oldValue.length==13) {
			        	$scope.buscar_proveedor();
			        }
			        
			    });

				function success_productos_proveedor(result){
					if (result.respuesta!=false) {
						$scope.data_table=result.respuesta.data;
						$scope.data=result.proveedor;
					}
				}

				$scope.buscar_proveedor=function(){
						Inventario_Services.Productos().Get_Productos_By_Proveedor().send($scope.query,success_productos_proveedor).$promise;
				}

					//----------------------------------------------------- DETALLES DEL PROVEEDOR -----------------------------------------
	    		$scope.detalles_fac=[];
	    		$scope.add_prod_fac=function(prod){

	    			if ($scope.detalles_fac.indexOf(prod)==-1) {
	    				prod.cantidad_fac=1;
	    				prod.total_fac=parseFloat(prod.precio.replace('$','')).toFixed($scope.decimales);
	    				$scope.detalles_fac.push(prod);
	    			}else{
	    				var index=$scope.detalles_fac.indexOf(prod);
	    				// if ($scope.detalles_fac[index].cantidad_fac<$scope.detalles_fac[index].cantidad) {
	    					$scope.detalles_fac[index].cantidad_fac=$scope.detalles_fac[index].cantidad_fac+1;
	    					$scope.detalles_fac[index].total_fac=parseFloat(parseFloat($scope.detalles_fac[index].precio.replace('$','')).toFixed($scope.decimales)*$scope.detalles_fac[index].cantidad_fac).toFixed(2);
	    				// }
	    				
	    			}
	    		}

	    		$scope.remove_prod_fac=function(prod){
    				var index=$scope.detalles_fac.indexOf(prod);
    				if ($scope.detalles_fac[index].cantidad_fac>1) {
    					$scope.detalles_fac[index].cantidad_fac=$scope.detalles_fac[index].cantidad_fac-1;
    					$scope.detalles_fac[index].total_fac=parseFloat(parseFloat($scope.detalles_fac[index].precio.replace('$','')).toFixed($scope.decimales)*$scope.detalles_fac[index].cantidad_fac).toFixed(2);
    				}

    			// $scope.calc_totales($scope.detalles_fac);
	    		}

	    		$scope.delete_prod_fac=function(prod){
					var index=$scope.detalles_fac.indexOf(prod);
					$scope.detalles_fac.splice(index,1);
	    			// $scope.calc_totales($scope.detalles_fac);
	    		}

	    		$scope.add_prod_fac_from_input=function(prod){
	    			if (prod.cantidad_fac=="") {
	    				prod.cantidad_fac=1;
	    			}
	    			// if (prod.cantidad_fac>prod.cantidad) {
	    			// 	prod.cantidad_fac=prod.cantidad;
	    			// 	prod.total_fac=parseFloat(parseFloat(prod.precio.replace('$','')).toFixed($scope.decimales)*prod.cantidad_fac).toFixed(2);
	    			// }else{
	    			// 	prod.total_fac=parseFloat(parseFloat(prod.precio.replace('$','')).toFixed($scope.decimales)*prod.cantidad_fac).toFixed(2);
	    			// }
	    			// $scope.calc_totales($scope.detalles_fac);
	    		}
	    		//------------------------------------------------------------ AÑADIR PRODUCTOS--------------------------------------

	    		$scope.nuevo_prod_dialog=function(){
				$mdDialog.show({
				multiple: true,
	            controller: DialogProdController_nuevo,
	            templateUrl: 'views/Dash/Inventario/Productos/new.html',
	            parent: angular.element(document.body),
	            targetEvent: event,
	            ariaLabel: 'Respuesta Registro',
	            clickOutsideToClose: false
	        	});
				}

				function DialogProdController_nuevo($localStorage,$scope,Inventario_Services,LxNotificationService,Servicios_Generales,FileUploader) {

				// ------------------------------LLENADO SELECTS ------------------------------
				function succes_impuestos(result){
					cm.selectCallback = selectCallback;
			        cm.ListaImpuestos = result.respuesta.data;
			        cm.ModelImpuestos = {
			            selectedPerson: undefined,
			            selectedPeople: [],
			            selectedPeopleSections: [],
			            selectedVegetables: []
			        };
				}

				Inventario_Services.Impuestos().Get().send({},succes_impuestos).$promise;
				var cm = $scope;
				function succes_categorias(result){
			        cm.selectCallback = selectCallback;
			        cm.ListCategorias = result.respuesta.data;
			        cm.ModelCategorias = {
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

				function succes_Unidades(result){
			        cm.selectCallback = selectCallback;
			        cm.ListUnidades = result.respuesta.data;
			        cm.ModelUnidades = {
			            selectedUnidad: undefined
			        };
			        console.log(cm.ListUnidades);
				}
				Inventario_Services.Unidades().Get().send({},succes_Unidades).$promise;
			        
			    // ------------------------------FIN LLENADO SELECTS ------------------------------
			    // ------------------------------ PROVEEDOR -------------------------------------

			    $scope.buscar_proveedor=function(){
			    	if ($scope.ruc_proveedor!=undefined) {
				    	if ($scope.ruc_proveedor.length==10||$scope.ruc_proveedor.length==13) {
				    		Inventario_Services.Proveedores().Get_Proveedor_By_Ruc().send({ruc: $scope.ruc_proveedor}).$promise.then(function(data){
				    			if (data.respuesta==true) {
				    				$scope.data_proveedor=data.proveedor;
				    				$scope.no_proveedor=false;
				    			}else{
				    				$scope.no_proveedor=true;
				    			}		                     
			                });
				    	}else {
				    		$scope.data_proveedor="";
				    		$scope.no_proveedor=true;
				    	}
			    	}
			    }

			    //-------------------------------- SUBIR IMAGENES -------------------------------
			    var uploader = $scope.uploader = new FileUploader({
			        url: Servicios_Generales.server()+'Add_Productos',
			        headers: {
			        Authorization: 'Bearer ' + $localStorage.token
			        },
			        removeAfterUpload:true,
			        queueLimit: 1
			    });

			    // FILTERS
			    uploader.filters.push({
			        name: 'customFilter',
			        fn: function(item /*{File|FileLikeObject}*/, options) {
			            return this.queue.length < 10;
			        }
			    });

			    uploader.onAfterAddingFile = function(fileItem) {

			    var modelo =(cm.ModelModelos.selectedModelo!=undefined)? cm.ModelModelos.selectedModelo.id:0;

			    $scope.data_producto.impuestos=JSON.stringify($scope.ModelImpuestos.selectedPeople);
			    $scope.data_producto.categoria=cm.ModelCategorias.selectedCategoria.id;
			    $scope.data_producto.tipo_gasto=cm.ModelTipoGastos.selectedTipoGastos.id;
			    $scope.data_producto.modelo=modelo;
			    $scope.data_producto.marca=cm.ModelMarcas.selectedMarca.id;
			    $scope.data_producto.token=$localStorage.token;
			    $scope.data_producto.proveedor=$scope.data_proveedor.ruc;
	            fileItem.formData.push($scope.data_producto);
			    };

			     uploader.onSuccessItem = function(response, status) {
		            if (status.respuesta==true) {
		            	$rootScope.$emit("actualizar_tabla", {});
							$mdDialog.hide();
							LxNotificationService.success('Se ha Creado correctamente');
		            }else{
		            	LxNotificationService.success('Ha Ocurrido un error Intentalo Nuevamente');
		            }
		        };

				$scope.guardar=function(){

				var modelo =(cm.ModelModelos.selectedModelo!=undefined)? cm.ModelModelos.selectedModelo.id:0;

			    $scope.data_producto.impuestos=JSON.stringify($scope.ModelImpuestos.selectedPeople);
			    $scope.data_producto.categoria=cm.ModelCategorias.selectedCategoria.id;
			    $scope.data_producto.tipo_gasto=cm.ModelTipoGastos.selectedTipoGastos.id;
			    $scope.data_producto.unidad=cm.ModelUnidades.selectedUnidad.id;
			    $scope.data_producto.modelo=modelo;
			    $scope.data_producto.marca=cm.ModelMarcas.selectedMarca.id;
			    $scope.data_producto.token=$localStorage.token;
			    $scope.data_producto.proveedor=$scope.data_proveedor.ruc;


					for (var i = 0; i < $scope.uploader.queue.length; i++) {
						$scope.uploader.queue[i].formData[0]=$scope.data_producto
						console.log($scope.uploader.queue[i]);
					}
					$scope.uploader.uploadAll();
				}


		        $scope.isImage=function(item) {
		            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
		            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
		        }

				$scope.cancel = function() {
		            $mdDialog.cancel();
		        };
			}
			//-------------------------------------------------------------- AÑADIR PROVEEDOR 
			$scope.nuevo_prov_dialog=function(event){
				$mdDialog.show({
				multiple: true,
	            controller: DialogProvController_nuevo,
	            templateUrl: 'views/Dash/Inventario/Proveedores/new.html',
	            parent: angular.element(document.body),
	            targetEvent: event,
	            ariaLabel: 'Respuesta Registro',
	            clickOutsideToClose: false
	        	});
				}

				function DialogProvController_nuevo($scope,Inventario_Services,LxNotificationService) {

				$scope.guardar=function(){
					Inventario_Services.Proveedores().Add().send({proveedor:$scope.data,persona:$scope.data_persona}).$promise.then(function(data){
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

			//Guardar Ingreso
				$scope.guardar_ingreso=function(){
					$scope.data.tipo_movimiento='IN';
					$scope.data.tipo_documento=cm.ModelTipo_Documentos.selectedTipo_Doc.id;
					$scope.data.ingreso_total=$scope.ingreso_total;
					Inventario_Services.Movimientos().Add().send({proveedor:$scope.data,detalles:$scope.detalles_fac}).$promise.then(function(data){
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
					Inventario_Services.Movimientos().Delete().send({id:obj.id}).$promise.then(function(data){
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
					Inventario_Services.Movimientos().Update().send({proveedor:$scope.data,persona:$scope.data_persona}).$promise.then(function(data){
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