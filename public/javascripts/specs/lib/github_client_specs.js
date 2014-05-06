define(['lib/github_client'], function(GitHubClient){
  "use strict";

  var fakeGitHubAPI = true;

  describe('GitHubClient', function(){
    var example = new GitHubClient();
    it('exists', function() {
      expect(example).to.exist;
    });
    it('is an instance of GitHubClient', function(){
      expect(example).to.be.an.instanceof(GitHubClient);
    });
    it('builds URL for commitActivity', function(){
      expect(example.buildURL('commitActivity', {"repoName": "foo/bar"}))
        .to.eql('https://api.github.com/repos/foo/bar/stats/commit_activity');
    });
    it('builds URL for searchRepositories', function(){
      expect(example.buildURL('searchRepositories', {"query": "foo"}))
        .to.eql('https://api.github.com/search/repositories?in=name&q=foo');
    });
  });

  describe('GitHub API', function(){
    var example = new GitHubClient();
    if (fakeGitHubAPI) {
      example.useFakeAPI();
    }
    it('calls commitActivity', function(done){
      expect(example.commitActivity('rails/rails'))
        .to.eventually.be.an.instanceof(Array).notify(done)
    });
    it('calls searchRepositories', function(done){
      expect(example.searchRepositories('rails'))
        .to.eventually.be.an.instanceof(Object).notify(done)
    });
  });
});
