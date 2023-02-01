// EXERCISE

const person = {
    name: 'Maxine',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
  };

  console.log(person.address.city);
  console.log(person.hobbies[1]);

  // CHALLENGE

const cohort = {
  id: 1234,
  name: 'May2022',
  students: ['Zac', 'Lauren', 'Daniel']
};

const objectFormat = (object) => {
  id = object.id;
  date = object.name;
  students = object.students.length;
  console.log(`${id} - ${date} - ${students} students in this cohort`)
};

console.log(objectFormat(cohort));