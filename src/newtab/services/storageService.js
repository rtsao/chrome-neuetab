var angular = require('angular');

module.exports = angular.module('app.storageService', [])
  .service('storageService', ['$q', function ($q) {

    return {

      getItem: function(key) {
        console.log('getitem',key);
        var obj = localStorage.getItem(key);

        if (!obj) {
          return;
        }

        obj = JSON.parse(obj);
        console.log('OBJ',obj);

        if ( Date.now() > obj.expires ) { //false if expires undefined
          return;
        }
        else {
          return JSON.parse(obj.data);
        }
      },
      setItem: function(key, value, ttl) {
        console.log('saveitem',key,value,ttl);

        var expires;

        if (ttl) {
          expires = ttl + Date.now();
        }

        var obj = {
          data: JSON.stringify(value),
          expires: expires
        }
        localStorage.setItem(key, JSON.stringify(obj));
      }


    }

  }])