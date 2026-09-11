const grades = [7, 9, 5, 10, 8, 6];

const noteMari = grades.filter(nota => nota >= 8);
console.log("Note >= 8:", noteMari);

const media = grades.reduce((suma, nota) => suma + nota, 0) / grades.length;
console.log("Media:", media);

const noteMarite = grades.map(nota => Math.min(nota + 1, 10));
console.log("Note mărite:", noteMarite);