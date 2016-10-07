$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});


$('.injuries').click(function() {
  $('.hidden-inj').toggle(300);

  
  });

$('.injuries1').click(function() {
  $('.hidden-inj1').toggle(300);
  $('.hidden-ili1').hide(100);
  
  });

$('.injuries2').click(function() {
  $('.hidden-inj2').toggle(300);
  $('.hidden-advCare').hide(300);
  $('.hidden-ili2').hide(100);
  
});

$('.illiness1').click(function() {
  $('.hidden-ili1').toggle(300);
  $('.hidden-inj1').hide(300);
  
  });

$('.illiness2').click(function() {
  $('.hidden-ili2').toggle(300);
  $('.hidden-inj2').hide(300);
  $('.hidden-advCare').hide(300);
  
  });


$('.advance').click(function() {
  $('.hidden-advCare').toggle(300);
  $('.hidden-inj2').hide(300);
  $('.hidden-ili2').hide(300);  
  });

$('.utiS').hover(function(){
  $('#red-hidden-utis').toggle();
})

$('.upset').hover(function(){
  $('#red-hidden-upset').toggle();
})

$('.renal').hover(function(){
  $('#red-hidden-renal').toggle();
})

$('.hiarrhea').hover(function(){
  $('#red-hidden-diarrhea').toggle();
})

$('.allergies').hover(function(){
  $('#red-hidden-allergies').toggle();
})

$('.diabetes').hover(function(){
  $('#red-hidden-diabetes').toggle();
})

$('.colitis').hover(function(){
  $('#red-hidden-colitis').toggle();
})

$('.ear').hover(function(){
  $('#red-hidden-ear').toggle();
})

$('.uriS').hover(function(){
  $('#red-hidden-uris').toggle();
})

$('.hyper').hover(function(){
  $('#red-hidden-hyper').toggle();
})

$('.y-utis').hover(function(){
  $('#yellow-hidden-utis').toggle();
})

$('.y-upset').hover(function(){
  $('#yellow-hidden-upset').toggle();
})

$('.y-renal').hover(function(){
  $('#yellow-hidden-renal').toggle();
})

$('.y-diarrhea').hover(function(){
  $('#yellow-hidden-diarrhea').toggle();
})

$('.y-allergies').hover(function(){
  $('#yellow-hidden-allergies').toggle();
})

$('.y-diabetes').hover(function(){
  $('#yellow-hidden-diabetes').toggle();
})

$('.y-colitis').hover(function(){
  $('#yellow-hidden-colitis').toggle();
})


$('.y-ear').hover(function(){
  $('#yellow-hidden-ear').toggle();
})

$('.y-uris').hover(function(){
  $('#yellow-hidden-uris').toggle();
})

$('.y-hyper').hover(function(){
  $('#yellow-hidden-hyper').toggle();
})

$('.b-ear').hover(function(){
  $('#blue-hidden-ear').toggle();
})

$('.b-allergies').hover(function(){
  $('#blue-hidden-allergies').toggle();
})

$('.b-skin').hover(function(){
  $('#blue-hidden-skin').toggle();
})

$('.b-upset').hover(function(){
  $('#blue-hidden-upset').toggle();
})

$('.b-diarrhea').hover(function(){
  $('#blue-hidden-diarrhea').toggle();
})

$('.b-bladder').hover(function(){
  $('#blue-hidden-bladder').toggle();
})

$('.b-eye').hover(function(){
  $('#blue-hidden-eye').toggle();
})

$('.b-arth').hover(function(){
  $('#blue-hidden-arth').toggle();
})

$('.b-hypo').hover(function(){
  $('#blue-hidden-hypo').toggle();
})

$('.b-sprains').hover(function(){
  $('#blue-hidden-sprains').toggle();
})

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

  
  
});


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}