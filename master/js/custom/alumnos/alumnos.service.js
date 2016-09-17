/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function () {
    'use strict';
    angular
            .module('app.logic')
            .service('AlumnosSrv', Alumnos);
    Alumnos.$inject = ['$http', 'URL_API'];
    function Alumnos($http, URL_API) {
        var url = URL_API;
        return {
            get_datos_generales: function () {
                return $http.get(url + 'alumnos_generales');
            },
            get_datos_personales: function () {
                return $http.get(url + 'alumnos_personales');
            },
            get_estatus_escolar: function () {
                return $http.get(url + 'alumnos/estatus_escolar');
            }
        };
    }

})();
