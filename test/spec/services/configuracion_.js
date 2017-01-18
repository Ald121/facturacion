'use strict';

describe('Service: configuracion', function () {

  // load the service's module
  beforeEach(module('facturacionApp'));

  // instantiate service
  var configuracion;
  beforeEach(inject(function (_configuracion_) {
    configuracion = _configuracion_;
  }));

  it('should do something', function () {
    expect(!!configuracion).toBe(true);
  });

});
