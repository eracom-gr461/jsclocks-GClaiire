
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

		// coloriser l'élément correspondant à la seconde:
		var selection = document.querySelectorAll("#verre-min > path") ;

		selection[seconde].style.fill = "#36A9E1";

		var i;
		for (i = 0; i < seconde; i++) {
    		selection[i].style.fill = "#36A9E1";
		}

		// vider à la seconde zéro:
		if ( seconde == 0 ) {
			selection[seconde].style.fill = "#fff";
			selection[0].style.fill = "#36A9E1";
		}

		console.log(minute);
	  // document.getElementById("seconde").innerHTML = seconde;
		// document.getElementById("seconde").style.top = getRandom(10, 90)+'%';
  	// document.getElementById("seconde").style.left = getRandom(10, 90)+'%';
	  // test conditionnel


	}

	
