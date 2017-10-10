$(document).ready(function() {


    $('#homeSubmenu li a, #pageSubmenu li a').click(function() {

        $(".container").load($(this).data('val') + ".html", function(data) {
            $('#sidebar').toggleClass('active');
            $('#datetimepicker1, #datetimepicker2').datetimepicker({
                format: 'YYYY-MM-DD',
            }).data('autoclose', true);
        });
        $.ajax({
            crossOrigin: true,
            type: "GET",
            url: "../data/formData.json",
            success: function(data) {
                $.each(data, function(i, item) {
                    $('#' + i).val(item);
                });
            }
        });

    });


});