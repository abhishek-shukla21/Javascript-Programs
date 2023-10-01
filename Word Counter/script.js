const textArea = document.querySelector(".words");

const countButton = document.querySelector(".count-btn")
const wordsNumber = document.querySelector(".no-of-words")

function countWords() {
    var words = textArea.value;
    var wordsTrimmed = words.replace(/\s+/g, " ").trim();
    var splitWords = wordsTrimmed.split(" ");

    var noOfWords = splitWords.length;
    if (splitWords[0] === "") {
        noOfWords = 0;
    }

    wordsNumber.innerHTML = noOfWords;
};

countButton.addEventListener('click', countWords);