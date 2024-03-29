// I used this script from W3Schools, shout out to them for the inspiration!
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = $(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    $('#' + tabName)[0].style.display = "block";
    evt.currentTarget.className += " active";
    }

    $("#defaultOpen")[0].click();

    // ------------------------- Slideshow code -------------------------
    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
    let i;
    let slides = $(".slide_img");
    let dots = $(".dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }

    // ------------------------- Image Swap code -------------------------
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

/*------------------------------Automatic Slideshow-------------------------------------------*/
$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        slideWidth: 500,
        slideMargin: 50,
        captions: true,
        randomStart: true,
        moveSlides: 1,
        pause: 3000,
        pager: true,
        pagerType: "short",
        pagerSelector: "#id_pager"
    });
});