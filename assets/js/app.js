'use strict';
angular.module('app', [])
.directive('limitTo', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        var limit = parseInt(attrs.limitTo);
        angular.element(elem).on('keypress', function(e) {
          var key;
          if (e.which == null) { // IE
            key = e.keyCode;
          }
          if (e.which != 0) { // all but IE
            key = e.which;
          }
          if (this.value.length == limit && (key != 8 && key !== 46 && key !== undefined)) {
            e.preventDefault();
          }
        });
      }
    }
  }
]).controller('step1', [
  '$scope',
  '$http',
  function($scope, $http) {
    var vm = this;

    console.log('Wini step1');

    $scope.onlyNumbers = /^\d+$/;
    $scope.emailExpression = /^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    $scope.f = {
      email: '',
      phone: ''
    };

    $scope.register = function(isValid) {
      // Formulario válido
      if (isValid) {
        if (sessionStorage.getItem('leadId')) {
          $http.patch('/lead/' + sessionStorage.getItem('leadId'), $scope.f).then(function(res) {
            window.location = '../step2';
          }, function(err) {
              console.error(err);
          });
        } else {
          $http.post('/lead', $scope.f).then(function(res) {
            sessionStorage.setItem('leadId', res.data.id);
            window.location = '../step2';
          }, function(err) {
              console.error(err);
          });
        }
      } else {
        // Formulario no válido
        console.log('No es válido');
      }
    }

  }
]).controller('step2', [
  '$scope',
  '$http',
  function($scope, $http) {
    var vm = this;

    console.log('Wini step2');

    if (!sessionStorage.getItem('leadId')) { window.location = '../step1'; }

    $scope.f = {
      income: '',
      checkIncome: '',
      lead: sessionStorage.getItem('leadId')
    };

    $http.get('/income?sort=id').then(function(res) {
      $scope.income = res.data;
    }, function(err) {
      // Sweetalert
        console.error(err);
    });

    $scope.register = function(isValid) {
      // Formulario válido
      if (isValid) {
        if (sessionStorage.getItem('applicationId')) {
          $http.patch('/application/' + sessionStorage.getItem('applicationId'), $scope.f).then(function(res) {
            window.location = '../step3';
          }, function(err) {
              console.error(err);
          });
        } else {
          $http.post('/application', $scope.f).then(function(res) {
            sessionStorage.setItem('applicationId', res.data.id);
            window.location = '../step3';
          }, function(err) {
              console.error(err);
          });
        }
      } else {
        // Formulario no válido
        console.log('No es válido');
      }
    }

  }
]).controller('step3', [
  '$scope',
  '$http',
  function($scope, $http) {
    var vm = this;

    console.log('Wini step3');

    if (!sessionStorage.getItem('leadId')) { window.location = '../step1'; }
    else if (!sessionStorage.getItem('applicationId')) { window.location = '../step2'; }

    $scope.f = {
      profession: ''
    };

    $http.get('/profession?sort=id').then(function(res) {
      $scope.profession = res.data;
    }, function(err) {
      // Sweetalert
        console.error(err);
    });

    $scope.register = function(isValid) {
      // Formulario válido
      if (isValid) {
          $http.patch('/application/' + sessionStorage.getItem('applicationId'), $scope.f).then(function(res) {
            window.location = '../step4';
          }, function(err) {
              console.error(err);
          });
        } else {
        // Formulario no válido
        console.log('No es válido');
      }
    }

  }
]).controller('step4', [
  '$scope',
  '$http',
  function($scope, $http) {
    var vm = this;

    console.log('Wini step4');

    if (!sessionStorage.getItem('leadId')) { window.location = '../step1'; }
    else if (!sessionStorage.getItem('applicationId')) { window.location = '../step2'; }

    $scope.f = {
      debit: ''
    };

    $scope.register = function(isValid) {
      // Formulario válido
      if (isValid) {
          $http.patch('/application/' + sessionStorage.getItem('applicationId'), $scope.f).then(function(res) {
            window.location = '../step5';
          }, function(err) {
              console.error(err);
          });
        } else {
        // Formulario no válido
        console.log('No es válido');
      }
    }

  }
]).controller('step5', [
  '$scope',
  '$http',
  function($scope, $http) {
    var vm = this;

    console.log('Wini step5');

    if (!sessionStorage.getItem('leadId')) { window.location = '../step1'; }
    else if (!sessionStorage.getItem('applicationId')) { window.location = '../step2'; }

    $scope.f = {
      paymentUpToDate: null,
      financialProduct: []
    };

    $http.get('/financialProduct?sort=id').then(function(res) {
      $scope.financialProduct = res.data;
    }, function(err) {
      // Sweetalert
        console.error(err);
    });

    $scope.change = function(id) {
      var index = $scope.f.financialProduct.indexOf(id);
      if (index >= 0) {
        $scope.f.financialProduct.splice(index, 1);
      } else {
        $scope.f.financialProduct.push(id);
      }
      $scope.f.paymentUpToDate = ($scope.f.financialProduct.length > 0) ? $scope.f.paymentUpToDate : null;
    };

    $scope.register = function(isValid) {
      // Formulario válido
      if (isValid) {
          $http.patch('/application/' + sessionStorage.getItem('applicationId'), $scope.f).then(function(res) {
            window.location = '../step6';
          }, function(err) {
              console.error(err);
          });
        } else {
        // Formulario no válido
        console.log('No es válido');
      }
    }

  }
]).controller('step6', [
  '$scope',
  '$http',
  function($scope, $http) {
    var vm = this;

    console.log('Wini step6');

    if (!sessionStorage.getItem('leadId')) { window.location = '../step1'; }
    else if (!sessionStorage.getItem('applicationId')) { window.location = '../step2'; }

    var date = new Date();
    date.setFullYear( date.getFullYear() - 18 );
    date.setMonth( 0 );
    date.setDate( 1 );

    $scope.months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

    $scope.f = {
      dayBirth: 1,
      monthBirth: 'ENE',
      yearBirth: date.getFullYear(),
      state: null,
      termsConditions: null,
      privacyNotice: null
    };

    $scope.daysInMonth = function () {
      var month = $scope.months.indexOf($scope.f.monthBirth) + 1;
      $scope.days = $scope.range(1, new Date($scope.f.yearBirth, month, 0).getDate(), 1);
      console.log($scope.f);
    }

    $scope.range = function(min, max, step) {
      step = Math.abs(step) || 1;
      var input = [];
      var range = Math.abs(max - min) + 1;
      for (var i = 0; i < range; i++) {
        input.push(min);
        min = (max - min >= 0)
          ? min + step
          : min - step;
      }
      return input;
    };

    $scope.years = $scope.range(date.getFullYear(), date.getFullYear() - 82, 1);
    $scope.daysInMonth();

    $http.get('/state?sort=description').then(function(res) {
      $scope.state = res.data;
      $scope.f.state = $scope.state[0].id;
    }, function(err) {
      // Sweetalert
        console.error(err);
    });

    $scope.register = function(isValid) {
      // Formulario válido
      if (isValid) {
          $http.patch('/lead/' + sessionStorage.getItem('leadId'), $scope.f).then(function(res) {
            $http.patch('/application/' + sessionStorage.getItem('applicationId'), $scope.f).then(function(res) {
              sessionStorage.clear();
            	fbq('track', 'Lead');
              window.location = '../results';
            }, function(err) {
                console.error(err);
            });
          }, function(err) {
              console.error(err);
          });
        } else {
        // Formulario no válido
        console.log('No es válido');
      }
    }

  }
]).controller('email', [
  '$scope',
  '$http',
  function($scope, $http) {
    var vm = this;

    console.log('Wini email');

    $scope.lettersForNames = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ-\s]+$/;
    $scope.onlyNumbers = /^\d+$/;
    $scope.emailExpression = /^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    $scope.f = { };

    $scope.change = function(prod) {
      $scope.f.products = ($scope.f.products) ? $scope.f.products : [];
      var index = $scope.f.products.indexOf(prod);
      if (index >= 0) {
        $scope.f.products.splice(index, 1);
      } else {
        $scope.f.products.push(prod);
      }
      console.log($scope.f.products);
    };

    $scope.sendEmail = function(isValid) {
      // Formulario válido
      if (isValid && !$scope.sending) {
        $scope.sending = true;
        $http.post('/email', $scope.f).then(function(res) {
          $scope.sending = false;
          window.location.reload();
        }, function(err) {
            $scope.sending = false;
            console.error(err);
        });
      } else {
        // Formulario no válido
        console.log('No es válido');
      }
    }

  }
]);
