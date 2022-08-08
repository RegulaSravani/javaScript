const userDetails = [
  {
    name: "sravani",
    age: "25",
  },
  {
    name: "krishna",
    age: "30",
  },
];

const newData = userDetails.map((item, index) => {
  if (item.name === "krishna") {
    return { ...item, name: "krishna manadava" };
  } else return item;
});

console.log(newData, "newdata");

//Q1) Do the map method manipultaion/updating the original? Explian(tpe the answer in comments mode) with briefly?
//Q2) What rae the different ways to execute a js file? Which way is best?

//Answers
