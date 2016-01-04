/* global angular */
import AppCtrl from './controller.js'
import Scanner from './scanner.js'
import Reporter from './reporter.js'

angular
    .module('courseCheck', [
      'ngMaterial',
      'ui.router',
      'ngFileUpload'
    ])
    .controller('AppCtrl', AppCtrl)
    .directive('scanner', Scanner)
    .directive('reporter', Reporter)
    .config(($stateProvider, $urlRouterProvider) => {
      $stateProvider
        .state('app', {
          url: '/',
          controller: 'AppCtrl as app',
          template: '<ui-view layout-fill></ui-view>'
        })
        .state('app.scanner', {
          url: 'scanner',
          template: '<scanner layout-fill></scanner>'
        })
        .state('app.reporter', {
          url: 'reporter',
          template: '<reporter layout-fill></reporter>'
        })

      $urlRouterProvider.otherwise('/scanner')
    })
