console.log(document.getElementById("confuse_stunnah_table"));
const words = [
    "can't", "ain't", "couldn't",
    "musn't", "meant", "don't",
    "isn't", "wasn't", "needn't",
    "aren't", "doesn't", "hasn't",
    "haven't", "hadn't", "shan't",
    "didn't", //"mightn't",
].sort();
const length = words.length;
const numberOfColumns = Math.sqrt(words.length);
const table = document.getElementById("confuse_stunnah_table");
let htmlContent = "";
for (let i = 0; i < length; i++) {
    if (i % numberOfColumns === 0) {
        htmlContent += "<tr></tr>"
    }
    htmlContent += `<td>${words[i] === "meant" ? `<em>meant</em>` : words[i]}</td>`;
}
table.innerHTML += htmlContent;
console.log(table.innerHTML)