
// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

(function () {
    'use strict';

    angular
            .module('app.logic')
            .controller('EscuelasCtrl', Controller);

    Controller.$inject = ['$log', 'EscuelaSrv'];
    function Controller($log, EscuelaSrv) {
        console.log("Controlador Escuelas");
        var self = this;
        self.escuelas = [];
        self.escuela = {};

        self.get_escuelas = function () {
            EscuelaSrv.get_escuelas().then(function (response) {
                self.escuelas = response.data;
            });
        };


        self.get_escuelas();


        self.seleccionar_escuela = function (e) {
            self.escuela = e;
        };






    }
})();
