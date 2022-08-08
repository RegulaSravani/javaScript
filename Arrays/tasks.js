const persons = [
  {
    name: 'Ram',
    age: 23,
  },
  {
    name: 'Sandeep',
    age: 12,
  },
  {
    name: 'Sowmya',
    age: 32,
  },
  {
    name: 'Ramesh',
    age: 27,
  },
];

//1) Modify the age of sowmya in differnet ways
//2) Find the younger and older persons from the given persons array

// TASK ONE .....................................................................

//   changing soumya age in different ways

// 1st way
const newPersonsData = persons.map((item) => {
  if (item.name === "Sowmya") {
    return { ...item, age: 45 };
  } else return item;
});
console.log(newPersonsData, "newPersonsData");

// 2nd way
const index = persons.findIndex((item) => item.name === "Sowmya");
persons[index].age = 45;
console.log(persons, "persons");

// 3rd way

const newPersonsData2 = persons.find((item) => item.name === "Sowmya");
if (newPersonsData2) {
  newPersonsData2.age = 45;
}
console.log(newPersonsData2, "newPersonsData2");

// TAST TWO ..............................................................

// finding max and min age
const max = persons.reduce((prev, current) =>
  prev.age > current.age ? prev : current
);
const min = persons.reduce((prev, current) =>
  prev.age < current.age ? prev : current
);
console.log(max, min, "max");

let maximumAge = persons[0].age;
let minimumAge = persons[0].age;

persons.forEach((item) => {
  if (item.age < minimumAge) {
    minimumAge = item.age;
  } else if (item.age > maximumAge) {
    maximumAge = item.age;
  }
});

console.log(maximumAge, minimumAge);

for (let i = 1; i <= persons.length - 1; i++) {
  if (maximumAge < persons[i].age) {
    maximumAge = persons[i].age;
  }
  if (minimumAge > persons[i].age) {
    minimumAge = persons[i].age;
  }
}

console.log(maximumAge, minimumAge, "age");
