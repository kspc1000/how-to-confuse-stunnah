const words = [
    "ain't",  "aren't", "can't",  "couldn't",
    "didn't", "doesn't", "don't",  "hadn't",
    "hasn't", "haven't", "isn't",  'meant',
    "musn't", "needn't", "shan't", "wasn't"
]
const { length: numberOfWords } = words;
const numberOfColumns = Math.sqrt(numberOfWords);

const table = document.getElementById("confuse_stunnah_table");
let htmlContent = "";
for (let i = 0; i < numberOfWords; i++) {
    if (i % numberOfColumns === 0) {
        htmlContent += "<tr></tr>"
    }
    htmlContent += `<td>${words[i] === "meant" ? `<em>meant</em>` : words[i]}</td>`;
}
table.innerHTML += htmlContent;