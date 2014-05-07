define(['application/controller'], function(Controller){
  var controller = new Controller();
  $('#search-field').keypress(function(){
    var query = $(this).val();
    controller.searchRepositories(query);
  });
  $('#use-fake-api').change(function(){
    var useFakeAPI = $(this).is(':checked');
    controller.setUseFakeAPI(useFakeAPI);
  }).change();
  Backbone.history.start();
});
