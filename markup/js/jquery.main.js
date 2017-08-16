(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('menu-opener')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body].forEach(function (el) {
      el.classList.toggle('menu-open');
    });
  }, false);
})();




// show hide category
if ($(window).width() < 480) {
    $('.proim-right li').css('display', 'none');
    $('.btn-def').html('Посмотреть подкатегории');   
}
else {
        $('.proim-right li').css('display', 'inline-block');
    }
$(window).resize(function() {
    if ($(window).width() < 480) {
        $('.proim-right li').css('display', 'none');
        $('.btn-def').html('Посмотреть подкатегории'); 
    }
    else {
        $('.proim-right li').css('display', 'inline-block');
    }
});
$(document).on('click', '.btn-def', function(){
   var li = $(this).parents('.proim-right').find('li');
   $(this).html(($(this).html() == 'Посмотреть подкатегории') ? 'Скрыть подкатегории' : 'Посмотреть подкатегории')
    toggle(li);
});

function toggle(el) {
    $.each(el, function(index, value) {
      $(this).css('display', ($(this).css('display') == 'none') ? '' : 'none');  
    })
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    startPosition: 0,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1200:{
            items:3
        }
    }
});

// $('.general-nav > li').hover(function(){
//     var widblack = $(this).find('.dropdown-menu').width();
//     var widthContainer = $('.general-nav').width();
//     var posMenu = $(this).position().left;
//     if ((posMenu + widblack) < widthContainer ) {
//          $('.dropdown-menu').css('left', posMenu);
//     }
//     else if ((posMenu + widblack) > widthContainer ) {
//         var posdr = widthContainer - (posMenu + widblack);
//         var posd = posMenu + posdr;
//         if (posd < 0) {
//             posd = 0;
//         }
//          $('.dropdown-menu').css('left', posd);
//     }
//     else {
//         var pos =((posMenu + widblack) - widthContainer);
//         $('.dropdown-menu').css('left', pos);
//     }
// });
//
// $(".general-nav").on('click', function(e) {
//    if( e.which == 2 ) {
//       e.preventDefault();
//       alert("middle button");
//    }
// });




