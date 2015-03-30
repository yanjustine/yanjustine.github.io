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
			project += "<div class='image'><img src='" + content[side][title][index]["src"] + "'></div>";
			project += "<h5 class='caption'>" + content[side][title][index]["caption"] + "<h5>";
			$("#" + side).html(project);
			$(".image img").click(function(e){
				var side = $(e.target).parent().parent().attr('id');
				app.showProject(side, title, (index + 1) % content[side][title].length);
			});
			$("#" +side + "-back").click(function(){
				app.showContents(side);
			});
		},

		init: function(){
			app.showContents("left");
			app.showContents("right");
		}
	};


	app.init();

});