var require = {
    waitSeconds: 0,
    paths: {
        'jquery':'../../../bower_components/jquery/dist/jquery',       
        'bootstrap': '../../../bower_components/bootstrap/dist/js/bootstrap',
        'angular': '../../../bower_components/angular/angular',
        'angular-resource': '../../../bower_components/angular-resource/angular-resource',
        'angular-animate': '../../../bower_components/angular-animate/angular-animate',
        'domReady': '../../../bower_components/requirejs-domready/domReady',
        'angular-ui-router': '../../../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-bootstrap': '../../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-couch-potato': '../../../bower_components/angular-couch-potato/dist/angular-couch-potato' 
    },
    shim: {
        'angular': {exports: 'angular'},
        'angular-animate': { deps: ['angular'] },
        'angular-resource': { deps: ['angular'] },
        'angular-bootstrap': { deps: ['angular'] },
        'angular-ui-router': { deps: ['angular'] },
        'angular-couch-potato': { deps: ['angular'] },
        'bootstrap':{deps: ['jquery']},
    },
    priority: [
        'jquery',
        'bootstrap',
        'angular'
    ]
};