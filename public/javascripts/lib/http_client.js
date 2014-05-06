define(function(){  
  "use strict";

  function HTTPClient(){};
  HTTPClient.prototype.get = function(path){
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, true);
      xhr.onload = function(e) {
        if (this.status == 200) {
          try {
            var results = JSON.parse(this.responseText);
            resolve(results);
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error('HTTP '+this.status+' not supported'));
        }
      };
      xhr.onerror = function(error){
        reject(error);
      };
      xhr.send();
    });
  };
  return HTTPClient;
});
