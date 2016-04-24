define(['angular',
    'angular-couch-potato',
    'angular-ui-router'], function (ng, couchPotato) {

    "use strict";


    var module = ng.module('app.layout', ['ui.router','ui.bootstrap']);

    couchPotato.configureApp(module);

    module.config(function ($stateProvider, $couchPotatoProvider, $urlRouterProvider) {


        $stateProvider
            .state('app', {
                views: {
                    root: {
                        templateUrl: 'app/layout/layout.tpl.html',
                        controller: 'LayoutCtrl',
                        resolve:{
                            // To be added
                        }
                    }
                }
            })
        
        $urlRouterProvider.otherwise('/app');

    });

    module.run(function ($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;

});
