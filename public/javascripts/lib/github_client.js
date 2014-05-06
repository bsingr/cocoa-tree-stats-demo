define(['lib/http_client'], function(HTTPClient){
  "use strict";

  function GitHubClient(){
    this.useRealAPI();
  };
  GitHubClient.prototype = new HTTPClient();
  GitHubClient.prototype.useRealAPI = function() {
    this.endpoint = 'https://api.github.com'
    this.routes = {
      searchRepositories: '/search/repositories?in=name&q={{query}}',
      commitActivity: '/repos/{{repoName}}/stats/commit_activity'
    };
  };
  GitHubClient.prototype.useFakeAPI = function() {
    this.endpoint = '';
    this.routes = {
      searchRepositories: '/github-fake-api/search.json',
      commitActivity: '/github-fake-api/commit_activity.json'
    };
  };
  GitHubClient.prototype.buildURL = function(routeName, options) {
    var route = this.routes[routeName];
    var path = route;
    for (var key in options) {
      path = path.replace('{{'+key+'}}', options[key]);
    }
    return this.endpoint + path;
  }
  GitHubClient.prototype.commitActivity = function(repoName) {
    return this.get(this.buildURL('commitActivity', {repoName: repoName}));
  };
  GitHubClient.prototype.searchRepositories = function(query) {
    return this.get(this.buildURL('searchRepositories', {query: query}));
  }
  return GitHubClient;
});
