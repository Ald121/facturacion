'use strict';

/**
 * @ngdoc overview
 * @name facturacionApp
 * @description
 * # facturacionApp
 *
 * Main module of the application.
 */
angular
  .module('facturacionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    // 'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'route-segment', // rutas en segmento
    'view-segment', //vista segmentos 
     'ngStorage',
     'lumx'
  ])
  .config(function ($routeSegmentProvider, $routeProvider) {
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
            });
    });