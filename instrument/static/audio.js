//Range => volume of button
$(document).ready(function(){
$('#volume').change( function() {
    volume = $('#volume').val();
    console.log(volume);
});
});

//audio object
var audio = new Audio();

//causes Fadeout. Perhaps have parameterss for which audio object to end
function End() {
    var fadeout = setInterval(
      function () {
    	if (audio.volume > 0.05) {
			audio.volume -= .01;

    		console.log(audio.volume);
		}
		else {
			audio.pause(); //the audio object still 'exists'; delete it?
			clearInterval(fadeout);
		}
      }, 2); 
}

//causes Fadeout. Perhaps have parameterss for which audio source to play, function to determine name of audio object
function Play() {
	audio = new Audio();
	if (volume > 6) {
	audio.src = 'sources/Piano.ff.A4.mp3';
	}
	else if (volume > 3) {
		audio.src = 'sources/Piano.mf.A4.mp3';
	} 
	else {
		audio.src = 'sources/Piano.pp.A4.mp3';
	}
	audio.play();
}

//Everything past this is 'in the works'.

var note_dictionary = new Object();
note_dictionary = {
	'a':'C',
	'w':'Db',
	's':'D',
	'e':'Eb',
	'd':'E',
	'f':'F',
	'r':'Gb',
	'g':'G',
	'y':'Ab',
	'h':'A',
	'u':'Bb',
	'j':'B',
	'k':'C',
	'o':'Db',
	'l':'D',
	'p':'Eb',
	';':'E',
	'\'':'F',
	']':'Gb'
};

var octave_up = new Array();
octave_up = ['k', 'o', 'l', 'p', ';', '\'', ']'];

var current_octave = 4;

var id = "Piano." + dynamic + note + current_octave.toString() + '.mp3';



$(document).ready(function(){
	$(document).keypress(function(event){
		
	})
})