var blueValue = 0;
var alphaValue = 0.5;
var moveUp = 0;
var moveLeft = 0;
var hide = 1;
$(window).scroll(function(){
    wScroll = $(window).scrollTop();
    console.log(wScroll);



    if(wScroll > 30){
        alphaValue += 0.002;
        hide -= 0.08
    } else {
        moveUp = 0;
        alphaValue = 0.5;
        hide = 1;
        $(".change1-overlay").css({
            background:"linear-gradient(rgba(0,0,0,0.5), black)"
        });
        $(".change1").css({
            backgroundPosition: "0px 0px"
        });
        $(".responsive-h1").css({
            opacity: 1
        });
    }
    if(wScroll > 30){
        $(".responsive-h1").css({
           opacity: hide
        });
        $(".main-nav").addClass("change-bg");
        $(".change1-overlay").css({
            background:"linear-gradient(rgba(0,0," + blueValue + "," + alphaValue + "), black)",
        });
        $(".change1").css({
            backgroundPosition: "0px " + 0 + "px"
        });

    } else {
        $(".main-nav").removeClass("change-bg");
        $(".change1").css({
            backgroundPosition: "200px 0px"

    })

    }





});

$(window).on("load", function(){
    $(".our-video").click(function(){
        alert("y");
    });

    $(".main-nav").click(function(){
        $(".dropdown").addClass("add-height");
    });

    $(".fa-times").click(function(){
        $(".dropdown").removeClass("add-height");
    });
    $("a").click(function(){
        $(".dropdown").removeClass("add-height");
    });
});


