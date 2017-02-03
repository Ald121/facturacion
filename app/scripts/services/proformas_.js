'use strict';

/**
 * @ngdoc service
 * @name facturacionApp.inventario
 * @description
 * # inventario
 * Service in the facturacionApp.
 */
angular.module('facturacionApp')
  .service('Proformas_Services', function ($localStorage, $resource,Servicios_Generales) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	    	// --------------------------------------- Facturas ---------------------------------
    this.Proformas = function(){
	    		 return {
				            Existencia: function() {
				                return $resource(Servicios_Generales.server()+'Existencia_Proformas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },
				            Add: function() {
				                return $resource(Servicios_Generales.server()+'Add_Proformas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            }
				            ,Update: function() {
				                return $resource(Servicios_Generales.server()+'Update_Proformas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });

				            },Delete: function() {
				                return $resource(Servicios_Generales.server()+'Delete_Proformas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Proformas', {} , {
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
