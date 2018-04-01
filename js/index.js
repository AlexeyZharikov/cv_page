$(document).ready(function() {
    $(".cv").on('click', function() {
        $("#text").addClass('cv');
        $("#text").load('ajax/cv.html');
    })
});
