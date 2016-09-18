 // Sample data
 var freshmanFall = [
        ['Class', 'Difficulty'],
        ['CS 100', 1],
        ['CS 180', 2],
        ['Art', 1],
        ['History', 1],
        ['JINS', 1]
      ];

      var freshmanSpring = [
        ['Class', 'Difficulty'],
        ['CS 100', 7],
        ['CS 180', 2],
        ['Clown', 10],
        ['History', 1],
        ['JINS', 1]
      ];

      google.charts.load('current', {
        'packages': ['corechart']
      });

      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable(freshmanFall);

        var options = {
          title: 'Fall',
          pieHole: 0.4,
          'tooltip' : {
  					text: 'percentage'
					}
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {

        var data2 = google.visualization.arrayToDataTable(freshmanSpring);

        var options2 = {
          title: 'Spring',
          pieHole: 0.4,
          'tooltip' : {
  					text: 'percentage'
					}
        };

        var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));

        chart2.draw(data2, options2);
      }