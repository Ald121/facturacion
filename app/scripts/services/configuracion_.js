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

	 // --------------------------------------- IMPUESTOS ---------------------------------
    this.Empresa = function(){
	    		 return {
				            Add: function() {
				                return $resource(Servicios_Generales.server()+'Add_Informacion', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								});

				            },
				            Update: function() {
				                return $resource(Servicios_Generales.server()+'Update_Informacion', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								});

				            },
				            Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Informacion', {} , {
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
