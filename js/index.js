$(document).ready(function() {
    function contClear() {
        $(".text").empty();
    }
    $(".cv").on('click', function() {
        contClear();
        $(".text").load('ajax/cv.html .cv_page');
    })
    $(".projects").on('click', function() {
        contClear();
        $(".text").load('ajax/cv.html .projects_page');
    })
    $(".main").on('click', function(){
        return ('index.html');
    })
});
