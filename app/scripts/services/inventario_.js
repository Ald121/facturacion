'use strict';

/**
 * @ngdoc service
 * @name facturacionApp.inventario
 * @description
 * # inventario
 * Service in the facturacionApp.
 */
angular.module('facturacionApp')
  .service('Inventario_Services', function ($localStorage, $resource,Servicios_Generales) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // --------------------------------------- Categorias ---------------------------------
    this.Categorias = function(){
	    		 return {
				            Add: function() {
				                return $resource(Servicios_Generales.server()+'Add_Categorias', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            }
				            ,Update: function() {
				                return $resource(Servicios_Generales.server()+'Update_Categorias', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });

				            },Delete: function() {
				                return $resource(Servicios_Generales.server()+'Delete_Categorias', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Categorias', {} , {
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
	    	// --------------------------------------- Modelos ---------------------------------
    this.Modelos = function(){
	    		 return {
				            Add: function() {
				                return $resource(Servicios_Generales.server()+'Add_Modelos', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            }
				            ,Update: function() {
				                return $resource(Servicios_Generales.server()+'Update_Modelos', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });

				            },Delete: function() {
				                return $resource(Servicios_Generales.server()+'Delete_Modelos', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Modelos', {} , {
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

	    	// --------------------------------------- Marcas ---------------------------------
    this.Marcas = function(){
	    		 return {
				            Add: function() {
				                return $resource(Servicios_Generales.server()+'Add_Marcas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            }
				            ,Update: function() {
				                return $resource(Servicios_Generales.server()+'Update_Marcas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });

				            },Delete: function() {
				                return $resource(Servicios_Generales.server()+'Delete_Marcas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Marcas', {} , {
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

	    	// --------------------------------------- Productos ---------------------------------
    this.Productos = function(){
	    		 return {
				            Add: function() {
				                return $resource(Servicios_Generales.server()+'Add_Productos', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            }
				            ,Update: function() {
				                return $resource(Servicios_Generales.server()+'Update_Productos', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });

				            },Delete: function() {
				                return $resource(Servicios_Generales.server()+'Delete_Productos', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Productos', {} , {
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

	    	// --------------------------------------- Proveedores ---------------------------------
    this.Proveedores = function(){
	    		 return {
				            Add: function() {
				                return $resource(Servicios_Generales.server()+'Add_Proveedores', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            }
				            ,Update: function() {
				                return $resource(Servicios_Generales.server()+'Update_Proveedores', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });

				            },Delete: function() {
				                return $resource(Servicios_Generales.server()+'Delete_Proveedores', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Proveedores', {} , {
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
