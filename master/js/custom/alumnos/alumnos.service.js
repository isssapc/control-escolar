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
            get_alumnos: function () {
                return $http.get(url + 'alumnos_generales');
            }
        };
    }

})();
