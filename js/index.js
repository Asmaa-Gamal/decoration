
var project=document.getElementsByClassName("pro")

console.log(project.offsetHeight);



// init Isotope
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid .col-md-4',
  percentPosition: true,

  
});
// filter items on button click
$('.filter-button-group button').click( function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
//end isotope

$('.owl-carousel').owlCarousel({
	stagePadding:50,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
});

/*start loading*/
$(document).ready(function() {
  
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $(".loading-page .counter h1").html(c + "%");
      $(".loading-page .counter hr").css("width", c + "%");
      //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

    /*
    $(".loading-page .counter h1.color").css("width", c + "%");
    */
    counter++;
    c++;
      
    if(counter == 101) {
        clearInterval(i);
    }
  }, 20);
});
/*start type*/

document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.test', {
        strings: ["WELCOME TO ARCHI ", "AWARDS WINNING ", "INTERIOR DESIGN "],
        stringsElement: null,
		// typing speed
		typeSpeed: 60,
		// time before typing starts
		startDelay: 600,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
      });
  });

/*end typed*/




$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
/*loading*/
$(document).ready(function(){ 
    $(function(){
        $('#slideshow h4').hide();
        setInterval(function(){
          $('#slideshow :first-child').fadeOut(2000)
             .next('h4').fadeIn(2000)
             .end().appendTo('#slideshow');}, 
          3000);
    });
});


$(window).scroll(function(){
	
	let scrollTop =$(window).scrollTop();
	
	if(scrollTop > 600)
		{
			$("#iconTop").fadeIn(500);
		}
	else
	{
		$("#iconTop").fadeOut(500);
	}
});
$('#iconTop').click(function(){
	
	$('body,html').animate({scrollTop:0},2000);
})












/*start counter*/






	










