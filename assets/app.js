$(document).ready(function(){
	for(var title in content["left"]){
		$("#left").append("<h3><a>" + title + "</a></h3>");
	}

	for(var title in content["right"]){
		$("#right").append("<h3><a>" + title + "</a></h3>");
	}

});