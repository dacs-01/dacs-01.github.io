$(document).ready(function(){
        $.ajax({
            type: "get",
            url: "facultyList.json",
            success: function(data){
                $("main").html("");
                $.each(data, function(){
                    $.each(this, function(key, val){
                        $("main").append(
                            $("<h2>" + val.full_name + "</h2>" + "<h3>" + val.department + "</h3>"
                            + "<img src=" + val.image + ">" + "<p>" + val.bio + "</p>")
                     );
                })
            })
        }
    });
});
