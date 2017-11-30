
/*
 * Un petit script mesurant l'écoulement du temps
 *
 * Source: https://codepen.io/Tcip/pen/BNKjeN
 * Auteur: Mikael Elmblad, tcip.se
*/

// Définition de variables globales

// utilitaire pour boucles
var i;

// répéter la fonction metronone une fois par seconde

var myVar = setInterval(function() {
  metronome();
}, 1000);

function metronome() {
	  var date = new Date;
		// var minute = date.getMinutes();
		var minute = date.getSeconds();
		var heure = date.getHours();

		var minuteFond = 0;
		var heureFond = 0;

		var bleu = "#36A9E1";
		var blanc = "#fff";

		// sélectionner l'ensemble des minutes
		var LesMinutes = document.querySelectorAll("#verre-min > path");

		var LesHeures = document.querySelectorAll("#verre-heure > path");

		var LesHeuresFond = document.querySelectorAll("#verre-heure-fond > path");

		/*
		 * Les Minutes
		 **************
		*/

		// Tout en blanc:
			for (i = 0; i < LesMinutes.length; i++) {
    			LesMinutes[i].style.fill = blanc;
			}

		// NB: les chiffres vont de 0 à 59.
		// Il n'y a pas de minute "vide".

				// coloriser l'élément correspondant à la seconde:
				LesMinutes[minute].style.fill = bleu;

			// Coloriser les secondes passées:
			
			for (i = 0; i < minute; i++) {
	    		LesMinutes[i].style.fill = bleu;
			}

			// Coloriser les parties masquées (de 61 à 74 : 13)
			if ( minute >= 46 ) {
				minuteFond = minute +14; // 60-73
				LesMinutes[minuteFond].style.fill = bleu;
				for (i = 60; i < minuteFond; i++) {
	    		LesMinutes[i].style.fill = bleu;
				}
			}


		/*
		 * Les Heures
		 **************
		*/

		// Initialiser: tout en blanc:
		for (i = 0; i < LesHeures.length; i++) {
  		LesHeures[i].style.fill = blanc;
		}
		for (i = 0; i < LesHeuresFond.length; i++) {
	    LesHeuresFond[i].style.fill = blanc;
		}

		// Mettre l'heure au format 12h
		if (heure > 12) {
			heure -= 12;
		} else if (heure === 0) {
			heure = 12;
		}

		// On aura un chiffre de 1 à 12.

		// Correctif, pour aller de 0 à 11.
		heure -= 1;

		// Coloriser l'élément correspondant à l'heure:
			LesHeures[heure].style.fill = bleu;
		
		// Coloriser les heures passées:
		
		for (i = 0; i < heure; i++) {
    	LesHeures[i].style.fill = bleu;
		}

		// Coloriser #verre-heure-fond (0-1-2)
		if ( heure >= 9 ) {

			heureFond = heure -9; // 0 - 2

			LesHeuresFond[heureFond].style.fill = bleu;

			for (i = 0; i < heureFond; i++) {
    		LesHeuresFond[i].style.fill = bleu;
			}

		} // if >= 9

		console.log(heure+"h"+minute);

	} // end metronome()

