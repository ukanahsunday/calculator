alert("calculator");
alert("you can perform operation like: +, -, *, /");
let num1=prompt("Enter first number: ");
let operation=prompt("Enter operation like: +, -, *, /");
let num2=prompt("Enter second number: ");
if (operation=="+"){
	alert(Number(num1)+Number(num2));
} else if (operation=="-"){
	alert(Number(num1)-Number(num2));
}else if (operation=="*"){
	alert(Number(num1)*Number(num2));
}else if (operation=="/"){
	alert(Number(num1)/Number(num2));
}else {
alert("Your input is not correct")
}


