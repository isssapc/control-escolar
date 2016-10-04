/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function () {
    'use strict';

    angular
            .module('app.routes')
            .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper) {

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/app/escuelas');

        // 
        // Application Routes
        // -----------------------------------   
        $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: helper.basepath('app.html'),
                    resolve: helper.resolveFor('modernizr', 'icons')
                })
                .state('app.singleview', {
                    url: '/singleview',
                    title: 'Single View',
                    templateUrl: helper.basepath('singleview.html')
                })
                .state('app.submenu', {
                    url: '/submenu',
                    title: 'Submenu',
                    templateUrl: helper.basepath('submenu.html')
                })
                .state('app.escuelas', {
                    url: '/escuelas',
                    title: 'Escuelas',
                    controller: 'EscuelasCtrl as ctrl',
                    templateUrl: helper.basepath('escuelas.html'),
//                    resolve: {
//                        usuarios: ['UsuarioSrv', function (UsuarioSrv) {
//                                return UsuarioSrv.get_usuarios();
//                            }]
//                    }
                })
                .state('app.conceptos', {
                    url: '/conceptos',
                    title: 'Conceptos',
                    controller: 'ConceptosCtrl as ctrl',
                    templateUrl: helper.basepath('conceptos.html'),
//                    resolve: {
//                        usuarios: ['UsuarioSrv', function (UsuarioSrv) {
//                                return UsuarioSrv.get_usuarios();
//                            }]
//                    }
                })
                .state('app.carreras', {
                    url: '/carreras',
                    title: 'Carreras',
                    controller: 'CarrerasCtrl as ctrl',
                    templateUrl: helper.basepath('carreras.html'),
//                    resolve: {
//                        usuarios: ['UsuarioSrv', function (UsuarioSrv) {
//                                return UsuarioSrv.get_usuarios();
//                            }]
//                    }
                })
                /*                 .state('app.generales', {
                 url: '/datos_generales',
                 title: 'Datos Generales',
                 controller: 'AlumnosCtrl as ctrl',
                 templateUrl: helper.basepath('alumnos_generales.html')
                 //                    resolve: {
                 //                        usuarios: ['UsuarioSrv', function (UsuarioSrv) {
                 //                                return UsuarioSrv.get_usuarios();
                 //                            }]
                 //                    }
                 })*/
                .state('app.datos_generales', {
                    url: '/datos_generales',
                    title: 'Datos Generales',
                    controller: 'DatosGeneralesCtrl as ctrl',
                    templateUrl: helper.basepath('alumnos/expediente/datos_generales.html')
//                    resolve: {
//                        usuarios: ['UsuarioSrv', function (UsuarioSrv) {
//                                return UsuarioSrv.get_usuarios();
//                            }]
//                    }
                })
                .state('app.datos_personales', {
                    url: '/datos_personales',
                    title: 'Datos Personales',
                    controller: 'DatosPersonalesCtrl as ctrl',
                    templateUrl: helper.basepath('alumnos/expediente/datos_personales.html')
//                    resolve: {
//                        usuarios: ['UsuarioSrv', function (UsuarioSrv) {
//                                return UsuarioSrv.get_usuarios();
//                            }]
//                    }
                })
                .state('app.estatus_escolar', {
                    url: '/estatus_escolar',
                    title: 'Estatus Escolar',
                    controller: 'EstatusEscolarCtrl as ctrl',
                    templateUrl: helper.basepath('alumnos/expediente/estatus_escolar.html')
//                    resolve: {
//                        usuarios: ['UsuarioSrv', function (UsuarioSrv) {
//                                return UsuarioSrv.get_usuarios();
//                            }]
//                    }
                })
                .state('app.cotizar', {
                    url: '/cotizar',
                    title: 'Cotizar',
                    controller: 'CotizarCtrl as ctrl',
                    templateUrl: helper.basepath('cotizar.html')
                })
                .state('page', {
                    url: '/page',
                    templateUrl: 'app/pages/page.html',
                    resolve: helper.resolveFor('modernizr', 'icons'),
                    controller: ['$rootScope', function ($rootScope) {
                            $rootScope.app.layout.isBoxed = false;
                        }]
                })
                .state('page.login', {
                    url: '/login',
                    title: 'Login',
                    templateUrl: 'app/pages/login.html'
                })
                // 
                // CUSTOM RESOLVES
                //   Add your own resolves properties
                //   following this object extend
                //   method
                // ----------------------------------- 
                // .state('app.someroute', {
                //   url: '/some_url',
                //   templateUrl: 'path_to_template.html',
                //   controller: 'someController',
                //   resolve: angular.extend(
                //     helper.resolveFor(), {
                //     // YOUR RESOLVES GO HERE
                //     }
                //   )
                // })
                ;

    } // routesConfig

})();

