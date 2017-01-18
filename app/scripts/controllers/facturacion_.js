var app =angular.module('facturacionApp');
  app.controller('ClientesCtrl', function ($scope,$rootScope, $location,$localStorage,$mdDialog,Facturacion_Services,Servicios_Generales) {
			$scope.selected=[];
			// -------------------------------------------------------CLIENTES------------------------------------------------------------
			//------------------------------------------------- LLENADO DE TABLA -----------------------------------------
			function selectCallback(_newValue, _oldValue) {
            console.log('Old value: ', _oldValue);
            console.log('New value: ', _newValue);
        	}
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
				Facturacion_Services.Clientes().Get().send($scope.query,success_tabla).$promise
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
            templateUrl: 'views/Dash/Facturacion/Clientes/new.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false
        	});
			}

			function DialogController_nuevo($scope,Facturacion_Services,LxNotificationService,Servicios_Generales) {

				var cm = $scope;
				function success_localizacion(result){
					cm.selectCallback = selectCallback;
			        cm.ListLocalizacion = result.respuesta;
			        cm.ModelLocalizacion = {
			            selectedLocalizacion: undefined
			        };
				}

				$scope.get_localizacion=function(){
					Servicios_Generales.Localizacion().get({},success_localizacion).$promise;
				}
					$scope.get_localizacion();
				
				$scope.guardar=function(){
					$scope.data.id_localizacion=$scope.ModelLocalizacion.selectedLocalizacion.id;
					Facturacion_Services.Clientes().Add().send($scope.data).$promise.then(function(data){
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
            templateUrl: 'views/Dash/Facturacion/Clientes/delete.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_delete($scope,Facturacion_Services,LxNotificationService,obj) {
				$scope.eliminar=function(){
					Facturacion_Services.Clientes().Delete().send({id:obj.id}).$promise.then(function(data){
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
            templateUrl: 'views/Dash/Facturacion/Clientes/update.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_update($scope,Facturacion_Services,LxNotificationService,obj) {
				var res = obj.razon_social.split(" ");
				$scope.data=obj;
				$scope.data.nombres=res[0]+' '+res[1];
				$scope.data.apellidos=res[2]+' '+res[3];

				var cm = $scope;
				function success_localizacion(result){

					cm.selectCallback = selectCallback;
			        cm.ListLocalizacion = result.respuesta;
			        cm.ModelLocalizacion = {
			            selectedLocalizacion: undefined
			        };

					for (var i = 0; i < result.respuesta.length; i++) {
						if (result.respuesta[i].id==obj.id_localizacion) {
							cm.ModelLocalizacion.selectedLocalizacion=result.respuesta[i];
							break;
						}
					}

					
				}

				$scope.get_localizacion=function(){
					Servicios_Generales.Localizacion().get({},success_localizacion).$promise;
				}
					$scope.get_localizacion();

				$scope.actualizar=function(){
					Facturacion_Services.Clientes().Update().send($scope.data).$promise.then(function(data){
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

app.controller('VenderCtrl', function ($scope,$rootScope, $location,$localStorage,$mdDialog,Facturacion_Services,Servicios_Generales,Inventario_Services,Configuracion_Services) {
			// -------------------------------------------------------VENDER------------------------------------------------------------//
			
			$scope.selected=[];
			$scope.decimales=2;
			

			function success_impuestos(result){	
				$scope.totales =[];

				for (var i = 0; i < result.respuesta.data.length; i++) {
					$scope.totales.push({'label':'SUBTOTAL '+result.respuesta.data[i].porcentaje,codigo:result.respuesta.data[i].id,valor:0});
				}

				for (var i = 0; i < result.respuesta.data.length; i++) {
					$scope.totales.push({'label':'IVA '+result.respuesta.data[i].porcentaje+'%',codigo:result.respuesta.data[i].id,valor:0});
				}
				
				$scope.totales.push({'label':'TOTAL ',codigo:'total',valor:0});

				$localStorage.totales =result.respuesta.data;
			}

			$scope.get_impuestos=function(){
				Configuracion_Services.Impuestos().Get().send({},success_impuestos).$promise;
			}
			
			$scope.get_impuestos();

			//---------------------------------------------------------- LLENAR DATOS DEL CLIENTE ---------------------------------------//
			var cm = $scope;
			function success_localizacion(result){
					cm.selectCallback = selectCallback;
			        cm.ListLocalizacion = result.respuesta;
			        cm.ModelLocalizacion = {
			            selectedLocalizacion: undefined
			        };
				}

				$scope.get_localizacion=function(){
					Servicios_Generales.Localizacion().get({},success_localizacion).$promise;
				}
					$scope.get_localizacion();

				function success_buscar_cliente(result){

					$scope.data=result.respuesta;
					var res = result.respuesta.razon_social.split(" ");
					if (res.length==4) {
						$scope.data.nombres=res[0]+' '+res[1];
						$scope.data.apellidos=res[2]+' '+res[3];
					}else{
						$scope.data.nombres=res[0];
						$scope.data.apellidos=res[1];
					}

					for (var i = 0; i < cm.ListLocalizacion.length; i++) {
						if (cm.ListLocalizacion[i].id==result.respuesta.id_localizacion) {
							cm.ModelLocalizacion.selectedLocalizacion=cm.ListLocalizacion[i];
							break;
						}
					}

					
				}

			$scope.buscar_cliente=function(){
				if ($scope.data&&$scope.data.ruc_ci) {
					if ($scope.data.ruc_ci.length==10||$scope.data.ruc_ci.length==13) {
							Facturacion_Services.Clientes().Get_By_Ruc_Ci().send({ruc_ci:$scope.data.ruc_ci},success_buscar_cliente).$promise;
						}
				}else{
					$scope.data={};
					cm.ModelLocalizacion.selectedLocalizacion=undefined;
				}
			}


			//------------------------------------------------- LLENADO DE TABLA PRODUCTOS-----------------------------------------
			function selectCallback(_newValue, _oldValue) {
            console.log('Old value: ', _oldValue);
            console.log('New value: ', _newValue);
        	}
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
			//----------------------------------------------------- DETALLES DE FACTURA -----------------------------------------
    		$scope.detalles_fac=[];

    		$scope.add_prod_fac=function(prod){

    			if ($scope.detalles_fac.indexOf(prod)==-1) {
    				prod.cantidad_fac=1;
    				prod.total_fac=parseFloat(prod.precio.replace('$','')).toFixed($scope.decimales);
    				$scope.detalles_fac.push(prod);
    			}else{
    				var index=$scope.detalles_fac.indexOf(prod);
    				if ($scope.detalles_fac[index].cantidad_fac<$scope.detalles_fac[index].cantidad) {
    					$scope.detalles_fac[index].cantidad_fac=$scope.detalles_fac[index].cantidad_fac+1;
    					$scope.detalles_fac[index].total_fac=parseFloat(parseFloat($scope.detalles_fac[index].precio.replace('$','')).toFixed($scope.decimales)*$scope.detalles_fac[index].cantidad_fac).toFixed(2);
    				}
    				
    			}

    			$scope.calc_totales($scope.detalles_fac);
    		}

    		$scope.calc_totales=function(detalles_fac){
				$scope.subtotal_12=0.00;
				$scope.subtotal_14=0.00;
				$scope.subtotal_0=0.00;
				$scope.subtotal_No_Objeto=0.00;
				$scope.subtotal_Excento=0.00;
				$scope.Total_Sin_Impuesto=0.00;
				$scope.Total_Con_Impuesto=0.00;
    			for (var i = 0; i < detalles_fac.length; i++) {
    				switch(detalles_fac[i].impuesto) {
    					case 0:
    						$scope.subtotal_0=parseFloat(parseFloat($scope.subtotal_0)+parseFloat(detalles_fac[i].total_fac)).toFixed($scope.decimales);
    						break;
    					case 2:
    					$scope.subtotal_12=parseFloat(parseFloat($scope.subtotal_12)+parseFloat(detalles_fac[i].total_fac)).toFixed($scope.decimales);
    						break;
    					case 3:
    					$scope.subtotal_14=parseFloat(parseFloat($scope.subtotal_14)+parseFloat(detalles_fac[i].total_fac)).toFixed($scope.decimales);
    						break;
    						case 6:
    					$scope.subtotal_No_Objeto=parseFloat(parseFloat($scope.subtotal_No_Objeto)+parseFloat(detalles_fac[i].total_fac)).toFixed($scope.decimales);
    						break;
    						case 7:
    					$scope.subtotal_Excento=parseFloat(parseFloat($scope.subtotal_Excento)+parseFloat(detalles_fac[i].total_fac)).toFixed($scope.decimales);
    						break;
    				}

    				$scope.Total_Sin_Impuesto=parseFloat(parseFloat($scope.Total_Sin_Impuesto)+parseFloat(detalles_fac[i].total_fac)).toFixed($scope.decimales);
    			}

    			console.log();

    			 // $scope.totales[0].valor=$scope.subtotal;
    			 // $scope.totales[0].valor=$scope.subtotal;
    			 // $scope.totales[3].valor=($scope.subtotal*12)/100;
    		}

			//----------------------------------------------------- NUEVO CLIENTE-----------------------------------------

			$scope.nuevo_dialog=function(){
				$mdDialog.show({
            controller: DialogController_nuevo,
            templateUrl: 'views/Dash/Facturacion/Clientes/new.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false
        	});
			}

			function DialogController_nuevo($scope,Facturacion_Services,LxNotificationService,Servicios_Generales) {

				var cm = $scope;
				function success_localizacion(result){
					cm.selectCallback = selectCallback;
			        cm.ListLocalizacion = result.respuesta;
			        cm.ModelLocalizacion = {
			            selectedLocalizacion: undefined
			        };
				}

				$scope.get_localizacion=function(){
					Servicios_Generales.Localizacion().get({},success_localizacion).$promise;
				}
					$scope.get_localizacion();
				
				$scope.guardar=function(){
					$scope.data.id_localizacion=$scope.ModelLocalizacion.selectedLocalizacion.id;
					Facturacion_Services.Clientes().Add().send($scope.data).$promise.then(function(data){
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
            templateUrl: 'views/Dash/Facturacion/Clientes/delete.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_delete($scope,Facturacion_Services,LxNotificationService,obj) {
				$scope.eliminar=function(){
					Facturacion_Services.Clientes().Delete().send({id:obj.id}).$promise.then(function(data){
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
            templateUrl: 'views/Dash/Facturacion/Clientes/update.html',
            parent: angular.element(document.body),
            targetEvent: event,
            ariaLabel: 'Respuesta Registro',
            clickOutsideToClose: false,
            locals:{obj:obj}
        	});
			}

			function DialogController_update($scope,Facturacion_Services,LxNotificationService,obj) {
				var res = obj.razon_social.split(" ");
				$scope.data=obj;
				$scope.data.nombres=res[0]+' '+res[1];
				$scope.data.apellidos=res[2]+' '+res[3];

				var cm = $scope;
				function success_localizacion(result){

					cm.selectCallback = selectCallback;
			        cm.ListLocalizacion = result.respuesta;
			        cm.ModelLocalizacion = {
			            selectedLocalizacion: undefined
			        };

					for (var i = 0; i < result.respuesta.length; i++) {
						if (result.respuesta[i].id==obj.id_localizacion) {
							cm.ModelLocalizacion.selectedLocalizacion=result.respuesta[i];
							break;
						}
					}

					
				}

				$scope.get_localizacion=function(){
					Servicios_Generales.Localizacion().get({},success_localizacion).$promise;
				}
					$scope.get_localizacion();

				$scope.actualizar=function(){
					Facturacion_Services.Clientes().Update().send($scope.data).$promise.then(function(data){
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
