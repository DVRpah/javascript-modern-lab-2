import { calculateAverage } from "./utils.js";

export function displayAllStudents(students) {
  students.forEach(student => {
    console.log(`ID: ${student.id} | Nume: ${student.name} | Nota: ${student.grade}`);
  });
}

export function getTopStudents(students) {
  return students.filter(student => student.grade >= 8);
}

export function getClassAverage(students) {
  const grades = students.map(student => student.grade);
  return calculateAverage(grades);
}

export function findStudentById(students, id) {
  const student = students.find(s => s.id === id);
  if (!student) {
    throw new Error(`Elevul cu id-ul ${id} nu a fost găsit.`);
  }
  return student;
}

export function addStudent(students, newStudent) {
  const idExista = students.some(s => s.id === newStudent.id);
  if (idExista) {
    throw new Error(`Un elev cu id-ul ${newStudent.id} există deja.`);
  }
  students.push(newStudent);
  return students;
}