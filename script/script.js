$(".open-modal").click(function(){
    //$(".modal").css("display","block");
    $(".modal").show();
})
$(".close-modal").click(function(){
    //$(".modal").css("display","none");
    $(".modal").hide();
})

$(".btn-gal").click(function(){
    $(".gal").show();
    $(".notice").hide();
    $(".btn-notice").css("background-color","#cccccc");
    $(".btn-gal").css("background-color","#5f1c25");
})
$(".btn-notice").click(function(){
    $(".notice").show();
    $(".gal").hide();
    $(".btn-notice").css("background-color","#5f1c25");
    $(".btn-gal").css("background-color","#cccccc");
})

$(".gnb>li").mouseenter(function() {
    //$(".sub").show();
    $(".sub").stop().slideDown();
})

$(".gnb>li").mouseleave(function() {
    //$(".sub").hide();
    $(".sub").stop().slideUp();
})