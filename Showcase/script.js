$(document).ready(function() {
    var title = $(".page-logo");
    var description = $(".page-description");
    var break_line = $(".break-line");

    break_line.delay(300).animate({
        "left": "0",
        "width": "100%"
    }, 500);

    title.delay(800).animate({
        "opacity": 1
    }, 800);

    description.delay(800).animate({
        "opacity": 1
    }, 800);
});