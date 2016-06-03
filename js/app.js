angular.module('formApp', ['ngMessages'])
    .directive('email', function() {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@ejemplo\.org/i;
        return {
          require: 'ngModel',
          restrict: '',
          link: function(scope, elm, attrs, ctrl) {
            if (ctrl && ctrl.$validators.email) {
              ctrl.$validators.email = function(modelValue) {
                return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
              };
            }
          }
        };
    })
    
    .directive('pwd-exp', function () {
      var PWD_REGEXP = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9].*[0-9])(?=.*[^a-zA-Z0-9]).{8,12}/i;
      return {
        require: 'ngModel',
        restrict: '',
        link: function (scope, elm, attr, ctrl) {
          if (ctrl && ctrl.$validators.pwd) {
              ctrl.$validators.pwd = function(modelValue) {
                return ctrl.$isEmpty(modelValue) || PWD_REGEXP.test(modelValue);
              };
            }
          }
       };
    })
    .controller('MainCtrl', function ($scope) {
	    $scope.formData = {};
      $scope.departamentos = [ 'web development', 'sistemas', 'marketing' ];
	    $scope.submitForm = function (formData) {
	    console.log('Form submitted with' + JSON.stringify(formData));
	  };
	});
