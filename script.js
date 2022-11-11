//1.Щасливий квиток
let ticketNumber = prompt("Ведіть свій шестизначний номер білетика");
let Numbers = ticketNumber.split("");
console.log(Numbers);
let firstSum = Number(Numbers[0]) + Number(Numbers[1]) + Number(Numbers[2]);
console.log(firstSum);
let secondSum = Number(Numbers[3]) + Number(Numbers[4]) + Number(Numbers[5]);
console.log(secondSum);
if (firstSum === secondSum) {
  alert("Щасливчик ти! ☘ Квиток свій з'їж тепер!");
} else {
  alert("Ну що ж, звичайний квиток, нажаль 😐");
}

//2.Найкоротше слово
let userText = prompt("Введіть своє речення");
console.log(userText.length);
let userWords = userText.split(" ");
console.log(userWords);
let wordsLength = [];
for (let i = 0; i < userWords.length; i++) {
  wordsLength.push(userWords[i].length);
  console.log(wordsLength);
}
console.log(Math.min(...wordsLength));
alert(`Довжина найкоротшого слова в реченні ${Math.min(...wordsLength)}`);

//3.ДНК
let dna = prompt("Введіть одну сторону ДНК");
complemenDNA = "";
for (let i = 0; i < dna.length; i += 1) {
  if (dna[i] === "A") complemenDNA += "T";
  if (dna[i] === "T") complemenDNA += "A";
  if (dna[i] === "C") complemenDNA += "G";
  if (dna[i] === "G") complemenDNA += "C";
}

alert(`Комплементарна сторона ДНК - ${complemenDNA}`);
