'use strict';

/**
 * @ngdoc service
 * @name facturacionApp.login
 * @description
 * # login
 * Factory in the facturacionApp.
 */
angular.module('facturacionApp')
   .factory('Auth', function($localStorage){
var user;

return{
    setUser : function(aUser){
        user = aUser;
    },
    isLoggedIn : function(){
        return ($localStorage.token==undefined) ?false:true;
    }
  }
});
