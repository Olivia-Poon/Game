// // Make panda jump when press button
// //math.random to randomly make leopard and points appear
// //leopard randomly appear (boss) DONE
// //make score and lives go up/down

// //problems: 
// //window is laggy when the point moves across the screen (too much animation)
// //how to write code when images intersect ("collide")

// //repeat background
// var posX = 0;
// var speed = 2;
// var points = 0;
// var scroller = function() {
// 	posX -= speed;
// 	$('body').css('background-position', posX+'px 0');

// 	$('.leopard').delay(random).animate({right: "+=3000"}, 2500).fadeOut(500,0).animate({right: "-=3000"}, 500).fadeIn(500,0);

// 	$('.point').delay(random).animate({right: "+=3000"}, 5500).fadeOut(500,0).animate({right: "-=3000"}, 5000).fadeIn(500,0);



// 		if ($('.leopard').position().left == 0 && $('.panda').position().left == 0){
// 		$('body').stop();


// 	}

// 	if ($('.point').position().left == 0 && $('.panda').position().bottom == 250){

// 	}
// }







// //generates random number between 1-5 seconds
// var random= Math.floor((Math.random() *5000) +1000); 

// $(document).ready(function() {          
// 	//window.alert("How to Play: Collect the bamboo to earn points! If the leopard touches you gameover! Click anywhere on the window to get the Panda to jump to avoid the leopard. Try to get as many points as you can");          
// 	$('h1').fadeOut('slow'); 
// 	setInterval(scroller,5);


// 	//makes panda jump on click
// 	$(window).on('click', function(){
// 		$('.panda').animate({bottom: "+=250"}, 500).animate({bottom: "-=250"}, 500)
// 	})

	

// });



// Make panda jump when press button
// math.random to randomly make leopard and points appear
// leopard randomly appear (boss) DONE
// make score and lives go up/down

// problems: 
// window is laggy when the point moves across the screen (too much animation)
// how to write code when images intersect ("collide")

// repeat background
var posX = 0;
var speed = 3;

var interval1, interval2;

//generates random number between 7-9 seconds
var random= Math.floor((Math.random() *7000) +2000); 

var counter =0;

// Increment Point counter
var point = function() {
    counter++;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
}

// Leopard ia running towards Panda
var scroller = function() {
	posX -= speed;
	$('body').css('background-position', posX+'px 0');

	$('.leopard').delay(random).animate({right: "+=2000"}, 2500).fadeOut(500,0).animate({right: "0"}, 500).fadeIn(500,0);
	
	if ($('.leopard').position().left <= 250 && $('.panda').position().top < 680) {
         // Panda jump      
	}
	else if ($('.leopard').position().left <= 250 && $('.panda').position().left == 0) {
               stopGame();      // Panda got hit
	}

}


// Start Game
var startGame = function() {
	interval1 = setInterval(scroller, 5);
}

// Stop Game
var stopGame = function() {
		clearInterval(interval1);

		// Stop Point Count
		clearInterval(interval2);

		$('.leopard').stop(true, true).fadeOut('fast');
		$('.panda').css("display", "none");
		$('.stop').show();
}

// Start Game when document is ready
$(document).ready(function() {
	$('.instruct').delay(2000);
	$('.instruct').fadeOut('slow'); 

	//makes panda jump on click
	$(window).on('click', function(){
		$('.panda').animate({bottom: "+=250"}, 500).animate({bottom: "-=250"}, 500);
	})

 	interval2 = setInterval(point, 1000);
    startGame();

});



