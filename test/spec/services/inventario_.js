'use strict';

describe('Service: inventario', function () {

  // load the service's module
  beforeEach(module('facturacionApp'));

  // instantiate service
  var inventario;
  beforeEach(inject(function (_inventario_) {
    inventario = _inventario_;
  }));

  it('should do something', function () {
    expect(!!inventario).toBe(true);
  });

});
