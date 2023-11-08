// Business Logic

unction wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (element) {
    if (!Number(element))
      wordCount++;
  });
  return wordCount;
}


function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount
}

function naughtyWord(word, text) {
  const naughty = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const textArray = text.split(" ");
  let cleanText = "";

  textArray.forEach(function (element) {
    const lowerElement = element.toLowerCase();
    if (!naughty.some(naughtyWord => lowerElement.includes(naughtyWord.toLowerCase()))) {
      cleanText += element + " ";
    }
  });

  return cleanText.trim();
}

const inputText = "This is a zoinks test. Please remove muppeteer naughty words.";
const cleanedText = naughtyWord("naughty", inputText);

console.log(cleanedText);