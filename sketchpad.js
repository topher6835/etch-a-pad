$(document).ready(function(){
	createGrid();
});


function createGrid(){
	
	for(var i=0; i<3600; i++){
	$(".screen").append("<div class='square'></div>");
	};

	$(".square").width(10);
	$(".square").height(10);
}

function reset(){
	$(".square").unbind();
	$(".square").remove();
	createGrid();
}

function mouseHover(){
	var originalcolor = [];

	$(".square").unbind();

	$(".square").mouseenter(function(){
		originalcolor[$(this).index('.square')] = $(this).css('background-color');
		$(this).css("background-color", "black");
	});
	$(".square").mouseleave(function(){
		$(this).css("background-color", originalcolor[$(this).index('.square')]);
	});
}

function draw(){
	$(".square").unbind();

	$(".square").mouseenter(function(){
		$(this).css("background-color", "black");
	});
}

function trails(){
	$(".square").unbind();

	$(".square").mouseenter(function(){
		$(this).fadeTo(100, 0);
	});
	$(".square").mouseleave(function(){
		$(this).fadeTo(400, 1);
	});
}

function color(){
	var hexchar = "ABCDEF0123456789";
	var hexcode = "#";

	for (var i=0; i<6; i++)
		hexcode += hexchar.charAt(Math.floor(Math.random() * hexchar.length));

	return hexcode;

}

function addcolor(){
	$(".square").unbind();
	$(".square").mouseenter(function(){
		$(this).css("background-color", color() );
	});

}

function sizeIn(){

	var usersquareH = parseInt(prompt("Enter height of pad in sqaures (max 100): ", 50));
	if(usersquareH<=100){

	$(".square").unbind();
	$(".square").remove();
	var userH = (600 / usersquareH);
	var userW = (600 / usersquareH);
	var count = (360000 / (userH*userH));
	
	
	for(var i=0; i<count; i++){	
	$(".screen").append("<div class='square'></div>");
	};

	$(".square").width(userH);
	$(".square").height(userH);
	}
	else {
		alert("Invalid Input.");
	}
}






