'use strict';

/**
 * @ngdoc service
 * @name facturacionApp.LoginRegistro
 * @description
 * # LoginRegistro
 * Service in the facturacionApp.
 */
angular.module('facturacionApp')
  .service('Login_Services', function ($localStorage, $resource,Servicios_Generales,LxNotificationService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    //------------------------------------------------------    ACCESO -------------------------------------------------------
         this.Log = function(){
	    		 return {
				            In: function() {
				                return $resource(Servicios_Generales.server()+'Acceso', {} , {
								            ingresar: {
									                method: 'POST', isArray: false
									            }
								        });
				            }
				            ,Out: function() {
				                return $resource(Servicios_Generales.server()+'Salir', {} , {
								            salir: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });

				            }
        				}
		        
	    	}
 //------------------------------------------------------    LICENCIA -------------------------------------------------------
	    	this.Licencia = function(){
	    		 return {
				            Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Licencia', {} , {
								            send: {
									                method: 'POST', isArray: false
									            }
								        });
				            }
				           
        				}
		        
	    	}
  });
