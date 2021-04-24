$(document).ready(function(){
	// Owl Carousel
	$('.sliders').owlCarousel({
		  loop:true,
		  dots:true,
		  items:1,
		  nav:false,
		  navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		  autoplay:true
	});

	// scroll up plugin
	$('.call_to_action_top').on('click',function() {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	$('#admin').click(function() {
        $('#membername').val('admin');
        $('#password').val('123456');
        $('#password').attr('type','text');
    });

    $('#librarian').click(function() {
        $('#membername').val('librarian');
        $('#password').val('123456');
        $('#password').attr('type','text');
    });

    $('#member').click(function() {
        $('#membername').val('member');
        $('#password').val('123456');
        $('#password').attr('type','text');
    });

    $('#guest').click(function() {
        $('#membername').val('guest');
        $('#password').val('123456');
        $('#password').attr('type','text');
    });

});




