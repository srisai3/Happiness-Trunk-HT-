$(window).scroll(function(){
    if($(this).scrollTop() > 1){
        $('#head').addClass('sticky')
    } else{
        $('#head').removeClass('sticky')
    }
});