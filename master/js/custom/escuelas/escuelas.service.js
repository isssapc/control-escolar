/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function () {
    'use strict';

    angular
            .module('app.logic')
            .service('EscuelaSrv', Escuelas);

    Escuelas.$inject = ['$http', 'URL_API'];
    function Escuelas($http, URL_API) {
        var url = URL_API;
        return {
            get_escuelas: function () {
                return $http.get(url + 'escuelas');
            }
        };
    }

})();
