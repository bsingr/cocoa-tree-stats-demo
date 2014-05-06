define(['lib/http_client'], function(HTTPClient){
  "use strict";

  describe('HTTPClient', function(){
    var example = new HTTPClient();
    it('exists', function() {
      expect(example).to.exist;
    });
    it('is an instance of HTTPClient', function(){
      expect(example).to.be.an.instanceof(HTTPClient);
    });
    it('executes GET requests and parses JSON responses', function(done){
      expect(example.get('/javascripts/specs/assets/example.json'))
        .to.eventually.eql({"example": "hello world"}).notify(done)
    });
    it('handles HTTP response errors', function(done){
      expect(example.get('/wrong/path'))
        .to.eventually.be.rejected.notify(done)
    });
    it('handles JSON parser errors', function(done){
      expect(example.get('/javascripts/specs/assets/broken.json'))
        .to.eventually.be.rejected.notify(done)
    });
  });
});
