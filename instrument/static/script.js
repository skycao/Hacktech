/*var changeKey = function(obj){
		obj.style.background-color = '#ff3333'
};*/

<<<<<<< HEAD
$.getScript("static/audio.js");
=======
$(document).ready(function(){
	
}


$(document).ready(function(){
	$(document).keypress(function (event){
		//var arrayval = 0;
		if(event.which == 97){
			$('div').css('background-color','#ff3333')
			var object = $('div')
			changeKey(object);
		};
	});
>>>>>>> 9f38c4a89e3d45b34bf8e0fce50141a18a437d76

white_to_black_map = {0: [12], 1: [12,13], 2: [13], 3: [15], 4: [15,16], 5: [16, 17], 6: [17], 7: [19], 8: [19,20], 9: [20], 10: [], 11: []}

function to_front(index, color) {
    keys_array[index].setAttr('fill', color);
    layer.add(keys_array[index]);
}

<<<<<<< HEAD
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
=======
switch (String.fromCharCode(event.which)){
>>>>>>> 9f38c4a89e3d45b34bf8e0fce50141a18a437d76
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
	}

	if(arrayval < 12 && white_to_black_map[arrayval] != []) {
	    to_front(arrayval, 'grey');
	    for(i = 0; i < white_to_black_map[arrayval].length; i++) {
		to_front(white_to_black_map[arrayval][i], 'black');
	    }
	}
	Start(key);
	stage.add(layer);
	

    });

});

//$(document).keyup(function(event)


