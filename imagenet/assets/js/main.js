$(document).ready(function(){
$('.about').addClass('hide');


	$('.colorbtn-home').click(function(){
		window.scrollTo(0,0);
		$('.description').removeClass('hide')
		$('.item').removeClass('hide');
		$('.leftbox').removeClass('red yellow green clear normal ivory pink');
		$('.leftbox').adClass('normal');
		$('.about').addClass('hide')

}); 

	$('.colorbtn.clear').click(function(){
		window.scrollTo(0,0);
		$('.item').addClass('hide');
		$('.item.clear').removeClass('hide');
		$('.description').addClass('hide');
		$('.leftbox').removeClass('red yellow green clear normal ivory pink');
		$('.leftbox').addClass('clear');
		$('.about').addClass('hide')


	});

	$('.colorbtn.red').click(function(){
		window.scrollTo(0,0);
		$('.item').addClass('hide');
		$('.item.red').removeClass('hide');
		$('.description').addClass('hide');
		$('.leftbox').removeClass('red yellow green clear normal ivory pink');
		$('.leftbox').addClass('red');
		$('.about').addClass('hide')

	});

	$('.colorbtn.yellow').click(function(){
		window.scrollTo(0,0);
		$('.item').addClass('hide');
		$('.item.yellow').removeClass('hide');
		$('.description').addClass('hide');
		$('.leftbox').removeClass('red yellow green clear normal ivory pink');
		$('.leftbox').addClass('yellow');
		$('.about').addClass('hide')

	});

	$('.colorbtn.green').click(function(){
		window.scrollTo(0,0);
		$('.item').addClass('hide');
		$('.item.green').removeClass('hide');
		$('.description').addClass('hide');
		$('.leftbox').removeClass('red yellow green clear normal ivory pink');
		$('.leftbox').addClass('green');
		$('.about').addClass('hide')

	});

	$('.colorbtn.ivory').click(function(){
		window.scrollTo(0,0);
		$('.item').addClass('hide');
		$('.item.ivory').removeClass('hide');
		$('.description').addClass('hide');
		$('.leftbox').removeClass('red yellow green clear normal ivory pink');
		$('.leftbox').addClass('ivory');
		$('.about').addClass('hide')

	});

	$('.colorbtn.pink').click(function(){
		window.scrollTo(0,0);
		$('.item').addClass('hide');
		$('.item.pink').removeClass('hide');
		$('.description').addClass('hide');
		$('.leftbox').removeClass('red yellow green clear normal ivory pink');
		$('.leftbox').addClass('pink');
		$('.about').addClass('hide')

	});

	$('.colorbtn.ivory').click(function(){
		window.scrollTo(0,0);
		$('.item').addClass('hide');
		$('.item.ivory').removeClass('hide');
		$('.description').addClass('hide');
		$('.leftbox').removeClass('red yellow green clear normal ivory pink');
		$('.leftbox').addClass('ivory');
		$('.about').addClass('hide')


	});
	$('.colorbtn-about').click(function(){
		window.scrollTo(0,0);
		$('.item').addClass('hide');
		$('.description').addClass('hide');
		$('.leftbox').removeClass('red yellow green clear normal ivory pink');
		$('.leftbox').addClass('normal');
		$('.about').removeClass('appear hide')
		$('.about').addClass('appear')

	});

});






