var mySentence = prompt("Enter a sentence.");

alert(mySentence);

function firstLast(mySentence) {
  var firstLetter = mySentence.charAt(0);
  var lastLetter = mySentence.charAt(mySentence.length-1);
	return (firstLetter+lastLetter).toUpperCase();
}

// alert(firstLast(mySentence));

function lastFirst(firstLast) {
  var firstLetter = firstLast(mySentence).charAt(0);
  var lastLetter = firstLast(mySentence).charAt(firstLast(mySentence).length-1);
	return (lastLetter+firstLetter).toUpperCase();
}


function combineFunction(firstLast,lastFirst) {
  var secondFunctionResult = lastFirst(firstLast);
  return secondFunctionResult;
}

alert (combineFunction(firstLast,lastFirst));
