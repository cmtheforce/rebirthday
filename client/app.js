angular.module('artoo', [
  'ngMessages',
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'ui.router',
  'ngResource',
  ])
  
  
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .warnPalette('orange')
        .accentPalette('brown')
        .backgroundPalette('grey');
  
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');  
 });