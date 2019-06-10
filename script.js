// image file names here
var images =
[
];
var path = "images/";

function getRandomImg()
{
	var num = Math.floor(Math.random() * images.length);
	var img = images[num];
	var imgStr = '<a target="_blank" href="' + path + img + '"><img class="img-rounded" src="' + path + img + '"></a>';
	document.write(imgStr);
	document.close();
}

var myJson = require("https://api.cleanvoice.ru/mumble/?address=terrorgum.com?port=64738&callback=%7Bcallback%7D");

var html = "<ul>";

for (var key in myJson)
{
	html += "<li>" + myJson[key][0] + "</li>";
}

html += "</ul>";

document.getElementById("members-list").innerHTML = html;
