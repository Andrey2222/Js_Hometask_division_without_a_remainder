var namber1 = +prompt("Введите первое число");
var namber2 = +prompt("Введите второе число");
(namber1 % namber2 == 0) ? alert("делится без остатка") : alert("не делится без остатка");


var season = prompt("введите месяц своего рождения");
switch(season) {
	case "12":
	case "1":
	case "2":
	case "декабрь":
	case "январь":
	case "февраль":
		alert("зима");
		break;
	case "3":
	case "4":
	case "5":
	case "март":
	case "апрель":
	case "май":
		alert("весна");
		break;
	case "6":
	case "7":
	case "8":
	case "июнь":
	case "июль":
	case "август":
		alert("лето");
		break;
	case "9":
	case "10":
	case "11":
	case "сентябрь":
	case "октябрь":
	case "ноябрь":
		alert("осень");
		break;
}

