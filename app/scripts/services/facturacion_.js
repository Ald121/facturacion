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
				            ,Update: function() {
				                return $resource(Servicios_Generales.server()+'Update_Clientes', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });

				            },Delete: function() {
				                return $resource(Servicios_Generales.server()+'Delete_Clientes', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Clientes', {} , {
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
				            Existencia: function() {
				                return $resource(Servicios_Generales.server()+'Existencia_Modelos', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },
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
				            Existencia: function() {
				                return $resource(Servicios_Generales.server()+'Existencia_Marcas', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },
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
				            Existencia: function() {
				                return $resource(Servicios_Generales.server()+'Existencia_Productos', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },
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
				            Existencia: function() {
				                return $resource(Servicios_Generales.server()+'Existencia_Proveedores', {} , {
								            send: {
									                method: 'POST', isArray: false,
									                params: {
									                    token: $localStorage.token
									                }
									            }
								        });
				            },
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

	    	// --------------------------------------- Tipo_Gastos ---------------------------------
    this.Tipo_Gastos = function(){
	    		 return {
				         Get: function() {
				                return $resource(Servicios_Generales.server()+'Get_Tipo_Gastos', {} , {
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
