var mySentence = prompt("Enter a sentence.");

alert(mySentence);

function firstLast(mySentence) {
  var firstLetter = mySentence.charAt(0);
  var lastLetter = mySentence.charAt(mySentence.length-1);
	return (firstLetter+lastLetter).toUpperCase();
  return firstLetter+lastLetter;
}

alert(firstLast(mySentence));
