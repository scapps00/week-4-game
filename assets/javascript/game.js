$("#char1").click(function() {
	$("#yrchar").append($("#char1"));
	$("#enemy1").append($("#char2"));
	$("#enemy2").append($("#char3"));
	$("#enemy3").append($("#char4"));
	$("#char2").css("border-color", "red");
	$("#char3").css("border-color", "red");
	$("#char4").css("border-color", "red");
});

$("#char2").click(function() {
	$("#yrchar").append($("#char2"));
	$("#enemy1").append($("#char1"));
	$("#enemy2").append($("#char3"));
	$("#enemy3").append($("#char4"));
	$("#char1").css("border-color", "red");
	$("#char3").css("border-color", "red");
	$("#char4").css("border-color", "red");
});

$("#char3").click(function() {
	$("#yrchar").append($("#char3"));
	$("#enemy1").append($("#char1"));
	$("#enemy2").append($("#char2"));
	$("#enemy3").append($("#char4"));
	$("#char1").css("border-color", "red");
	$("#char2").css("border-color", "red");
	$("#char4").css("border-color", "red");
});

$("#char4").click(function() {
	$("#yrchar").append($("#char4"));
	$("#enemy1").append($("#char1"));
	$("#enemy2").append($("#char2"));
	$("#enemy3").append($("#char3"));
	$("#char1").css("border-color", "red");
	$("#char2").css("border-color", "red");
	$("#char3").css("border-color", "red");
});