import { calculateSum, calculateAverage } from "./utils.js";
import {
  displayAllStudents,
  getTopStudents,
  getClassAverage,
  findStudentById,
  addStudent
} from "./students.js";

const students = [
  { id: 1, name: "Ana", grade: 9 },
  { id: 2, name: "Ion", grade: 7 },
  { id: 3, name: "Maria", grade: 10 },
  { id: 4, name: "Vlad", grade: 6 },
  { id: 5, name: "Elena", grade: 8 }
];

const noteExemplu = [8, 9, 7];
console.log(`Suma notelor exemplu: ${calculateSum(noteExemplu)}`);
console.log(`Media notelor exemplu: ${calculateAverage(noteExemplu)}`);

console.log("\n--- Toți elevii ---");
displayAllStudents(students);

console.log("\n--- Elevii cu nota >= 8 ---");
displayAllStudents(getTopStudents(students));

console.log("\n--- Media clasei ---");
console.log(`Media clasei este: ${getClassAverage(students)}`);

console.log("\n--- Căutare elev după id ---");
try {
  const elevGasit = findStudentById(students, 3);
  console.log(`Elev găsit: ${elevGasit.name}, nota ${elevGasit.grade}`);

  const elevInexistent = findStudentById(students, 99);
  console.log(elevInexistent.name);
} catch (eroare) {
  console.log(`Eroare: ${eroare.message}`);
}

console.log("\n--- Adăugare elev nou ---");
try {
  addStudent(students, { id: 6, name: "Radu", grade: 9 });
  console.log("Elev adăugat cu succes!");
  displayAllStudents(students);
} catch (eroare) {
  console.log(`Eroare: ${eroare.message}`);
}