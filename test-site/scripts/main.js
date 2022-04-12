let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myImage.onclick=function(){
	let mysrc=myImage.getAttribute('src');
	if(mysrc==='images/freeG+.png'){
		myImage.setAttribute('src', 'images/sight.jpg');
	}else{
		myImage.setAttribute('src', 'images/freeG+.png');
	}
}

function setUserName(){
	let myName=prompt('请输入你的名字。');
	if(!myName||myName===null){
		setUserName();
	}
	else{
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Mozilla 酷毙了，' + myName;
	}

}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function() {
   setUserName();
}