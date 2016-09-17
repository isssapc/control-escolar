
// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

(function () {
    'use strict';

    angular
            .module('app.logic')
            .controller('DatosPersonalesCtrl', Controller);

    Controller.$inject = ['$log', 'AlumnosSrv'];
    function Controller($log, AlumnosSrv) {
        console.log("Controlador Datos Personales");
        var self = this;
        self.datos_personales = [];

        self.get_datos_personales = function () {
            AlumnosSrv.get_datos_personales().then(function (response) {
                self.datos_personales = response.data;
            });
        };


        self.get_datos_personales();



        //        UsuarioSrv.get_usuarios().then(function (response) {
//            console.log("usuarios", JSON.stringify(response.data));
//            self.usuarios = response.data;
//        });




    }
})();
