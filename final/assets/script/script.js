let s1 = document.getElementById("selection1");
function removeImages() {
	let imageArray = document.getElementsByClassName("image");
	for (let i = 0; i < imageArray.length; i++) {
		imageArray[i].style.display = "none";
	}
}
s1.onclick = function() {
	document.getElementById("lower-image").style.display = "none";
	removeImages();
	document.getElementById("mushu1").style.display = "block";

};


let s2 = document.getElementById("selection2");
s2.onclick = function() {
	document.getElementById("lower-image").style.display = "none";
	removeImages();
	document.getElementById("mushu2").style.display = "block";
}

let s3 = document.getElementById("selection3");
s3.onclick = function() {
	document.getElementById("lower-image").style.display = "none";
	removeImages();
	document.getElementById("mushu3").style.display = "block";
}


let remove = document.getElementById("remove-button");
remove.onclick = function() {
	removeImages();
	document.getElementById("lower-image").style.display = "block";
};


let toggle = document.getElementById("dark");
let light = true;
toggle.onclick = function() {
	document.body.classList.toggle("darkmode");
	let upper = document.getElementById("upper-image");
	let selected1 = document.getElementById("mushu1");
	let selection1 = document.getElementById("selection1");
	let selected2 = document.getElementById("mushu2");
	let selection2 = document.getElementById("selection2");
	let selected3 = document.getElementById("mushu3");
	let selection3 = document.getElementById("selection3");
	let titletext = document.getElementById("title")
	if (light == true) {
		upper.src = "assets/img/mushudark.png";
		selected1.src = "assets/img/mushudark2.png";
		selection1.src = "assets/img/mushudark2.png";
		selected2.src = "assets/img/mushudark3.png";
		selection2.src = "assets/img/mushudark3.png";
		selected3.src = "assets/img/mushudark4.png";
		selection3.src = "assets/img/mushudark4.png";
		titletext.style.color = "white";
		light = false;
	} else {
		upper.src = "assets/img/mushulight.png";
		selected1.src = "assets/img/mushulight2.png";
		selection1.src = "assets/img/mushulight2.png";
		selected2.src = "assets/img/mushulight3.png";
		selection2.src = "assets/img/mushulight3.png";
		selected3.src = "assets/img/mushulight4.png";
		selection3.src = "assets/img/mushulight4.png";
		titletext.style.color = "black";
		light = true;
	}
};
