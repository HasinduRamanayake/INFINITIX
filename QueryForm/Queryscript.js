//making GetAlert function
function GetAlert(){
	var Falert = document.getElementById("Fname");
	var Ealert = document.getElementById("Email");
	var Qalert = document.getElementById("Query");
	var Dalert = document.getElementById("Details");
	if(Falert.value.length==0){
		
		alert("Full Name Must Be Filled To Continue..");
		
	}
	if(Ealert.value.length==0){
		
		alert("Email Must Be Filled To Continue..");
		
	}
	if(Qalert.value==""){
		
		alert("Query Theme Must Be Selected To Continue..");
		
		
	}if(Dalert.value.length==0){
		
		alert("Details Must Be written To Continue..");
		
	}else{
		InitDiv();
	}		
	
}
// making Form using DOM methods
function InitDiv(){
	let hide = document.querySelector("#formgrid");
	hide.style.display = 'none';
	
	var Element = document.createElement("Form");
	Element.setAttribute("id","ViewDetails" );
	Element.setAttribute("action","mailto:hasindu890@gmail.com");
	Element.setAttribute("method","post");
	Element.setAttribute("enctype","text/plain");
	
	var ele = document.createElement("Textarea");
	ele.setAttribute("id","INFO");
	ele.setAttribute("name","Info :");
	
	//adding values to Form
	
	var txt1 = document.createTextNode(`\nName :${document.getElementById("Fname").value}\n`);  
	ele.appendChild(txt1);
	var br = document.createElement("br");				
	ele.appendChild(br);
	Element.appendChild(ele);	
	
	var txt2 = document.createTextNode(`Email :${document.getElementById("Email").value}\n`);
	ele.appendChild(txt2);
	var br = document.createElement("br");				
	ele.appendChild(br);
	Element.appendChild(ele);	
	
	var txt3 = document.createTextNode(`Subject :${document.getElementById("Query").value}\n`);
	ele.appendChild(txt3);
	var br = document.createElement("br");				
	ele.appendChild(br);
	Element.appendChild(ele);	
	
	var txt4 = document.createTextNode(`Details :${document.getElementById("Details").value}\n`);
	ele.appendChild(txt4);
	Element.appendChild(ele);
	
	var btn1 = document.createElement("BUTTON");   // Creates a Edit Button
	btn1.setAttribute('class','Edit');
	btn1.setAttribute('onclick','Edit();')
	btn1.innerHTML = "Edit"; 
	Element.appendChild(btn1);
	
	var btn2 = document.createElement("BUTTON");   // Creates a Send Button
	btn2.setAttribute('id','send');		
	btn2.setAttribute('type','submit');
	btn2.innerHTML = "Send"; 
	Element.appendChild(btn2);	
	document.body.appendChild(Element);	
	
}
//functioning Edit Button
function Edit(){
	
	var hide2 = document.querySelector("#ViewDetails");
	hide2.remove();	
	
	var show = document.querySelector("#formgrid");
	show.style.display = 'block';
	
	
}


	



