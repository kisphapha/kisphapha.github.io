function dropdown(){
	var ver_nav = document.getElementsByClassName("ver");
	if (ver_nav[0].style.display == "inline-block"){
		ver_nav[0].style.display = "none";	
	}
	else{
		ver_nav[0].style.display = "inline-block";	
	}
	
}

function orderButton1(orderBut){
	orderBut.src = "imgs/order2.png"; 
}
function orderButton2(orderBut){
	orderBut.src = "imgs/order1.png"; 
}

function orderClick(){
	alert("Order sent to server");
}

function tellFortune(){
	var number = document.getElementById("lucky").value;
	var result = (number*987)%20;
	var fate = document.getElementById("prediction");
	switch (result){
		case 0: fate.innerHTML = "You'll meet your soulmate by the next year"; break;
		case 1: fate.innerHTML = "You'll pass upcoming exams (if you do have them)"; break;
		case 2: fate.innerHTML = "You'll won a lottery soon"; break;
		case 3: fate.innerHTML = "You'll buy a car in the next 5 years"; break;
		case 4: fate.innerHTML = "You'll have a house in your 20s"; break;
		case 5: fate.innerHTML = "You'll get married with your current crush"; break;
		case 6: fate.innerHTML = "Your crush is liking you"; break;
		case 7: fate.innerHTML = "You'll have a high paid job, patienly wait"; break;
		case 8: fate.innerHTML = "You'll a CEO of a company"; break;
		case 9: fate.innerHTML = "You'll die of old age, peacefully"; break;
		case 10: fate.innerHTML = "You'll soon meet one of your idols by the next few months"; break;
		case 11: fate.innerHTML = "Some big lucks is coming to you by the next few days"; break;
		case 12: fate.innerHTML = "If you doing an important project, it'll be successful, and you'll remember that day"; break;
		case 13: fate.innerHTML = "Your parents will alive until you are old"; break;
		case 14: fate.innerHTML = "Your life will stay away from tragic accidents"; break;
		case 15: fate.innerHTML = "The Best day of your life perhap didn't come yet. But in the near future"; break;
		case 16: fate.innerHTML = "You'll have a son. He'll be an influencer"; break;
		case 17: fate.innerHTML = "You'll have a daughter. She is as pretty as angel"; break;
		case 18: fate.innerHTML = "You'll archive an honor reward"; break;
		case 19: fate.innerHTML = "Your enemies will become your friends. Your rivals become your family"; break;
		default: fate.innerHTML = "Please enter a positive integer"; break;
	}
}