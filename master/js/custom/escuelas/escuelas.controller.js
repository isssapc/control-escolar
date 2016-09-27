
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
        };

        self.update_escuela = function () {
            console.log("update escuela");
            
            var id_escuela= self.escuela.escuela;
            
            var copia= angular.copy(self.escuela);
            delete copia.escuela;
            
             EscuelaSrv.update_escuela(id_escuela, copia).then(function (response) {
                console.log("resgistros actualizados: " );
               
               var i= self.escuelas.indexOf(self.escuela);
               
                self.escuela = response.data;
                self.escuelas[i]=response.data;
                
            }).catch(function (response) {

            });
            
            
            

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
        };






    }
})();
