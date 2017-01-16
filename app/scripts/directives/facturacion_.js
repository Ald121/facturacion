  'use strict';

/**
 * @ngdoc directive
 * @name facturacionApp.directive:fileUload
 * @description
 * # fileUload
 */
var app=angular.module('facturacionApp');
  //------------------------------------------------------------------ EXISTENCIA CLIENTES ------------------------------------------------------------------//
    app.directive('clientesValidator', function($q, Facturacion_Services) {
      return {
          require: 'ngModel',
          link: function(scope, element, attrs, ngModel) {
              ngModel.$asyncValidators.campo = function(modelValue, viewValue) {

                if (viewValue.length==10||viewValue.length==13) {
                  return Facturacion_Services.Clientes().Existencia().send({nombre: viewValue}).$promise.then(function(data){
                      if (!data.respuesta) {
                          return $q.reject('proceso');
                      }
                return true;
                });
                }

                
              };
          }
      };
    });
