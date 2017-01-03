'use strict';

/**
 * @ngdoc function
 * @name facturacionApp.controller:DashCtrl
 * @description
 * # DashCtrl
 * Controller of the facturacionApp
 */
angular.module('facturacionApp')
  app.controller('DashCtrl', function ($scope, $location,$localStorage) {
  	$scope.user=$localStorage.datosUser;
			$scope.menu_inicio=[
			{'label':'INVENTARIO','icon':'/images/modulos/inventario.png','path':'Dash/Inicio','children':
				[
					// {'label':'Tipos de Consumo','path':'Dash/Inventario/Tipo-Consumo'},
					{'label':'Categorias','path':'Dash/Inventario/Categorias','icon':'mdi-chevron-double-right','color':'tc-indigo-900'},
					{'label':'Marcas','path':'Dash/Inventario/Marcas','icon':'mdi-chevron-double-right','color':'tc-indigo-900'},
					{'label':'Modelos','path':'Dash/Inventario/Modelos','icon':'mdi-chevron-double-right','color':'tc-indigo-900'},
					{'label':'Proveedores','path':'Dash/Inventario/Proveedores','icon':'mdi-chevron-double-right','color':'tc-indigo-900'},
					{'label':'Productos','path':'Dash/Inventario/Productos','icon':'mdi-chevron-double-right','color':'tc-indigo-900'}
				]
			},
			{'label':'FACTURACIÓN','icon':'/images/modulos/facturacion.png','path':'Dash/Inicio','children':
				[
					{'label':'Vender','path':'Dash/Facturacion/Vender','icon':'mdi-cart','color':'tc-orange-500'},
					{'label':'Clientes','path':'Dash/Facturacion/Clientes','icon':'mdi-chevron-double-right','color':'tc-indigo-900'},
					{'label':'Mis Facturas','path':'Dash/Facturacion/MisFacturas','icon':'mdi-file','color':'tc-indigo-900'}
				]
			},
			{'label':'PROFORMAS','icon':'/images/modulos/proformas.png','path':'Dash/Proformas','children':[]},
			{'label':'CONFIGURACIÓN','icon':'/images/modulos/config.png','path':'Dash/Configuracion','children':
			[
				// {'label':'Usuarios','path':'Dash/Inventario/Usuarios'},
				// {'label':'Tipos de Usuario','path':'Dash/Inventario/Tipos-Usuario'}
			]}
								];
		// NAV BAR
		$scope.nav_bar=[
			{'label':'INICIO',icon:'mdi-home','path':'Dash','children':[]},
			{'label':'INVENTARIO','icon':'mdi-archive','path':'Dash/Inicio','children':
				[
					// {'label':'Tipos de Consumo','path':'Dash/Inventario/Tipo-Consumo'},
					{'label':'Categorias','path':'Dash/Inventario/Categorias','icon':'mdi-format-list-bulleted-type','color':'tc-indigo-900'},
					{'label':'Marcas','path':'Dash/Inventario/Marcas','icon':'mdi-animation','color':'tc-indigo-900'},
					{'label':'Modelos','path':'Dash/Inventario/Modelos','icon':'mdi-bandcamp','color':'tc-indigo-900'},
					{'label':'Proveedores','path':'Dash/Inventario/Proveedores','icon':'mdi-account-multiple','color':'tc-indigo-900'},
					{'label':'Productos','path':'Dash/Inventario/Productos','icon':'mdi-dropbox','color':'tc-indigo-900'}
				]
			},
			{'label':'FACTURACIÓN',icon:'mdi-home','path':'Dash/Inicio','children':
			[
					{'label':'Vender','path':'Dash/Facturacion/Vender','icon':'mdi-cart','color':'tc-orange-500'},
					{'label':'Clientes','path':'Dash/Facturacion/Clientes','icon':'mdi-chevron-double-right','color':'tc-indigo-900'},
					{'label':'Mis Facturas','path':'Dash/Facturacion/MisFacturas','icon':'mdi-file','color':'tc-indigo-900'}
			]
			},
			{'label':'CONFIGURACIÓN',icon:'mdi-settings','path':'Dash/Configuracion','children':
			[
				// {'label':'Usuarios','path':'Dash/Inventario/Usuarios'},
				// {'label':'Tipos de Usuario','path':'Dash/Inventario/Tipos-Usuario'}
			]}
								];
		$scope.ingresar_modulo=function(menu){
			$location.path(menu.path);
		}

	  	});

