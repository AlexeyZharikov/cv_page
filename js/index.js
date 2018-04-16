$(document).ready(function() {
    function contClear() {
        $('.text').empty();
    }
    $('.nav-main').on('click', function() {
        contClear();
        $('.nav-projects, .nav-contacts, .nav-cv').removeClass('active');
    });
    $('.cv, .nav-cv').on('click', function() {
        contClear();
        $(".nav-projects, .nav-contacts").removeClass('active');
        $(".nav-cv").addClass('active');
        $(".text").load('ajax/cv.html .cv_page');
    });
    $(".projects, .nav-projects").on('click', function() {
        contClear();
        $(".nav-cv, .nav-contacts").removeClass('active');
        $(".nav-projects").addClass('active');
        $(".text").load('ajax/cv.html .projects_page');
    });
    $(".contact, .nav-contacts").on('click', function() {
        contClear();
        $(".nav-projects, .nav-cv").removeClass('active');
        $(".nav-contacts").addClass('active');
        $(".text").load('ajax/cv.html .contacts_page');
    });
    
    

});
