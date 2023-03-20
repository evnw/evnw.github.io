$(document).ready(function () {
    $("#content").load("intro.html");
    $("a").click(function () {
        link = $(this).attr("href");
        $("#content").load(link);
        return false;
    });
});

