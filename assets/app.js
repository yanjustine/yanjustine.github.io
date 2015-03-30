$(document).ready(function(){

	var app = {

		showContents: function(side){
			$("#" + side).html("");
			for(var title in content[side]){
				$("#" + side).append("<h3><a class='title'>" + title + "</a></h3>");
			}
			$(".title").click(function(e){
				var side = $(e.target).parent().parent().attr('id');
				app.showProject(side, $(e.target).text(), 0);
			});
		},

		showProject: function(side, title, index){
			var project = "";
			project += "<h5 id='" + side + "-back'><a>Back</a></h5>";
			project += "<h4 class='project'>" + title+ "</h4>";
			var type = content[side][title][index]["type"];
			if(type == "video"){
				project += "<iframe width='560' height='315' src='" + content[side][title][index]["src"]  + "?showinfo=0&modestbranding=1&vq=hd1080' frameborder='0' allowfullscreen></iframe>";
			} else {
				// image
				project += "<div class='image'><img src='" + content[side][title][index]["src"] + "'></div>";
			}
			project += "<h5 class='caption'>" + content[side][title][index]["caption"] + "<h5>";
			$("#" + side).html(project);
			$("#" +side + "-back").click(function(){
				app.showContents(side);
			});
			if (type == "image"){
				$(".image img").click(function(e){
					var side = $(e.target).parent().parent().attr('id');
					app.showProject(side, title, (index + 1) % content[side][title].length);
				});
			}

		},

		init: function(){
			app.showContents("left");
			app.showContents("right");
		}
	};


	app.init();

});
