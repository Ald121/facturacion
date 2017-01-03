'use strict';

describe('Service: generales', function () {

  // load the service's module
  beforeEach(module('facturacionApp'));

  // instantiate service
  var generales;
  beforeEach(inject(function (_generales_) {
    generales = _generales_;
  }));

  it('should do something', function () {
    expect(!!generales).toBe(true);
  });

});
