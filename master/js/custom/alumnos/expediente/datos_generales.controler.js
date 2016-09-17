
// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

(function () {
    'use strict';

    angular
            .module('app.logic')
            .controller('DatosGeneralesCtrl', Controller);

    Controller.$inject = ['$log', 'AlumnosSrv'];
    function Controller($log, AlumnosSrv) {
        console.log("Controlador Alumnos");
        var self = this;
        self.datos_generales = [];

        self.get_datos_generales = function () {
            AlumnosSrv.get_datos_generales().then(function (response) {
                self.datos_generales = response.data;
            });
        };


        self.get_datos_generales();



        //        UsuarioSrv.get_usuarios().then(function (response) {
//            console.log("usuarios", JSON.stringify(response.data));
//            self.usuarios = response.data;
//        });




    }
})();
