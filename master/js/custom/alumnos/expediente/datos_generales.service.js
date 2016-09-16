/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function () {
    'use strict';

    angular
            .module('app.logic')
            .service('DatosGeneralesSrv', DatosGenerales);

    Alumnos.$inject = ['$http', 'URL_API'];
    function Alumnos($http, URL_API) {
        var url = URL_API;
        return {
            get_datos_generales: function () {
                return $http.get(url + 'datos_generales');
            }
        };
    }

})();
