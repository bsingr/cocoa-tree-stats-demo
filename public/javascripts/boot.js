define(['application/controller'], function(Controller){
  var controller = new Controller();
  $('#search-field').keypress(function(){
    var query = $(this).val();
    controller.searchRepositories(query);
  });
  Backbone.history.start();
});
