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
        console.log(123)
        $(".mobile-nav").toggleClass("active");  
        $(this).find(".burger-btn").toggleClass("close");  
        $(".content-wrapper").each(function() {
            $(this).toggleClass("hidden");
          })
        //$(this).find(".icon").toggleClass("close");  
    });
});