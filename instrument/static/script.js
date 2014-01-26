var changeKey = function(obj){
		obj.style.background-color = '#ff3333'
};

function to_front(index, color) {
    keys_array[index].setAttr('fill', color);
    layer.add(keys_array[index]);
}

function obtain_index(

$(document).ready(function(){
	$(document).keypress(function (event){
		//var arrayval = 0;
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
	break;
    case 's':
	arrayval = 1;
	break;
    case 'd':
	arrayval = 2;
	break;
    case 'f':
	arrayval = 3;
	break;
    case 'g':
	arrayval = 4;
	break;
    case 'h':
	arrayval = 5;
	break;
    case 'j':
	arrayval = 6;
	break;
    case 'k':
	arrayval = 7;
	break;
    case 'l':
	arrayval = 8;
	break;
    case ';':
	arrayval = 9;
	break;
    case "'":
	arrayval = 10;
	break;
    case 'w':
	arrayval = 11;
	break;
    case 'e':
	arrayval = 12;
	break;
    case 't':
	arrayval = 13;
	break;
    case 'y':
	arrayval = 14;
	break;
    case 'u':
	arrayval = 15;
	break;
    case 'o':
	arrayval = 16;
	break;
    case 'p':
	arrayval = 17;
	break;
}

    to_front(arrayval, 'grey');
    to_front(13, 'black');
    stage.add(layer);
    

	});

});

$(document).keyup(function(event){
  

});


