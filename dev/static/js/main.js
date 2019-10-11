$(document).ready(function() {
    $(".toggle-btn").click(function() {
        $(".question__text").each(function() {
            $(this).addClass("hidden");
        })
        $(this).closest(".question").find(".question__text").toggleClass("hidden");  
        $(this).find(".icon").toggleClass("close");  
    });
    $(".nav-item").click(function() {
        $(".nav-item").each(function() {
            $(this).removeClass("active");
        });
        $(this).toggleClass("active");
    });
    $(".mobile-menu-burger").click(function() {
        $(".mobile-nav").toggleClass("active");  
        $(this).find(".burger-btn").toggleClass("close");  
        $(".content-wrapper").each(function() {
            $(this).toggleClass("hidden");
        });
    });
    $(document)
    .on('click', 'a[href^="#"]', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body')
            .animate({
                scrollTop: $(target).offset().top}, 'slow', 'swing', function() {});
    });
});