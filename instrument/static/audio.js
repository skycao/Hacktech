var id = null;
var filenames = new Array();
filenames = ['../media/Piano.ff.A0.mp3', '../media/Piano.mf.A0.mp3', '../media/Piano.pp.A0.mp3', '../media/Piano.ff.B0.mp3', '../media/Piano.mf.B0.mp3', '../media/Piano.pp.B0.mp3', '../media/Piano.ff.Bb0.mp3', '../media/Piano.mf.Bb0.mp3', '../media/Piano.pp.Bb0.mp3', '../media/Piano.ff.A1.mp3', '../media/Piano.mf.A1.mp3', '../media/Piano.pp.A1.mp3', '../media/Piano.ff.Ab1.mp3', '../media/Piano.mf.Ab1.mp3', '../media/Piano.pp.Ab1.mp3', '../media/Piano.ff.B1.mp3', '../media/Piano.mf.B1.mp3', '../media/Piano.pp.B1.mp3', '../media/Piano.ff.Bb1.mp3', '../media/Piano.mf.Bb1.mp3', '../media/Piano.pp.Bb1.mp3', '../media/Piano.ff.C1.mp3', '../media/Piano.mf.C1.mp3', '../media/Piano.pp.C1.mp3', '../media/Piano.ff.D1.mp3', '../media/Piano.mf.D1.mp3', '../media/Piano.pp.D1.mp3', '../media/Piano.ff.Db1.mp3', '../media/Piano.mf.Db1.mp3', '../media/Piano.pp.Db1.mp3', '../media/Piano.ff.E1.mp3', '../media/Piano.mf.E1.mp3', '../media/Piano.pp.E1.mp3', '../media/Piano.ff.Eb1.mp3', '../media/Piano.mf.Eb1.mp3', '../media/Piano.pp.Eb1.mp3', '../media/Piano.ff.F1.mp3', '../media/Piano.mf.F1.mp3', '../media/Piano.pp.F1.mp3', '../media/Piano.ff.G1.mp3', '../media/Piano.mf.G1.mp3', '../media/Piano.pp.G1.mp3', '../media/Piano.ff.Gb1.mp3', '../media/Piano.mf.Gb1.mp3', '../media/Piano.pp.Gb1.mp3', '../media/Piano.ff.A2.mp3', '../media/Piano.mf.A2.mp3', '../media/Piano.pp.A2.mp3', '../media/Piano.ff.Ab2.mp3', '../media/Piano.mf.Ab2.mp3', '../media/Piano.pp.Ab2.mp3', '../media/Piano.ff.B2.mp3', '../media/Piano.mf.B2.mp3', '../media/Piano.pp.B2.mp3', '../media/Piano.ff.Bb2.mp3', '../media/Piano.mf.Bb2.mp3', '../media/Piano.pp.Bb2.mp3', '../media/Piano.ff.C2.mp3', '../media/Piano.mf.C2.mp3', '../media/Piano.pp.C2.mp3', '../media/Piano.ff.D2.mp3', '../media/Piano.mf.D2.mp3', '../media/Piano.pp.D2.mp3', '../media/Piano.ff.Db2.mp3', '../media/Piano.mf.Db2.mp3', '../media/Piano.pp.Db2.mp3', '../media/Piano.ff.E2.mp3', '../media/Piano.mf.E2.mp3', '../media/Piano.pp.E2.mp3', '../media/Piano.ff.Eb2.mp3', '../media/Piano.mf.Eb2.mp3', '../media/Piano.pp.Eb2.mp3', '../media/Piano.ff.F2.mp3', '../media/Piano.mf.F2.mp3', '../media/Piano.pp.F2.mp3', '../media/Piano.ff.G2.mp3', '../media/Piano.mf.G2.mp3', '../media/Piano.pp.G2.mp3', '../media/Piano.ff.Gb2.mp3', '../media/Piano.mf.Gb2.mp3', '../media/Piano.pp.Gb2.mp3', '../media/Piano.ff.A3.mp3', '../media/Piano.mf.A3.mp3', '../media/Piano.pp.A3.mp3', '../media/Piano.ff.Ab3.mp3', '../media/Piano.mf.Ab3.mp3', '../media/Piano.pp.Ab3.mp3', '../media/Piano.ff.B3.mp3', '../media/Piano.mf.B3.mp3', '../media/Piano.pp.B3.mp3', '../media/Piano.ff.Bb3.mp3', '../media/Piano.mf.Bb3.mp3', '../media/Piano.pp.Bb3.mp3', '../media/Piano.ff.C3.mp3', '../media/Piano.mf.C3.mp3', '../media/Piano.pp.C3.mp3', '../media/Piano.ff.D3.mp3', '../media/Piano.mf.D3.mp3', '../media/Piano.pp.D3.mp3', '../media/Piano.ff.Db3.mp3', '../media/Piano.mf.Db3.mp3', '../media/Piano.pp.Db3.mp3', '../media/Piano.ff.E3.mp3', '../media/Piano.mf.E3.mp3', '../media/Piano.pp.E3.mp3', '../media/Piano.ff.Eb3.mp3', '../media/Piano.mf.Eb3.mp3', '../media/Piano.pp.Eb3.mp3', '../media/Piano.ff.F3.mp3', '../media/Piano.mf.F3.mp3', '../media/Piano.pp.F3.mp3', '../media/Piano.ff.G3.mp3', '../media/Piano.mf.G3.mp3', '../media/Piano.pp.G3.mp3', '../media/Piano.ff.Gb3.mp3', '../media/Piano.mf.Gb3.mp3', '../media/Piano.pp.Gb3.mp3', '../media/Piano.ff.A4.mp3', '../media/Piano.mf.A4.mp3', '../media/Piano.pp.A4.mp3', '../media/Piano.ff.Ab4.mp3', '../media/Piano.mf.Ab4.mp3', '../media/Piano.pp.Ab4.mp3', '../media/Piano.ff.B4.mp3', '../media/Piano.mf.B4.mp3', '../media/Piano.pp.B4.mp3', '../media/Piano.ff.Bb4.mp3', '../media/Piano.mf.Bb4.mp3', '../media/Piano.pp.Bb4.mp3', '../media/Piano.ff.C4.mp3', '../media/Piano.mf.C4.mp3', '../media/Piano.pp.C4.mp3', '../media/Piano.ff.D4.mp3', '../media/Piano.mf.D4.mp3', '../media/Piano.pp.D4.mp3', '../media/Piano.ff.Db4.mp3', '../media/Piano.mf.Db4.mp3', '../media/Piano.pp.Db4.mp3', '../media/Piano.ff.E4.mp3', '../media/Piano.mf.E4.mp3', '../media/Piano.pp.E4.mp3', '../media/Piano.ff.Eb4.mp3', '../media/Piano.mf.Eb4.mp3', '../media/Piano.pp.Eb4.mp3', '../media/Piano.ff.F4.mp3', '../media/Piano.mf.F4.mp3', '../media/Piano.pp.F4.mp3', '../media/Piano.ff.G4.mp3', '../media/Piano.mf.G4.mp3', '../media/Piano.pp.G4.mp3', '../media/Piano.ff.Gb4.mp3', '../media/Piano.mf.Gb4.mp3', '../media/Piano.pp.Gb4.mp3', '../media/Piano.ff.A5.mp3', '../media/Piano.mf.A5.mp3', '../media/Piano.pp.A5.mp3', '../media/Piano.ff.Ab5.mp3', '../media/Piano.mf.Ab5.mp3', '../media/Piano.pp.Ab5.mp3', '../media/Piano.ff.B5.mp3', '../media/Piano.mf.B5.mp3', '../media/Piano.pp.B5.mp3', '../media/Piano.ff.Bb5.mp3', '../media/Piano.mf.Bb5.mp3', '../media/Piano.pp.Bb5.mp3', '../media/Piano.ff.C5.mp3', '../media/Piano.mf.C5.mp3', '../media/Piano.pp.C5.mp3', '../media/Piano.ff.D5.mp3', '../media/Piano.mf.D5.mp3', '../media/Piano.pp.D5.mp3', '../media/Piano.ff.Db5.mp3', '../media/Piano.mf.Db5.mp3', '../media/Piano.pp.Db5.mp3', '../media/Piano.ff.E5.mp3', '../media/Piano.mf.E5.mp3', '../media/Piano.pp.E5.mp3', '../media/Piano.ff.Eb5.mp3', '../media/Piano.mf.Eb5.mp3', '../media/Piano.pp.Eb5.mp3', '../media/Piano.ff.F5.mp3', '../media/Piano.mf.F5.mp3', '../media/Piano.pp.F5.mp3', '../media/Piano.ff.G5.mp3', '../media/Piano.mf.G5.mp3', '../media/Piano.pp.G5.mp3', '../media/Piano.ff.Gb5.mp3', '../media/Piano.mf.Gb5.mp3', '../media/Piano.pp.Gb5.mp3', '../media/Piano.ff.A6.mp3', '../media/Piano.mf.A6.mp3', '../media/Piano.pp.A6.mp3', '../media/Piano.ff.Ab6.mp3', '../media/Piano.mf.Ab6.mp3', '../media/Piano.pp.Ab6.mp3', '../media/Piano.ff.B6.mp3', '../media/Piano.mf.B6.mp3', '../media/Piano.pp.B6.mp3', '../media/Piano.ff.Bb6.mp3', '../media/Piano.mf.Bb6.mp3', '../media/Piano.pp.Bb6.mp3', '../media/Piano.ff.C6.mp3', '../media/Piano.mf.C6.mp3', '../media/Piano.pp.C6.mp3', '../media/Piano.ff.D6.mp3', '../media/Piano.mf.D6.mp3', '../media/Piano.pp.D6.mp3', '../media/Piano.ff.Db6.mp3', '../media/Piano.mf.Db6.mp3', '../media/Piano.pp.Db6.mp3', '../media/Piano.ff.E6.mp3', '../media/Piano.mf.E6.mp3', '../media/Piano.pp.E6.mp3', '../media/Piano.ff.Eb6.mp3', '../media/Piano.mf.Eb6.mp3', '../media/Piano.pp.Eb6.mp3', '../media/Piano.ff.F6.mp3', '../media/Piano.mf.F6.mp3', '../media/Piano.pp.F6.mp3', '../media/Piano.ff.G6.mp3', '../media/Piano.mf.G6.mp3', '../media/Piano.pp.G6.mp3', '../media/Piano.ff.Gb6.mp3', '../media/Piano.mf.Gb6.mp3', '../media/Piano.pp.Gb6.mp3', '../media/Piano.ff.A7.mp3', '../media/Piano.mf.A7.mp3', '../media/Piano.pp.A7.mp3', '../media/Piano.ff.Ab7.mp3', '../media/Piano.mf.Ab7.mp3', '../media/Piano.pp.Ab7.mp3', '../media/Piano.ff.B7.mp3', '../media/Piano.mf.B7.mp3', '../media/Piano.pp.B7.mp3', '../media/Piano.ff.Bb7.mp3', '../media/Piano.mf.Bb7.mp3', '../media/Piano.pp.Bb7.mp3', '../media/Piano.ff.C7.mp3', '../media/Piano.mf.C7.mp3', '../media/Piano.pp.C7.mp3', '../media/Piano.ff.D7.mp3', '../media/Piano.mf.D7.mp3', '../media/Piano.pp.D7.mp3', '../media/Piano.ff.Db7.mp3', '../media/Piano.mf.Db7.mp3', '../media/Piano.pp.Db7.mp3', '../media/Piano.ff.E7.mp3', '../media/Piano.mf.E7.mp3', '../media/Piano.pp.E7.mp3', '../media/Piano.ff.Eb7.mp3', '../media/Piano.mf.Eb7.mp3', '../media/Piano.pp.Eb7.mp3', '../media/Piano.ff.F7.mp3', '../media/Piano.mf.F7.mp3', '../media/Piano.pp.F7.mp3', '../media/Piano.ff.G7.mp3', '../media/Piano.mf.G7.mp3', '../media/Piano.pp.G7.mp3', '../media/Piano.ff.Gb7.mp3', '../media/Piano.mf.Gb7.mp3', '../media/Piano.pp.Gb7.mp3', '../media/Piano.ff.C8.mp3', '../media/Piano.mf.C8.mp3', '../media/Piano.pp.C8.mp3'];


// buffer class start
function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
          loader.onload(loader.bufferList);
      },
      function(error) {
        console.error('decodeAudioData error', error);
      }
    );
  }

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  }

  request.send();
}

BufferLoader.prototype.load = function() {
  for (var i = 0; i < this.urlList.length; ++i)
  this.loadBuffer(this.urlList[i], i);
}

//end 

window.onload = init;
var context;
var bufferLoader;

// for keyboard:
var current_octave = 4;
var volume = 5;

// note_dictionary: keyboard to key; octave_up: the keys for which you have to add an octave
var note_dictionary = new Object();
note_dictionary = {'a':'C', 'w':'Db', 's':'D', 'e':'Eb', 'd':'E', 'f':'F','t':'Gb', 'g':'G', 'y':'Ab', 'h':'A', 'u':'Bb', 'j':'B', 'k':'C','o':'Db','l':'D', 'p':'Eb',';':'E','\'':'F',']':'Gb'};
var octave_up = new Array();
octave_up = ['k', 'o', 'l', 'p', ';', '\'', ']'];

function dynamics() {
	//gives dyanmic (ff, mf, pp) based on volume
	if (volume > -1) {
		return "ff";
	}
	else if (volume > 2) {
		return "mf";
	}
	else {
		return "pp";
	}
}


function higher(key) {
	if (octave_up.indexOf(key) != -1) {
		return 1;
	}
	return 0;
}

var currentplayed = new Object();




function init() {
 // Fix up prefixing
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

  bufferLoader = new BufferLoader(
    context,filenames, finishedLoading);
  bufferLoader.load();
}


function smartToLowerCase(str) {
    if(isAlpha(str)) {
	return str.toLowerCase();
    }
}

function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function finishedLoading(bufferList) { 
  alert("It's loaded!");

  function createSource(id) {
    var source = context.createBufferSource();
    // Create a gain node.
    var gainNode = context.createGain();
    source.buffer = bufferList[id];
    // Connect source to gain.
    source.connect(gainNode);
    // Connect gain to destination.
    gainNode.connect(context.destination);

    return {
      source: source,
      gainNode: gainNode
    };
  }


    white_to_black_map = {0: [12], 1: [12,13], 2: [13], 3: [15], 4: [15,16], 5: [16, 17], 6: [17], 7: [19], 8: [19,20], 9: [20], 10: [], 11: []};

    function to_front(index, color) {
	keys_array[index].setAttr('fill', color);
	layer.add(keys_array[index]);
    }


    $(document).ready(function() {
	$(document).keypress(function(event) {
	    var arrayval;
	    var key;
	    /*if(event.which == 97){
	      /*$('div').css('background-color','#ff3333')
	      var object = $('div')
	      changeKey(object);
	      to_front(0, 'grey');
	      to_front(11, 'black');
	      stage.add(layer);*/
	    
	    switch (String.fromCharCode(event.which)){
	    case 'a':
		arrayval = 0;
		key = 'a';
		break;
	    case 's':
		arrayval = 1;
		key = 's';
		break;
	    case 'd':
		arrayval = 2;
		key = 'd';
		break;
	    case 'f':
		arrayval = 3;
		key = 'f';
		break;
	    case 'g':
		arrayval = 4;
		key = 'g';
		break;
	    case 'h':
		arrayval = 5;
		key = 'h';
		break;
	    case 'j':
		arrayval = 6;
		key = 'j';
		break;
	    case 'k':
		arrayval = 7;
		key = 'k';
		break;
	    case 'l':
		arrayval = 8;
		key = 'l';
		break;
	    case ';':
		arrayval = 9;
		key = ';';
		break;
	    case "'":
		arrayval = 10;
		key = "'";
		break;
	    case "]":
		arrayval = 11;
		key = ']';
		break;
	    case 'w':
		arrayval = 12;
		key = 'w';
		break;
	    case 'e':
		arrayval = 13;
		key = 'e';
		break;
	    case 't':
		arrayval = 15;
		key = 't';
		break;
	    case 'y':
		arrayval = 16;
		key = 'y';
		break;
	    case 'u':
		arrayval = 17;
		key = 'u';
		break;
	    case 'o':
		arrayval = 19;
		key = 'o';
		break;
	    case 'p':
		arrayval = 20;
		key = 'p';
		break;
	    case '1':
                arrayval = 200;
                key = '1';
                break;
            case '2':
                arrayval = 201;
                key = '2';
                break;
	    }

	    if(arrayval < 12 && white_to_black_map[arrayval] != []) {
		to_front(arrayval, 'grey');
		for(i = 0; i < white_to_black_map[arrayval].length; i++) {
		    to_front(white_to_black_map[arrayval][i], 'black');
		}
	    }
	    /*(else {
		to_front(arrayval, 'grey');
	    }*/
	    try {
		Start(key);
	    }
	    catch(err) {}
	    stage.add(layer);
	    

	});
	
	$(document).keyup(function(event) {
	    var arrayval;
	    var key;
	    var pressed;
	    /*if(event.which == 97){
	      /*$('div').css('background-color','#ff3333')
	      var object = $('div')
	      changeKey(object);
	      to_front(0, 'grey');
	      to_front(11, 'black');
	      stage.add(layer);*/
	    if(isAlpha(String.fromCharCode(event.which))) {
		pressed = String.fromCharCode(event.which).toLowerCase();
	    }
	    else {
		pressed = event.which;
	    }

	    switch (pressed){
	    case 'a':
		arrayval = 0;
		key = 'a';
		break;
	    case 's':
		arrayval = 1;
		key = 's';
		break;
	    case 'd':
		arrayval = 2;
		key = 'd';
		break;
	    case 'f':
		arrayval = 3;
		key = 'f';
		break;
	    case 'g':
		arrayval = 4;
		key = 'g';
		break;
	    case 'h':
		arrayval = 5;
		key = 'h';
		break;
	    case 'j':
		arrayval = 6;
		key = 'j';
		break;
	    case 'k':
		arrayval = 7;
		key = 'k';
		break;
	    case 'l':
		arrayval = 8;
		key = 'l';
		break;
	    case 186:
		arrayval = 9;
		key = ';';
		break;
	    case 222:
		arrayval = 10;
		key = "'";
		break;
	    case 221:
		arrayval = 11;
		key = ']';
		break;
	    case 'w':
		arrayval = 12;
		key = 'w';
		break;
	    case 'e':
		arrayval = 13;
		key = 'e';
		break;
	    case 't':
		arrayval = 15;
		key = 't';
		break;
	    case 'y':
		arrayval = 16;
		key = 'y';
		break;
	    case 'u':
		arrayval = 17;
		key = 'u';
		break;
	    case 'o':
		arrayval = 19;
		key = 'o';
		break;
	    case 'p':
		arrayval = 20;
		key = 'p';
		break;

	    }

	    if(arrayval < 12 && white_to_black_map[arrayval] != []) {
		to_front(arrayval, 'white');
		for(i = 0; i < white_to_black_map[arrayval].length; i++) {
		    to_front(white_to_black_map[arrayval][i], 'black');
		}
	    }
	    try {
		Stop(key);
	    }
	    catch(err) {}
	    stage.add(layer);
	    

	});

    });





    /*$(document).ready(function(){
      $('#volume').change( function() {
	volume = $('#volume').val();
      });
      $('#Start').click( function() {
	Start('k');
      });
      $('#Stop').click( function() {
	Stop('k');
      });
      $('#add').click( function() {
	if (current_octave <= 7) {
	current_octave += 1;
	}
      });
      $('#minus').click( function() {
	if (current_octave >= 1) {
	current_octave -= 1;
	}
      });
    }); */
    
    function Start(key) {
        if (key == "1") {
            console.log("octave down");
            if (current_octave >= 0) {
                current_octave -= 1;
            }
        }
        else if (key == '2') {
            console.log("octave up");
            if (current_octave <= 7) {
                current_octave += 2;
            }
        }
 
        else if (currentplayed[key] != null) {
             Stop(key)
        }
        var filename = "../media/Piano." + dynamics() + "." + note_dictionary[key] + (current_octave + higher(key)).toString() + ".mp3";
        console.log(filename);	
	var note = createSource(filenames.indexOf(filename));
        note.gainNode.gain.value = volume * 2;
        note.source.start(0);
        currentplayed[key] = note;
    }
    
    function Stop(key) {
      var notetoStop = currentplayed[key];
      console.log(notetoStop.gainNode.gain.value);
      var fadeout = setInterval(
        function () {
    	  try {
		if (notetoStop.gainNode.gain.value > 1) {
			notetoStop.gainNode.gain.value -= 1;
			notetoStop.gainNode.gain.value /= 1.2;
	        }
	      else {
	        console.log('ended');
                notetoStop.source.stop();
                clearInterval(fadeout);
                delete currentplayed[key];
               }
          }
          catch(err) {console.log(err); 
 	              clearInterval(fadeout);}
	  
      }, 2); /*
        currentplayed[key].gainNode.gain.linearRampToValueAtTime(1, 2);
        gainNode.gain.linearRampToValueAtTime(1, currTime + duration-ctx.FADE_TIME);
        gainNode.gain.linearRampToValueAtTime(0, currTime + duration);
        currentplayed[key].source.stop(2);
        delete currentplayed[key];*/
    }
}

/*

function Start(key) {
    var filename = "../media/Piano." + dynamics() + "." + note_dictionary[key] + (current_octave + higher(key)).toString() + ".mp3";
    id = filename;
    playSound(filename);
}


function Stop(key) {
  try {
   var fadeout = setInterval( // add Try, except to stop loop.
      function () {
    	if (currentplayed[key].volume > 0.05) {
			currentplayed[key].volume -= .01;
		}
		else {
			console.log('ended');
			currentplayed[key].pause(); //the audio object still 'exists'; delete it?
			clearInterval(fadeout);
			delete currentplayed[key];
		}
      }, 2); 
  } catch (err) {}
}

*/
