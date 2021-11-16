var imgArray = ['Gem_lake.png','Stairs.png','Tetons1.png','Trees.png','Yellowstone1.png'];
var imgIndex = 0;

function next(){
	var myImg = document.getElementById("myImg");
	if(imgIndex < 4)
	{
		imgIndex = imgIndex +1;
	}
	else
	{
		imgIndex = 0;
	}
	myImg.src = "img/" + imgArray[imgIndex];
}

function previous(){
	var myImg = document.getElementById("myImg");
	if(imgIndex > 0)
	{
		imgIndex = imgIndex -1;
	}
	else
	{
		imgIndex = 4;
	}
	myImg.src = "img/" + imgArray[imgIndex];
}
