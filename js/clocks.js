
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

		var bleu = "#36A9E1"

		// sélectionner l'ensemble des minutes
		var LesMinutes = document.querySelectorAll("#verre-min > path") ;

		var LesHeures = document.querySelectorAll("#verre-heure > path") ;

		/*
		 * Les Minutes
		 **************
		*/
		// les chiffres vont de 0 à 59

		// Vider le verre au moment zéro:
		if ( minute === 0 ) {

			// Tout en blanc:
			for (i = 0; i < LesMinutes.length; i++) {
    			LesMinutes[i].style.fill = "#fff";
			}

		} else {

			// coloriser l'élément correspondant à la seconde:
			LesMinutes[minute].style.fill = bleu;

			// Coloriser les secondes passées:
			
			for (i = 0; i < minute; i++) {
	    		LesMinutes[i].style.fill = bleu;
			}

			// Coloriser les parties masquées (de 61 à 74 : 13)
			if ( minute >= 47 ) {
				minuteFond = minute +14;
				LesMinutes[minuteFond].style.fill = bleu;
			}

		}

		}

		console.log(minute);

	}

	
