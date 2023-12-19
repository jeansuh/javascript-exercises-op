const repeatString = function(originalString, repeatNumber) {
	if(repeatNumber < 0) return "ERROR"
	let newString = ""
	let iterator = 0
	for(let i = 0; i < repeatNumber; i++){
		newString += originalString
	}
	return newString
};

// Do not edit below this line
module.exports = repeatString;
