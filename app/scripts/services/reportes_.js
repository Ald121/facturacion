'use strict';

/**
 * @ngdoc service
 * @name facturacionApp.reportes
 * @description
 * # reportes
 * Service in the facturacionApp.
 */
angular.module('facturacionApp')
  .service('Reportes_Services', function ($localStorage, $resource,Servicios_Generales) {


this.Productos = function(){
	    		 return {
				            Mas_vendidos: function() {
				                return $resource(Servicios_Generales.server()+'Get_Prods_Mas_Vendidos', {} , {
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

this.Facturacion = function(){
	 return {
	            ventas_x_mes: function() {
	                return $resource(Servicios_Generales.server()+'Get_Ventas_X_Mes', {} , {
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
