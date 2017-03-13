var song = document.getElementById("song");
song.volume = .05;
song.loop = true;

var yoshisound = document.getElementById("yoshisound");
yoshisound.volume = .1;

var yrdamage = 0;
var yrdamagebase = 0;
var wins = 0;

$("#char1").click(function() {
	$("#yrchar").append($("#char1"));
	$("#enemy1").append($("#char2"));
	$("#enemy2").append($("#char3"));
	$("#enemy3").append($("#char4"));
	$("#char2").css("border-color", "red");
	$("#char3").css("border-color", "red");
	$("#char4").css("border-color", "red");
	$("#char1").unbind();
	$("#char2").unbind();
	$("#char3").unbind();
	$("#char4").unbind();
	yrdamagebase = 8;
});

$("#char2").click(function() {
	$("#yrchar").append($("#char2"));
	$("#enemy1").append($("#char1"));
	$("#enemy2").append($("#char3"));
	$("#enemy3").append($("#char4"));
	$("#char1").css("border-color", "red");
	$("#char3").css("border-color", "red");
	$("#char4").css("border-color", "red");
	$("#char1").unbind();
	$("#char2").unbind();
	$("#char3").unbind();
	$("#char4").unbind();
	yrdamagebase = 10;
});

$("#char3").click(function() {
	$("#yrchar").append($("#char3"));
	$("#enemy1").append($("#char1"));
	$("#enemy2").append($("#char2"));
	$("#enemy3").append($("#char4"));
	$("#char1").css("border-color", "red");
	$("#char2").css("border-color", "red");
	$("#char4").css("border-color", "red");
	$("#char1").unbind();
	$("#char2").unbind();
	$("#char3").unbind();
	$("#char4").unbind();
	yrdamagebase = 20;
});

$("#char4").click(function() {
	$("#yrchar").append($("#char4"));
	$("#enemy1").append($("#char1"));
	$("#enemy2").append($("#char2"));
	$("#enemy3").append($("#char3"));
	$("#char1").css("border-color", "red");
	$("#char2").css("border-color", "red");
	$("#char3").css("border-color", "red");
	$("#char1").unbind();
	$("#char2").unbind();
	$("#char3").unbind();
	$("#char4").unbind();
	yrdamagebase = 15;
});

$("#enemy1").click(function (){
	$("#defender").append($("#enemy1"));
	$("#enemy1").unbind();
	$("#enemy2").unbind();
	$("#enemy3").unbind();
	$("#attack").click(function() {game()});
});

$("#enemy2").click(function (){
	$("#defender").append($("#enemy2"));
	$("#enemy1").unbind();
	$("#enemy2").unbind();
	$("#enemy3").unbind();
	$("#attack").click(function() {game()});
});

$("#enemy3").click(function (){
	$("#defender").append($("#enemy3"));
	$("#enemy1").unbind();
	$("#enemy2").unbind();
	$("#enemy3").unbind();
	$("#attack").click(function() {game()});
});

function game() {
	yoshisound.play();
	yrdamage = yrdamage + yrdamagebase;
	$("#defender .hp").text($("#defender .hp").text() - yrdamage);
	$("h3").text("You did " + yrdamage + " damage!");
	if ($("#defender .hp").text() <= 0 && wins == 2) {
		$("#defender .hp").text(0);
		$("h4").text("You defeated all the enemies! You are the best Yoshi!");
		$("#attack").unbind();
		$("#playagain").text("Click here to play again!");
		$("#gif").attr("src", "assets/images/yoshieatsmario.gif");
		$("#playagain").click(function () {location.reload();});
		$("#gif").click(function () {location.reload();});
	}
	else if ($("#defender .hp").text() <= 0) {
		$("#defender .hp").text(0);
		$("h4").text("You defeated " + $("#defender .name").text() + "! Pick another foe!");
		wins++;
		$("#attack").unbind();
			$("#enemy1").click(function (){
				$("#defender").html($("#enemy1"));
				$("#enemy1").unbind();
				$("#enemy2").unbind();
				$("#enemy3").unbind();
				$("#attack").click(function() {game()});
			});

			$("#enemy2").click(function (){
				$("#defender").html($("#enemy2"));
				$("#enemy1").unbind();
				$("#enemy2").unbind();
				$("#enemy3").unbind();
				$("#attack").click(function() {game()});
			});

			$("#enemy3").click(function (){
				$("#defender").html($("#enemy3"));
				$("#enemy1").unbind();
				$("#enemy2").unbind();
				$("#enemy3").unbind();
				$("#attack").click(function() {game()});
			});
	}
	else if ($("#defender .name").text() == "Red Yoshi") {
		$("#yrchar .hp").text($("#yrchar .hp").text() - 10);
		$("h4").text("Red Yoshi attacked you with 10 damage!");
	}
	else if ($("#defender .name").text() == "Blue Yoshi") {
		$("#yrchar .hp").text($("#yrchar .hp").text() - 7);
		$("h4").text("Blue Yoshi attacked you with 7 damage!");
	}
	else if ($("#defender .name").text() == "Yellow Yoshi") {
		$("#yrchar .hp").text($("#yrchar .hp").text() - 19);
		$("h4").text("Yellow Yoshi attacked you with 19 damage!");
	}
	else if ($("#defender .name").text() == "Green Yoshi") {
		$("#yrchar .hp").text($("#yrchar .hp").text() - 16);
		$("h4").text("Green Yoshi attacked you with 16 damage!");
	}
	if ($("#yrchar .hp").text() <= 0) {
		$("#yrchar .hp").text(0);
		$("h3").text("You lost! You are the worst Yoshi!");
		$("#playagain").text("Click here to play again!");
		$("#gif").attr("src", "assets/images/yoshieatsmario.gif");
		$("#playagain").click(function () {location.reload();});
		$("#gif").click(function () {location.reload();});
		$("#attack").unbind();
	}
}