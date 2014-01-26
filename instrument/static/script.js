var changeKey = function(obj){
		obj.style.background-color = '#ff3333'
};

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

	
});

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
	case 'w':
		arraySharp = 0;
		break;
	case 'e':
		arraySharp = 1;
		break;
	case 't':
		arraySharp = 2;
		break;
	case 'y':
		arraySharp = 3;
		break;
	case 'u':
		arraySharp = 4;
		break;
	case 'o':
		arraySharp = 5;
		break;
	case 'p':
		arraySharp = 6;
		break;
}*/
