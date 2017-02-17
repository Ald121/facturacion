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
    var ip_server="http://localhost/";
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

     this.Localizacion = function(){
     	return $resource(dir_server+'Get_Localizacion', {} , {
				            get: {
					                method: 'POST', isArray: false
					            }
		        });
     }

     this.Session_Status = function(){
     	return $resource(dir_server+'Session_Status', {} , {
				            get: {
					                method: 'POST', isArray: false,
					                params: {
						                     token: $localStorage.token
						                    }
					            }
		        });
     }
	    	
  });
