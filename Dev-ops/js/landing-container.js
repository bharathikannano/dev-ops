$(document).ready(function() {
    //  $('#datetimepicker1').datetimepicker();
    // $(".container").load("/templates/new-events.html", function(data) {
    //
    //     $('#datetimepicker1, #datetimepicker2').datetimepicker({
    //         format: 'YYYY-MM-DD',
    //     }).data('autoclose', true);
    // });event/edit-events.html
// $(".container").load("/templates/student/new-studentForm.html", function(data) {
//
//     $('#datetimepicker1, #datetimepicker2').datetimepicker({
//         format: 'YYYY-MM-DD',
//     }).data('autoclose', true);
// });

$('#homeSubmenu li a, #pageSubmenu li a').click(function() {
    //alert($(this).data('val'));

$(".container").load($(this).data('val') + ".html", function(data) {
$('#sidebar').toggleClass('active');
    $('#datetimepicker1, #datetimepicker2').datetimepicker({
        format: 'YYYY-MM-DD',
    }).data('autoclose', true);
});



});


});
