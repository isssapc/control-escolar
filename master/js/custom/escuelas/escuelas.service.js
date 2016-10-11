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
            
            add_escuela: function (escuela) {
                return $http.post(url + 'escuelas/nuevo', {escuela: escuela});
            },
            
            del_escuela: function (id_escuela) {
                return $http.delete(url + 'escuelas/' + id_escuela);
            },
            update_escuela: function (id_escuela, escuela) {
                return $http.put(url + 'escuelas/' + id_escuela, {escuela: escuela});
            }
        };
    }

})();
