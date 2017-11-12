var namber1 = +prompt("Введите первое число");
var namber2 = +prompt("Введите второе число");
if (isNaN(namber1) || isNaN(namber2)) {
	alert("не число")
}else {
(namber1 % namber2 == 0) ? alert("делится без остатка") : alert("не делится без остатка");
}


____________________________________
// ТО ЧТО ДАВАЛОСЬДЕЛАТЬ В ТЕЛЕГЕ СНИЗУ

// var accumulate = 0;
// var namber;
// while (accumulate < 666) {
//  namber = +prompt("введите число");
// accumulate+=namber;
// }

// var action = +prompt("введите число");
// var number = 1;
// while(number < 50) {
// 	if (number % action == 0) {
// 	alert(number);
// }
// 	number++;
// }
// var later = prompt("введите букву");
// var number = +prompt("сколько раз еужно вівестибукву");
// var nakopitel = " ";
// var i = 0;
// while (number > i) {
// 	nakopitel = nakopitel +later;
// 	i++;
// }alert(nakopitel);
// function suma() {
// 	var nakopitel = 0;
// 	var flag = false;
// 	while (flag == false) {
// 		var number = prompt("Введите число или введите Стоп");
// 		if (number == "Стоп"){
// 			flag = true;
// 		}else{
// 			nakopitel+=+number;
// 		}
// 	}
// 	return(nakopitel);
// }
// var namber = suma();
// var namber2 = suma();
// if (namber > namber2) {
// 	alert("накопитель один больше")
// }else{
// 	alert("накопитель два больше")
// }



