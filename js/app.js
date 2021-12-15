var sentences = [
    "Do More Please",
    "Java is to JavaScript what car is to Carpet",
    "Knowledge is power",
    "First, solve the problem. Then, write the code",
]
var sentence = document.getElementById("sentence")

sentence.innerHTML=sentences[Math.floor(Math.random()*sentences.length)]