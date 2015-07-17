'use strict';

/**
 * @ngdoc function
 * @name otaniemi3dApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the otaniemi3dApp
 */
angular.module('otaniemi3dApp')
  .controller('ModalCtrl', function ($scope, $modalInstance, params) {

    this.ok = function () {
      $modalInstance.close();
    };

    this.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
