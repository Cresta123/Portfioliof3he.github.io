
$(function() {
	$('#head').mouseover(function() {

		$(this).css({'transform':'rotate(360deg)'})
	})
	$('#head').mouseout(function() {
		
		$(this).css({'transform':'rotate(0deg)'})
	})
})

$(function() {
	$('.imgs-container img').mouseover(function() {
		
		$(this).css({'transform':'scale(1.04)'})
	})
	$('.imgs-container img').mouseout(function() {
		
		$(this).css({'transform':'scale(1)'})
	})
})