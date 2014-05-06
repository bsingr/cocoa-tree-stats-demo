define(['lib/github_client', 'application/graph'], function(GitHubClient, Graph){
  "use strict";

  return Backbone.Router.extend({
    routes: {
      "": "index",
      "repo/:user/:repo": "graph"
    },
    index: function() {
      this.graph('bsingr', 'cocoa-tree');
    },
    graph: function(user, repo) {
      $('h1').text('Activity of github.com/'+user+'/'+repo)
      var gitHubClient = new GitHubClient();
      var c = this;
      gitHubClient.commitActivity(user+'/'+repo).then(function(data){
        var graph = new Graph();
        graph.render(data);
      }, function(data){
        $('#graph').html("GitHub is generating statistics...");
        setTimeout(function(){
          c.graph(user, repo);
        }, 1000);
      });
    },
    searchRepositories: function(query) {
      var c = this;
      if (query.length) {
        var gitHubClient = new GitHubClient();
        gitHubClient.searchRepositories(query).then(c.renderRepositories,
                                                    c.renderGitHubError);
      } else {
        c.renderRepositories({items: []});
      }
    },
    renderRepositories: function(data) {
      var repositories = data.items;
      var $message = $('#search-results-container .msg').show();
      if (repositories.length > 0) {
        $message.text('Choose a repo:');
      } else {
        $message.text('No repos found.');
      }
      var html = [];
      repositories.forEach(function(repo, i){
        html.push('<a class="list-group-item" href="#/repo/'+repo.full_name+'">'+repo.full_name+'</a>');
      });
      $('#search-results').html(html.join(''));
    },
    renderGitHubError: function(error) {
      $('h1').text('GitHub API Error. Please try again later...');
    }
  });
});
