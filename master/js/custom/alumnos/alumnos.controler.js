
// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

(function () {
    'use strict';

    angular
            .module('app.logic')
            .controller('AlumnosCtrl', Controller);

    Controller.$inject = ['$log', 'AlumnosSrv'];
    function Controller($log, AlumnosSrv) {
        console.log("Controlador Alumnos");
        var self = this;
        self.alumnos = [];

        self.get_alumnos = function () {
            AlumnosSrv.get_alumnos().then(function (response) {
                self.alumnos = response.data;
            });
        };


        self.get_alumnos();



        //        UsuarioSrv.get_usuarios().then(function (response) {
//            console.log("usuarios", JSON.stringify(response.data));
//            self.usuarios = response.data;
//        });




    }
})();
