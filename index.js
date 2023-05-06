const familyTree = [
  {
    id: "23b9dbff",
    name: "Jessie",
    age: 50,
    children: [
      {
        id: "5c0f3094",
        name: "Peter",
        age: 20
      },
      {
        id: "c1484221",
        name: "Paul",
        age: 32,
        children: [
          {
            id: "2e6d866e",
            name: "Carol",
            age: 12, children: [{ id: '1111', name: 'Syket', age: 23232 }]
          },
          {
            id: "e48a27ad",
            name: "Hester",
            age: 15
          }
        ]
      },
      {
        id: "8a265c23",
        name: "Hilda",
        age: 25
      }
    ]
  },
  {
    id: "53164b2b",
    name: "Mathew",
    age: 70,
    children: [
      {
        id: "b14a960c",
        name: "Spencer",
        age: 45,
        children: [
          {
            id: "ff3c260c",
            name: "Joseph",
            age: 22
          },
          {
            id: "7c60920a",
            name: "Robert",
            age: 27,
            children: [
              {
                id: "0e11874f",
                name: "Ian",
                age: 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "5a4bdc98",
    name: "Claire",
    age: 63,
    children: [
      {
        id: "014b62a3",
        name: "Adrian",
        age: 41
      },
      {
        id: "a1899541",
        name: "Julie",
        age: 32,
        children: [
          {
            id: "013362a3",
            name: "Patricia",
            age: 4
          }
        ]
      }
    ]
  }
];


// function getAllMembers(members){
//   console.log('calling')
//    let children = [];

//   const flatteningChildren = members.map(m => {

//     if(m.children && m.children.length){
//       children = [...children, ...m.children ];
//     }
//     return m;
//   })  

//   return flatteningChildren.concat(children.length ? getAllMembers(children) : children);


// }

// console.log(getAllMembers(familyTree))



//Recursive function


let flattenResult = [];
function recursiveFunction(members) {


  for (const obj of members) {
    // console.log(obj);
    if (obj.children && obj.children.length) {

      recursiveFunction(obj.children);
      delete obj.children;
      flattenResult.push(obj);

    } else {
      flattenResult.push(obj);
    }

  }

  return flattenResult;

}

console.log(recursiveFunction(familyTree))