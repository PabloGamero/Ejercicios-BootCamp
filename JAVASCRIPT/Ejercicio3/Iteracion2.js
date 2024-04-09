// **Iteración #2: Condicionales avanzados**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade
// la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

const copiaAlumno = [];
alumns.forEach((alumno) => {
  let acc = 0;
  alumno.T1 == true && acc++;
  alumno.T2 == true && acc++;
  alumno.T3 == true && acc++;
  if (acc >= 2) {
    copiaAlumno.push({ ...alumno, isApproved: true });
  } else copiaAlumno.push({ ...alumno, isApproved: false });
});
console.log(copiaAlumno);
