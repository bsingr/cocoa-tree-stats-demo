define(function(){
  "use strict";
  function Graph(){};
  Graph.prototype.render = function(weeks) {
    var commitsPerWeek = weeks.map(function(week, i){
      return {
        week: i,
        commits: week.total
      }
    });
    $('#graph').empty();
    Morris.Bar({
      element: 'graph',
      data: commitsPerWeek,
      xkey: 'week',
      ykeys: ['commits'],
      labels: ['No. of commits during this week']
    });
  };
  return Graph;
});
