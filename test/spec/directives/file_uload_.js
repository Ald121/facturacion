'use strict';

describe('Directive: fileUload', function () {

  // load the directive's module
  beforeEach(module('facturacionApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<file-uload-></file-uload->');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fileUload directive');
  }));
});
