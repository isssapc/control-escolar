
// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

(function () {
    'use strict';

    angular
            .module('app.logic')
            .controller('DatosGeneralesCtrl', Controller);

    Controller.$inject = ['$log', 'AlumnosSrv', 'datos_generales', 'escuelas'];
    function Controller($log, AlumnosSrv, datos_generales, escuelas) {
        console.log("Controlador Alumnos");
        var self = this;
        self.datos_generales = datos_generales.data;

        self.escuelas = escuelas.data;
        self.escuela_sel = self.escuelas[0].escuela;
        self.alumno_sel={};
        
        
        self.seleccionar_alumno=function(a){
          self.alumno_sel=a;
          
           angular.forEach(self.datos_generales, function (alumno) {
                alumno.selected = false;
            });
          
          a.selected=true;
        };


//        self.get_datos_generales = function () {
//            AlumnosSrv.get_datos_generales().then(function (response) {
//                self.datos_generales = response.data;
//            });
//        };
//
//
//        self.get_datos_generales();






    }
})();
