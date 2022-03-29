
const Myslides = document.querySelectorAll('.images');
var Index = 1;
changeImageSlide(Index);

let timer = setInterval(autoslide,8000);

function autoslide(){
	Index++;
	changeImageSlide(Index);
}
function resetTimer(){
	clearInterval(timer);
	timer = setInterval(autoslide,8000);
}

function addSlides(n){
	changeImageSlide(Index += n );
	resetTimer();
}


function changeImageSlide(n){
	var i;	
	
	if(n > Myslides.length){
		Index = 1;
		
	}if(n<1){
		Index = Myslides.length;
	}
	for(i=0;i<Myslides.length;i++){
		Myslides[i].style.display = "none";
	}
	Myslides[Index-1].style.display = "block";
}

