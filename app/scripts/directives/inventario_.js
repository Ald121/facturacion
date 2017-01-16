  'use strict';

/**
 * @ngdoc directive
 * @name facturacionApp.directive:fileUload
 * @description
 * # fileUload
 */
var app=angular.module('facturacionApp');
  //------------------------------------------------------------------ EXISTENCIA CATEGORIA ------------------------------------------------------------------//
    app.directive('categoriaValidator', function($q, Inventario_Services) {
      return {
          require: 'ngModel',
          link: function(scope, element, attrs, ngModel) {
              ngModel.$asyncValidators.campo = function(modelValue, viewValue) {
                return Inventario_Services.Categorias().Existencia().send({nombre: viewValue}).$promise.then(function(data){
                      if (!data.respuesta) {
                          return $q.reject('proceso');
                      }
                return true;
                });
              };
          }
      };
    });

  //------------------------------------------------------------------ EXISTENCIA MARCAS ------------------------------------------------------------------//
    app.directive('marcasValidator', function($q, Inventario_Services) {
      return {
          require: 'ngModel',
          link: function(scope, element, attrs, ngModel) {
              ngModel.$asyncValidators.campo = function(modelValue, viewValue) {
                return Inventario_Services.Marcas().Existencia().send({nombre: viewValue}).$promise.then(function(data){
                      if (!data.respuesta) {
                          return $q.reject('proceso');
                      }
                return true;
                });
              };
          }
      };
    });

     //------------------------------------------------------------------ EXISTENCIA MODELOS ------------------------------------------------------------------//
    app.directive('modelosValidator', function($q, Inventario_Services) {
      return {
          require: 'ngModel',
          link: function(scope, element, attrs, ngModel) {
              ngModel.$asyncValidators.campo = function(modelValue, viewValue) {
                return Inventario_Services.Modelos().Existencia().send({nombre: viewValue}).$promise.then(function(data){
                      if (!data.respuesta) {
                          return $q.reject('proceso');
                      }
                return true;
                });
              };
          }
      };
    });

     //------------------------------------------------------------------ EXISTENCIA PRODUCTOS ------------------------------------------------------------------//
    app.directive('productosValidator', function($q, Inventario_Services) {
      return {
          require: 'ngModel',
          link: function(scope, element, attrs, ngModel) {
              ngModel.$asyncValidators.campo = function(modelValue, viewValue) {
                return Inventario_Services.Productos().Existencia().send({nombre: viewValue}).$promise.then(function(data){
                      if (!data.respuesta) {
                          return $q.reject('proceso');
                      }
                return true;
                });
              };
          }
      };
    });

     //------------------------------------------------------------------ EXISTENCIA PROVEEDORES ------------------------------------------------------------------//
    app.directive('proveedoresValidator', function($q, Inventario_Services) {
      return {
          require: 'ngModel',
          link: function(scope, element, attrs, ngModel) {
              ngModel.$asyncValidators.campo = function(modelValue, viewValue) {
                return Inventario_Services.Proveedores().Existencia().send({nombre: viewValue}).$promise.then(function(data){
                      if (!data.respuesta) {
                          return $q.reject('proceso');
                      }
                return true;
                });
              };
          }
      };
    });