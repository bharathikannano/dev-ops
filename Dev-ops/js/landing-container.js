$(document).ready(function() {
    //  $('#datetimepicker1').datetimepicker();
    $(".container").load("/templates/studentform.html", function(data) {

        $('#datetimepicker1, #datetimepicker2').datetimepicker({
            format: 'YYYY-MM-DD',
        }).data('autoclose', true);
    });
    // $(".container").load("/templates/position-form.html", function(data) {

    //     $('#datetimepicker1').datetimepicker({
    //         format: 'YYYY-MM-DD',
    //     }).data('autoclose', true);
    // });




});