
/*
 * Un petit script mesurant l'écoulement du temps
 *
 * Source: https://codepen.io/Tcip/pen/BNKjeN
 * Auteur: Mikael Elmblad, tcip.se
*/

// répéter la fonction metronone une fois par seconde

var myVar = setInterval(function() {
  metronome();
}, 1000);

function metronome() {
	  var date = new Date;
		var minute = date.getMinutes();
		var seconde = date.getSeconds();
		var heure = date.getHours();

		// sélectionner l'ensemble des minutes
		var selection = document.querySelectorAll("#verre-min > path") ;

		// coloriser l'élément correspondant à la seconde:
		selection[seconde].style.fill = "#36A9E1";

		// coloriser les secondes passées:
		var i;
		for (i = 0; i < seconde; i++) {
    		selection[i].style.fill = "#36A9E1";
		}

		// vider le verre à la seconde zéro:
		if ( seconde == 0 ) {
			selection[seconde].style.fill = "#fff";
			selection[0].style.fill = "#36A9E1";
		}

		console.log(minute);

	}

	
