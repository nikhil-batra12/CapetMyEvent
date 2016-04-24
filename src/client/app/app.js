'use strict';

/*
 * Main module of the application.
 */

define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-animate',
    'angular-bootstrap'
], function (ng, couchPotato) {

    var app = ng.module('app', [
        'scs.couch-potato',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'app.layout'
    ]);

    couchPotato.configureApp(app);

    app.config(function(){
        //Configuration if any
    })
    
    app.run(function ($couchPotato, $state) {
        app.lazy = $couchPotato;
        $state.go("app");
    });
    return app;
});
