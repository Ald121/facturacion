'use strict';

/**
 * @ngdoc service
 * @name facturacionApp.configuracion
 * @description
 * # configuracion
 * Service in the facturacionApp.
 */
angular.module('facturacionApp')
  .service('Configuracion_Services', function ($localStorage, $resource,Servicios_Generales) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // --------------------------------------- IMPUESTOS ---------------------------------
    this.Impuestos = function(){
	    		 return {
				            Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Impuestos', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								});

				            }
        				}
		        
	    	}
  });
