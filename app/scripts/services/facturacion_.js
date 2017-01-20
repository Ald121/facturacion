'use strict';

/**
 * @ngdoc service
 * @name facturacionApp.inventario
 * @description
 * # inventario
 * Service in the facturacionApp.
 */
angular.module('facturacionApp')
  .service('Facturacion_Services', function ($localStorage, $resource,Servicios_Generales) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // --------------------------------------- Categorias ---------------------------------
    this.Clientes = function(){
	    		 return {
				            Get_By_Ruc_Ci: function() {
				                return $resource(Servicios_Generales.server()+'Get_By_Ruc_Ci', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								});

				            },
				            Existencia: function() {
				                return $resource(Servicios_Generales.server()+'Existencia_Clientes', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								});

				            },

				            Add: function() {
				                return $resource(Servicios_Generales.server()+'Add_Clientes', {} , {
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
	    	// --------------------------------------- Facturas ---------------------------------
    this.Facturas = function(){
	    		 return {
				            Existencia: function() {
				                return $resource(Servicios_Generales.server()+'Existencia_Facturas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },
				            Add: function() {
				                return $resource(Servicios_Generales.server()+'Add_Facturas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            }
				            ,Update: function() {
				                return $resource(Servicios_Generales.server()+'Update_Facturas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });

				            },Delete: function() {
				                return $resource(Servicios_Generales.server()+'Delete_Facturas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Facturas', {} , {
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
