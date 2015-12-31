/* global angular */
import AppCtrl from './controller.js'
import Scanner from './scanner.js'

angular
    .module('courseCheck', [
      'ngMaterial',
      'ui.router',
      'ngFileUpload'
    ])
    .controller('AppCtrl', AppCtrl)
    .directive('scanner', Scanner)
    .config(($stateProvider, $urlRouterProvider) => {
      $stateProvider
        .state('app', {
          url: '/',
          controller: 'AppCtrl',
          template: '<ui-view></ui-view>'
        })
        .state('app.scanner', {
          url: 'scanner',
          template: '<scanner></scanner>'
        })
        .state('app.reporter', {
          url: 'reporter',
          templateUrl: 'reporter.tpl.html'
        })

      $urlRouterProvider.otherwise('/scanner')
    })
