
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
        self.modificar = true;

        self.editar_escuela = function () {
            self.modificar = !self.modificar;
            //desahabilitar los otros botones
            self.nuevo_disabled = true;
            self.reporte_disabled = true;
        };

        self.deshacer_escuela = function () {
            self.modificar = true;
            //habilitar los otros botones
            self.nuevo_disabled = false;
            self.reporte_disabled = false;
        };

        self.nueva_escuela = function () {
            self.modificar = false;
            //habilitar los otros botones
            self.nuevo_disabled = true;
            self.reporte_disabled = true;

            self.escuela = {};
            self.nuevo = true;
        };

        self.update_escuela = function () {
            console.log("update escuela");

            if (!self.nuevo) {
                var id_escuela = self.escuela.escuela;

                var copia = angular.copy(self.escuela);
                delete copia.escuela;
                delete copia.selected;

                EscuelaSrv.update_escuela(id_escuela, copia).then(function (response) {
                    console.log("resgistros actualizados: ");

                    var i = self.escuelas.indexOf(self.escuela);

                    self.escuela = response.data;
                    self.escuelas[i] = response.data;

                }).catch(function (response) {

                });
            } else {
                EscuelaSrv.add_escuela(self.escuela).then(function (response) {
                    console.log("nuevo registro añadido");
                    console.log(response.data);
                    self.escuela = response.data;
                    self.escuelas.push(response.data);
                }).catch(function (response) {

                });
            }




        };

        self.del_escuela = function () {

            console.log("del escuela");

            EscuelaSrv.del_escuela(self.escuela.escuela).then(function (response) {
                console.log("resgistros borrados del servidor: " + response.data);
                var i = self.escuelas.indexOf(self.escuela);
                self.escuelas.splice(i, 1);
                self.escuela = {};

            }).catch(function (response) {

            });







        };

        self.get_escuelas = function () {
            EscuelaSrv.get_escuelas().then(function (response) {
                self.escuelas = response.data;
            });
        };


        self.get_escuelas();


        self.seleccionar_escuela = function (e) {
            self.escuela = e;

            angular.forEach(self.escuelas, function (escuela) {
                escuela.selected = false;
            });

            e.selected = true;

        };






    }
})();
