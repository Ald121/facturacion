'use strict';

describe('Service: LoginRegistro', function () {

  // load the service's module
  beforeEach(module('facturacionApp'));

  // instantiate service
  var LoginRegistro;
  beforeEach(inject(function (_LoginRegistro_) {
    LoginRegistro = _LoginRegistro_;
  }));

  it('should do something', function () {
    expect(!!LoginRegistro).toBe(true);
  });

});
