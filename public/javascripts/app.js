
var app = angular.module('scoketApp', []);
/*
 Service Base URL
 */
var serviceBase = '/services/';

app.config(['$interpolateProvider', function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
}]);



//app.config(['$httpProvider', function($httpProvider) {
//        $httpProvider.defaults.useXDomain = true;
//        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
//        delete $httpProvider.defaults.headers.common['X-Requested-With'];
//    }
//]);


app.constant('AppSettings', {
    apiServiceBaseUri: serviceBase
});
    


//app.run(['authService', function (authService) {
//        console.log('@@@@@@@@@@@ Save User Date @@@@@@@@@@');
//        authService.filluserInfo();
//    }]);

