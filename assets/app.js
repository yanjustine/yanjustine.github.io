$(document).ready(function(){

	var app = {

		showContents: function(side){
			$("#" + side).html("<br><br>");
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
			var menu = side == "left" ? "Texts" : "Images";
			project += "<h4 id='" + side + "-back'><a><-" + menu +"</a></h4>";
			project += "<h4 class='project'>" + title+ "</h4>";
			var type = content[side][title][index]["type"];
			if(type == "video"){
				project += "<iframe width='560' height='315' src='" + content[side][title][index]["src"]  + "?showinfo=0&modestbranding=1&vq=hd720' frameborder='0' allowfullscreen></iframe>";
				project += "<h5 class='caption'>" + content[side][title][index]["caption"] + "<h5>";
			} else if (type == "image") {
				// image
				project += "<div class='image'><img src='" + content[side][title][index]["src"] + "'></div>";
				project += "<h5 class='caption'>" + content[side][title][index]["caption"] + "<h5><br>";
			} else if (type == "link"){
				project += "<div class='image'><img src='" + content[side][title][index]["preview"] + "'></div>";
				project += "<h5 class='download-link'><a target='_blank' href='" + content[side][title][index]["src"] + "'>Download PDF</a></h5>";

			}
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
			var leftKeys = Object.keys(content["left"]);
			var rightKeys = Object.keys(content["right"]);
			app.showProject("left", leftKeys[ parseInt(Math.random() * leftKeys.length)], 0);
			app.showProject("right", rightKeys[ parseInt(Math.random() * rightKeys.length)], 0);
		}
	};


	app.init();

});
