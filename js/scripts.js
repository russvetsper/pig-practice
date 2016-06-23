function vowelTester(input) {
  var vowels=["a","e","i","o","u"];
  var result = vowels.indexOf(input);
  if (result > -1) {
    return true
  } else {
    return false;
  }
};

function wordTranslator(input) {
  var firstLetter = input[0];
  var result = vowelTester(firstLetter);
  var output = "";
  if (result) {
    output = input.concat("ay");
  } else {
    output = input.slice(1) + input[0].concat("ay");
  }
  return output;
};

function sentenceTranslator(input) {
  //input is a sentence
  var sentenceArray = input.toLowerCase().split(" ");
  //outputArray
  var outputArray = [];
  sentenceArray.forEach(function(word) {
    var translatedWord = wordTranslator(word);
    outputArray.push(translatedWord);
  })
  return outputArray.join(" ");
}
