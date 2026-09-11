const employees = [
  { id: 1, name: "Ana", department: "IT", salary: 12000, experience: 5 },
  { id: 2, name: "Ion", department: "Vânzări", salary: 8000, experience: 2 },
  { id: 3, name: "Maria", department: "IT", salary: 15000, experience: 6 },
  { id: 4, name: "Vlad", department: "Marketing", salary: 9000, experience: 1 },
  { id: 5, name: "Elena", department: "Vânzări", salary: 10000, experience: 4 },
  { id: 6, name: "Radu", department: "HR", salary: 7500, experience: 3 },
  { id: 7, name: "Cristina", department: "IT", salary: 11000, experience: 8 }
];

const groupByDepartment = (angajati) =>
  angajati.reduce((grupe, { department, ...rest }) => {
    const departamentAngajati = grupe[department] || [];
    return {
      ...grupe,
      [department]: [...departamentAngajati, { department, ...rest }]
    };
  }, {});

const filterByDepartment = (angajati, department) =>
  angajati.filter((angajat) => angajat.department === department);

const calculateAverageSalary = (angajati) =>
  angajati.reduce((total, { salary }) => total + salary, 0) / angajati.length;

const getExperiencedEmployees = (angajati) =>
  angajati.filter(({ experience }) => experience > 3);

const raiseSalaryForExperienced = (angajati) =>
  angajati.map((angajat) =>
    angajat.experience > 3
      ? { ...angajat, salary: Math.round(angajat.salary * 1.1) }
      : { ...angajat }
  );

const displayReport = (angajati) => {
  console.log("=== RAPORT FINAL ANGAJAȚI ===\n");

  angajati.forEach(({ id, name, department, salary, experience }) => {
    console.log(
      `ID: ${id} | ${name} | Departament: ${department} | Salariu: ${salary} lei | Experiență: ${experience} ani`
    );
  });

  const salariuMediu = calculateAverageSalary(angajati);
  console.log(`\nSalariul mediu al companiei: ${salariuMediu.toFixed(2)} lei`);
};

const angajatiActualizati = raiseSalaryForExperienced(employees);
displayReport(angajatiActualizati);