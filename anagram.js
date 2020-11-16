var wordDictionary = {}

function onLoad() {
    filePath = "enable1.txt"
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", filePath , true);
    rawFile.send(null);

    rawFile.onreadystatechange = function (){
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText
                lines = allText.split("\n")

                for (index = 0; index < lines.length; index++) {
                    var word = lines[index].trim()
                    var wordHash = word.split('').sort().join("")
                    var wordLength = wordHash.length

                    if (! (wordLength in wordDictionary)) {
                        wordDictionary[wordLength] = Object()
                    }

                    if (! (wordHash in wordDictionary[wordLength])) {
                        wordDictionary[wordLength][wordHash] = []
                    }

                    wordDictionary[wordLength][wordHash].push(word)
                }

                console.log("Loaded word dictionary")
            }
        }
    }
}

function loadSolutions() {
    var word = document.getElementById("unscrambleInput").value.toLowerCase()
    var wordHash = word.split('').sort().join("")
    var wordLength = wordHash.length

    var solutions = []

    if (wordLength in wordDictionary && wordHash in wordDictionary[wordLength]) {
        solutions = wordDictionary[wordLength][wordHash]
    }

    console.log(solutions)

    // Delete everything in solutions div
    solutionsContainer = document.getElementById("solutions");
    solutionsContainer.innerHTML = '';

    for (index = 0; index < solutions.length; index++) {
        var solution = document.createElement('p')
        solution.classList.add("solution")
        solution.innerHTML = solutions[index]

        solutionsContainer.appendChild(solution)
    }

    // document.getElementById(id).innerHTML = new HTML
}