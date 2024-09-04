const student = {
    name: 'Slava',
    surname: 'Belkin',
    age: 20,
    practice: {
        place: 'IKTG',
        hours: 47,
    }
};
console.log(JSON.stringify(student, null, 4));

