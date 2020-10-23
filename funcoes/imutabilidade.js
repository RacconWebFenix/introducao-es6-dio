/*
const user = {
    name: "Marcos",
    lastName: "Domingues"
};

function getUserWithFullName(user){
    return {
        ...user, // acrescentando novo atributo ao objeto user. - (...) = spreed operator es2018
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);
*/

const students = [
    {
        name: 'Grace',
        grade: '7'
    },
    {
        name: 'Jenifer',
        grade: '4'
    },
    {
        name: 'Paul',
        grade: '10'
    },
];

function getAprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos Aprovados');
console.log(getAprovedStudents(students));

console.log('\nLista de Alunos');
console.log(students);
