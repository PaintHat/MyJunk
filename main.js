function show(text){
	console.log(text);
}

function showHome(){
	show("Home");
}

function showGallery(){
	show("Gallery");
}

function showContact(){
	show("Contact");
}

function showAbout(){
	show("About");
}

//Styles the navigation bar by setting it's class.
function navStyler(){
	console.log(window.pageYOffset);
	target = document.getElementById("nav-menu");
	if (window.pageYOffset >= 84){
		target.setAttribute("class", "fixed-nav");
	}else{
		target.setAttribute("class", "inline-nav");
	}
}

window.onscroll = navStyler;
document.getElementById("home").onclick = showHome;
document.getElementById("gallery").onclick = showGallery;
document.getElementById("contact").onclick = showContact;
document.getElementById("about").onclick = showAbout;
