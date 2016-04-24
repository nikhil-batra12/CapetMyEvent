// Defer AngularJS bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

define([ 
    //External Libraries
    'domReady',
    'jquery',   
    'angular',
    'angular-animate',   
    'angular-resource',   
    'angular-ui-router',
    'angular-couch-potato',
    'bootstrap', 

    //Main Application module
    'app',

    //Layout Module
    'layout/module',
    'layout/controllers/layoutController'
        
], function (domReady) {

    'use strict';

    domReady(function (document) {

        angular.element(document).find('html').addClass('ng-app');
        //Manually bootstrap angular App
        angular.bootstrap(document, ['app']);
        angular.resumeBootstrap();

    });
});
