'use strict';

describe('Controller: ExampleCtrl', function () {
  // load the controller's module
  beforeEach(module('courseCheck'));

  var ApplicationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplicationCtrl = $controller('ExampleCtrl', {
      $scope: scope
    });
  }));

  it('should check to see if exampleVar is initialized', function () {
    expect(scope.exampleVar).toBe('Test');
  });
});
