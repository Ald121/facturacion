'use strict';

/**
 * @ngdoc service
 * @name facturacionApp.generales
 * @description
 * # generales
 * Service in the facturacionApp.
 */
angular.module('facturacionApp')
  .service('Servicios_Generales', function ($localStorage, $resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.server=function() {
        return "http://192.168.0.108/servicios_facturacion/public/";
        
    };
  });
