/**
 * Created by khoale on 9/17/16.
 */
$(document).ready(function () {
    var CS100 = new Course('CS100', 'easy', 1, false);
    var CS310 = new Course('CS310', 'Challenging', 8, false);

    var courseCatalog = new Array(0);
    courseCatalog.push(CS100);
    courseCatalog.push(CS310);


    $("#cs310").data("level", 8);
    $("#cs260").data("level", 3);
    var a = $("#cs310").data().level;
    var b = $("#cs260").data().level;
    // window.alert(a+b);
    var count = 7;
    var courseAdded = new Array(0);

    dragProcess();

    function dragProcess(){
        $("#sortable2").sortable({
            update: function (event, ui) {
                // var order = $(this).data();
                // alert($(event.relatedTarget)).data();
                // var number = ui.item.index();
                var n = ui.item.data("level");
                count+=n;
                $("#totalScore").text(count);
            }
        });

        // $("#sortable1").sortable({
        //     update: function (event, ui) {
        //         var n = ui.item.data("level");
        //         // ui.item.data("level", 100);
        //         // var n = ui.item.data("level");
        //         count-=n;
        //         $("#totalScore").text(count);
        //     }
        // });
    }



    // $(function(){
    //     $('[data-toggle="popover"]').popover({
    //         html:true
    //     });
    // });
});

function  Course (name, description, difficulty, credits) {
    this.name = name;
    this.description = description;
    this.difficulty  = difficulty;
    this.taken = false;
    this.credits = credits;
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