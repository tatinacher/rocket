$(document).ready(function() {
    $(".toggle-btn").click(function() {
        $(this).closest(".question").find(".question__text").toggleClass("hidden");  
        $(this).find(".icon").toggleClass("close");  
    });
    $(".nav-item").click(function() {
        $(".nav-item").each(function() {
            $(this).removeClass("active");
          })
        $(this).toggleClass("active");
    });
    $(".burger-btn").click(function() {
        //$(this).closest(".question").find(".question__text").toggleClass("hidden");  
        //$(this).find(".icon").toggleClass("close");  
    });
});