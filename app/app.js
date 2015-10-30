var mainApp = angular.module("mainApp", ['ui.router']);

mainApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/default');
    
    $stateProvider
        .state('default', {
            url: '/default',
            templateUrl: 'views/pagination-partial.html',
			controller: 'Page'
        });
        
});