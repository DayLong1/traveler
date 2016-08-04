/**
*	There will be more added to this page. So far, this is all that's needed for the homepage.
*/

window.onload = function(){
    document.getElementById('menu').innerHTML='&#9776;';      

    /*$(document).ready(function(){
        $("#mobile-navitems").hide();
             $("#menu").click(function(){
                 $("#mobile-navitems").slideToggle();
             });
    });*/
}

window.addEventListener("load",initAll,false);

function initAll(){

	var menuClick = document.getElementById('menu');

	for (var i = 0; i < menuClick.length; i++) {
		if (menuClick[i].indexOf("menu") > -1) {
			menuClick[i].addEventListener("click",toggleMenu, false);
		}
	}

}

function toggleMenu(event){

	var start = this.id.lastIndexOf("/")+1;
	var end = this.id.lastIndexOf(".");
	var thisMenu = this.id.substring(start,end);
	
}