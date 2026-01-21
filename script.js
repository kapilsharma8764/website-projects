//Random color gnerate function

const getColor=()=>{
	//hex code
	const randomNumber=Math.floor(Math.random()*16777215);
	const randomCode="#"+ randomNumber.toString(16);
	document.body.style.background=randomCode;
	document.getElementById('color-code').innerText=randomCode;
	//console.log(randomNumber,randomCode);




navigator.clipboard.writeText(randomCode);




}
//event call=(event listiner used)
document.getElementById('btn').addEventListener(
     "click",
     getColor


)

//this is called initial call
getColor();
	