function toggleIcon(element) {
    var imgElement = document.getElementById('menuIcon');
    if (imgElement.src.includes('menu-1.svg')) {
      imgElement.src = 'Assets/Images/close-circle.svg'; // Path to the other icon
    } else {
      imgElement.src = 'Assets/Images/menu-1.svg'; // Path to the original icon
    }
  }
$(window).scroll(function(){
    if($(this).scrollTop() > 0.001){
        $('#head').addClass('sticky')
    } else{
        $('#head').removeClass('sticky')
    }
});
$(document).ready(function() {
    $('.scroll-link').on('click', function(event) {
        event.preventDefault();
        var targetId = $(this).attr('href').substring(1);
        var targetElement = $('#' + targetId);
        if (targetElement.length) {
            var offset = 120;
            var elementPosition = targetElement.offset().top;
            var offsetPosition = elementPosition - offset;

            $('html, body').animate({
                scrollTop: offsetPosition
            }, 500);
        } else {
            console.error('Element with ID ' + targetId + ' not found.');
        }
    });

    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop();
        $('.scroll-link').each(function() {
            var targetId = $(this).attr('href').substring(1);
            var targetElement = $('#' + targetId);
            if (targetElement.length) {
                var elementTop = targetElement.offset().top - 200;
                var elementBottom = elementTop + targetElement.outerHeight();
                if (scrollPos >= elementTop && scrollPos < elementBottom) {
                    $('.scroll-link').removeClass('active');
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            }
        });
    });
});