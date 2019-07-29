
$(function() {	

	/*модальное окно*/
	var link = $(".menu-link");
	var close = $(".close-menu");
	var menu = $(".small-menu");
	link.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass("menu_active");
	});
	close.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass("menu_active");
	});	

});
