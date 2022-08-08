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
