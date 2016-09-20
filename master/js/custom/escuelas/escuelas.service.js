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
            },
            del_escuela: function (id_escuela) {
                return $http.delete(url + 'escuelas/' + id_escuela);
            },
            update_escuela: function (id_escuela, escuela) {
                return $http.put(url + 'escuelas/'+ id_escuela, {escuela: escuela});
            }
        };
    }

})();
