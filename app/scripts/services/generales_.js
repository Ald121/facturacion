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
    var ip_server="http://192.168.0.108/";
    this.server=function() {
        return ip_server+"servicios_facturacion/public/";
    };
    var dir_server=this.server();
    this.Menu = function(){
	    		 return $resource(dir_server+'Get_Permisos', {} , {
								            Get: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
		        });
	    	}
  });
