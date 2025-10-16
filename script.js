//your JS code here. If required.
function daysOfYear(value){
	if ((value%4==0 && value%100!==0  || value%400==0)){
		return 366;
}
	return 365;
}