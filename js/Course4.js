/**
 * Created by khoale on 9/17/16.
 */
// this is the Course Selection for senior CS major

$(document).ready(function () {
    var CS100 = new Course('CS100', 'easy', 1, false);
    var CS310 = new Course('CS310', 'Challenging', 8, false);

    var seniorFall = [
        ['Class', 'Difficulty'], ['CS 495', 5]
    ];

    var count = 5;
    var ranking = new Array(0);
    var courseName = new Array(0);
    var numberofCourse;
    var courseCatalog = new Array(0);
    courseCatalog.push(CS495);
    numberofCourse = 1;

    //databases


    $("#cs170").data("level", 3);
    $("#cs170").data("name", 'CS 100');

    $("#cs172").data("level", 3);
    $("#cs172").data("name", 'CS 172');

    $("#cs180").data("level", 4);
    $("#cs180").data("name", 'CS 180');

    $("#cs181").data("level", 5);
    $("#cs181").data("name", 'CS 181');

    $("#cs191").data("level", 5);
    $("#cs191").data("name", 'CS 191');

    $("#cs250").data("level", 5);
    $("#cs250").data("name", 'CS 250');

    $("#cs260").data("level", 5);
    $("#cs260").data("name", 'CS 260');

    $("#cs291").data("level", 6);
    $("#cs291").data("name", 'CS 291');

    $("#cs310").data("level", 10);
    $("#cs310").data("name", 'CS 310');

    $("#cs330").data("level", 8);
    $("#cs330").data("name", 'CS 330');

    $("#cs345").data("level", 6);
    $("#cs345").data("name", 'CS 345');

    $("#cs315").data("level", 6);
    $("#cs315").data("name", 'CS 315');

    $("#cs325").data("level", 7);
    $("#cs325").data("name", 'CS 325');

    $("#cs370").data("level", 7);
    $("#cs370").data("name", 'CS 370');

    $("#cs380").data("level", 8);
    $("#cs380").data("name", 'CS 380');

    $("#cs420").data("level", 9);
    $("#cs420").data("name", 'CS 420');

    $("#cs435").data("level", 9);
    $("#cs435").data("name", 'CS 435');

    // add the required courses for freshmen
    var i = 0;
    dragProcess();

    function dragProcess(){
        $("#sortable2").sortable({
            update: function (event, ui) {
                // var order = $(this).data();
                // alert($(event.relatedTarget)).data();
                // var number = ui.item.index();
                var n = ui.item.data("level");
                courseName[i] = ui.item.data("name");
                ranking[i] = ui.item.data("level");
                i++;
                count+=n;
                $("#totalScore").text(count);
                numberofCourse++;
                updateGraph();
            }
        });
    }

    function updateGraph() {

        if (numberofCourse == 7) window.alert("You've reached the maximum number of classes per semester.");
        google.charts.load('current', {
            'packages': ['corechart']
        });

        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable(seniorFall);
            for(s = 0; s < ranking.length; s++){
                data.addRow([''+courseName[s], ranking[s]]);
            }
            var options = {
                title: 'Effort proportion for each class',
                pieHole: 0.4,
                'tooltip' : {
  					text: 'percentage'
				}
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        }
    }


   function printArray() {
       window.alert(courseName.toString());
       window.alert(ranking.toString());
   }

  $("#maxGPA").click(function () {
      document.getElementById("cs330").style.display="none";
      document.getElementById("cs310").style.display="none";
      document.getElementById("cs345").style.display="none";
      document.getElementById("cs315").style.display="none";
      document.getElementById("cs325").style.display="none";
      document.getElementById("cs370").style.display="none";
      document.getElementById("cs380").style.display="none";
      document.getElementById("cs420").style.display="none";
      document.getElementById("cs435").style.display="none";
      document.getElementById("cs390").style.display="none";
  });

    $("#even").click(function () {
      document.getElementById("cs330").style.display="none";
      document.getElementById("cs310").style.display="none";
      document.getElementById("cs345").style.display="none";
      document.getElementById("cs315").style.display="none";
      document.getElementById("cs325").style.display="none";
      document.getElementById("cs370").style.display="none";
      document.getElementById("cs380").style.display="none";
      document.getElementById("cs420").style.display="none";
      document.getElementById("cs435").style.display="none";
      document.getElementById("cs390").style.display="none";
    });

    $("#einstein").click(function () {
      document.getElementById("cs330").style.display="none";
      document.getElementById("cs310").style.display="none";
      document.getElementById("cs345").style.display="none";
      document.getElementById("cs315").style.display="none";
      document.getElementById("cs325").style.display="none";
      document.getElementById("cs370").style.display="none";
      document.getElementById("cs380").style.display="none";
      document.getElementById("cs420").style.display="none";
      document.getElementById("cs435").style.display="none";
      document.getElementById("cs390").style.display="none";
    });



});

function  Course (name, description, difficulty, taken, credit) {
    this.name = name;
    this.description = description;
    this.difficulty  = difficulty;
    this.credit = credit;
    this.taken = false;
    this.getInfo = function () {
        return this.name + ' ' + this.description +' '+ this.difficulty;
    };
    this.getName = function () {
        return this.name;
    };
    this.getDescription = function () {
        return this.description;
    };
}
