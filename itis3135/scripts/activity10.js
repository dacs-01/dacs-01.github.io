// The majority of this starter code came from the Chapter 8 slides from Murach's textbook
$(document).ready(function() {
    // preload the image for each link
    // Targets image_list id and a element
    $("#image_list a").each(function()
    {
            var swapped = new Image();
            swapped.src = $(this).attr("href");
    });

    // set up the event handlers for each link
    $("#image_list a").click(function(evt)
    {
            // get the image URL and caption for each image and animate the caption
            var imgURL = $(this).attr("href");
            var title = $(this).attr("title");
            //FadeOut help found here: https://api.jquery.com/fadeout/#:~:text=The%20.,slower%20animations%2C%20not%20faster%20ones.
            //fades out image then runs function to fade in image
            $("#image").fadeOut(3000, function(){
                    $("#image").attr("src", imgURL).fadeIn(3000);
            });
            //fades out caption and then runs function to fade in caption also changes font size to 2.0 em
            $("#title").fadeOut(3000, function(){
                    $("#title").text(title).fadeIn(3000);
                    // Changing font size found here: https://www.geeksforgeeks.org/how-to-change-font-size-using-jquery/
                    $("#title").css("font-size", "3px");
            })
            // cancel the default action of each link
            evt.preventDefault();
    });
// move the focus to the first link
//targest first item in list that is an a element
$("li:first-child a").focus();
}); // end ready