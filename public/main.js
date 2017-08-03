$(window).scroll(function(){
    wScroll = $(window).scrollTop();
    console.log(wScroll);

    if(wScroll > 30){
        $(".main-nav").addClass("change-bg");
    } else {
        $(".main-nav").removeClass("change-bg");

    }
});



$(".our-video").click(function(){
    alert("y");
});