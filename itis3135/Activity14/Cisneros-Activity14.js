$(document).ready(function() {
    $("#nav_list li").click(function() {
        var speaker = $(this).children("a").attr("title");
        $.ajax({
            type: "get",
            url: "json_files/" + speaker + ".json",
            success: function(data){
                $("main").html("");
                $.each(data, function(){
                    $.each(this, function(key, val){
                        $("main").append(
                            $("<h1>" + val.title + "</h1>" + "<h2>" + val.month + "</h2>" + "<h3>" + val.speaker + "</h3>"
                            + "<img src=" + val.image + ">" + "<p>" + val.text + "</p>")
                        );
                    })
                })
            }
        });
    });
}); // end ready