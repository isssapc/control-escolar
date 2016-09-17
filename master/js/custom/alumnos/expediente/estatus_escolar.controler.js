
// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

(function () {
    'use strict';

    angular
            .module('app.logic')
            .controller('EstatusEscolarCtrl', Controller);

    Controller.$inject = ['$log', 'AlumnosSrv'];
    function Controller($log, AlumnosSrv) {
        console.log("Controlador Estatus Escolar");
        var self = this;
        self.estatus_escolar = [];

        self.get_estatus_escolar = function () {
            AlumnosSrv.get_estatus_escolar().then(function (response) {
                self.estatus_escolar = response.data;
            });
        };


        self.get_estatus_escolar();



        //        UsuarioSrv.get_usuarios().then(function (response) {
//            console.log("usuarios", JSON.stringify(response.data));
//            self.usuarios = response.data;
//        });




    }
})();
