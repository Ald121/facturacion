'use strict';

/**
 * @ngdoc overview
 * @name facturacionApp
 * @description
 * # facturacionApp
 *
 * Main module of the application.
 */
var app=angular
  .module('facturacionApp', [
    'ngAnimate',
    'md.data.table',
    'ngCookies',
    'ngResource',
    // 'ngMessages',
    'ngRoute',
    'ngSanitize',
    // 'ngTouch',
    'route-segment', // rutas en segmento
    'view-segment', //vista segmentos 
     'ngStorage',
     'lumx',
     'ngMaterial',
     'io-barcode',
     'angularFileUpload'
  ]);
  app.config(function ($routeSegmentProvider, $routeProvider) {
        // Configuring provider options    
        $routeSegmentProvider.options.autoLoadTemplates = true;            
                
        // Also, we can add new item in a deep separately. This is useful when working with
        // routes in every module individually
        // -------------------------------------------    Entrada principal    -------------------------------------------   
        
        // Inicio Principal
        $routeSegmentProvider    
            .when('/',    'Acceso')        
            .segment('Acceso', {
                templateUrl: 'views/Acceso/Login.html',
                controller: 'MainCtrl'
            }).up()
        // Escritorio General
        $routeSegmentProvider
        .when('/Dash',    'dashboard')
        .when('/Dash/Inicio',    'dashboard.inicio')
        //Inventario
            .when('/Dash/Inventario/Categorias',    'dashboard.categoria')
            .when('/Dash/Inventario/Marcas',    'dashboard.marcas')
            .when('/Dash/Inventario/Modelos',    'dashboard.modelos')
            .when('/Dash/Inventario/Productos',    'dashboard.productos')
            .when('/Dash/Inventario/Proveedores',    'dashboard.proveedores')
        //Facturacion
        .when('/Dash/Facturacion/Clientes',    'dashboard.clientes')

        .segment('dashboard', {
                templateUrl: 'views/Dash/index.html',
                controller: 'DashCtrl'
            })
        .within()
            .segment('inicio', {
                            default: true,
                            templateUrl: 'views/Dash/inicio.html',
                            // controller: 'col_usuario_Ctrl'
                    })

            // ----------------------------------------INVENTARIO----------------------------------------//
                            .segment('categoria', {
                                templateUrl: 'views/Dash/Inventario/Categorias/index.html',
                                controller: 'CategoriasCtrl'
                            })
                            .segment('marcas', {
                                templateUrl: 'views/Dash/Inventario/Marcas/index.html',
                                controller: 'MarcasCtrl'
                            })
                            .segment('modelos', {
                                templateUrl: 'views/Dash/Inventario/Modelos/index.html',
                                controller: 'ModelosCtrl'
                            })
                            .segment('proveedores', {
                                templateUrl: 'views/Dash/Inventario/Proveedores/index.html',
                                controller: 'ProveedoresCtrl'
                            })
                            .segment('productos', {
                                templateUrl: 'views/Dash/Inventario/Productos/index.html',
                                controller: 'ProductosCtrl'
                            })
            // ----------------------------------------FACTURACION----------------------------------------//
                .segment('clientes', {
                                templateUrl: 'views/Dash/Facturacion/Clientes/index.html',
                                controller: 'ClientesCtrl'
                            })
                .segment('Vender', {
                                templateUrl: 'views/Dash/Facturacion/Vender/index.html',
                                controller: 'VenderCtrl'
                            })

                .segment('MisFacturas', {
                                templateUrl: 'views/Dash/Facturacion/MisFacturas/index.html',
                                controller: 'MisFacturasCtrl'
                            })

            .up()
    });

  app.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function (event) {
        if (!Auth.isLoggedIn()) {
            console.log('Acceso Denegado');
            // event.preventDefault();
            $location.path('/');
        }
        else {
            if ($location.path()=='/') {
                $location.path('/Dash');
            }
            //$location.path('/Dash');
            
        }
    });
}]);