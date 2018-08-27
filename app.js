const employeeList = [
  {
    name: "Jan",
    officeNum: 1,
    phoneNum: "222-222-2222"
  },
  {
    name: "Juan",
    officeNum: 304,
    phoneNum: "489-789-8789"
  },
  {
    name: "Margie",
    officeNum: 789,
    phoneNum: "789-789-7897"
  },
  {
    name: "Sara",
    officeNum: 32,
    phoneNum: "222-789-4654"
  },
  {
    name: "Tyrell",
    officeNum: 3,
    phoneNum: "566-621-0452"
  },
  {
    name: "Tasha",
    officeNum: 213,
    phoneNum: "789-766-5675"
  },
  {
    name: "Ty",
    officeNum: 211,
    phoneNum: "789-766-7865"
  },
  {
    name: "Sarah",
    officeNum: 345,
    phoneNum: "222-789-5231"
  }
];

// Take a command
// print: Print all,  verify: employee in employeeList?
// lookup: Find an employee, contains: search partial or full name,
// update: update employeeList, add: add a new employee,
// delete: delete an employee.
const command = prompt("Enter your command: ");
switch (command) {
  case "print":
    printAll();
    break;
  case "verify":
    const name1 = prompt("Enter the name to verify:");
    verifyEmployee(name1);
    break;
  case "lookup":
    const name2 = prompt("Enter the name to look up:");
    lookUp(name2);
    break;
  case "contains":
    const name3 = prompt("Enter partial name to look up:");
    containsEmployee(name3);
    break;
  case "update":
    const employeeName = prompt("Enter the emplyee name");
    updateEmployee(employeeName);
    // printAll();
    break;
  case "add":
    const nameToAdd = prompt("Enter the employee name to add: ");
    const officeToAdd = prompt("Enter the offince number: ");
    const phoneToAdd = prompt("Enter the phone number to add: ");
    addEmployee(nameToAdd, officeToAdd, phoneToAdd);
    printAll();
    break;
  case "delete":
    const nameToDelete = prompt("Enter the employee name to delete: ");
    deleteEmployee(nameToDelete);
    printAll();
    break;
  default:
    console.print("wrong command");
}

function printAll() {
  for (let i = 0; i < employeeList.length; i++) {
    render(`${employeeList[i].name},
    ${employeeList[i].officeNum},
    ${employeeList[i].phoneNum}`);
  }
}
// look up code....
function lookUp(name) {
  const result = employeeList.find(employee => employee.name === name);
  console.log(result);
  if (result === undefined) {
    render(`no match found...`);
  } else render(`${result.name} ${result.officeNum} ${result.phoneNum}`);
}

function verifyEmployee(name) {
  const index = employeeList.findIndex(employee => employee.name === name);
  console.log(index);
  if (index > 0) {
    render(`True`);
  } else {
    render(`False`);
  }
}

function containsEmployee(search) {
  const list = employeeList.filter(content => content.name.includes(search));
  console.log(list);
  if (list.length === 0) {
    render("no match found...");
  } else {
    for (let i in list) {
      console.log(list[i].name, list[i].officeNum, list[i].phoneNum);
    }
  }
}

function updateEmployee(name) {
  const updateName = employeeList.find(employee => employee.name === name);
  console.log(updateName);
  if (updateName === undefined) {
    render("no match found...");
  } else {
    const field = prompt("Which fied to update, 'office' or 'phone' ?");
    if (field === "office") {
      let value = prompt("What is the update value? ");
      updateName.officeNum = value;
    } else if (field === "phone") {
      let value = prompt("What is the update value? ");
      updateName.phoneNum = value;
    } else {
      render(`wrong field entered...`);
      console.log("wrong field..");
    }
    render(`${updateName.name} ${updateName.officeNum} ${updateName.phoneNum}`);
  }
}

function addEmployee(name1, officeNum1, phoneNum1) {
  const addToEmployeeList = {
    name: name1,
    officeNum: officeNum1,
    phoneNum: phoneNum1
  };
  employeeList.push(addToEmployeeList);
  console.log(employeeList);
}

function deleteEmployee(name) {
  const result = employeeList.find(employee => employee.name === name);
  // console.log(result);
  const removeIndex = employeeList.indexOf(result);
  // console.log(removeIndex);
  if (removeIndex === -1) {
    render(`Found no match..`);
  } else {
    employeeList.splice(removeIndex, 1);
    //  render(`${result.name} ${result.officeNum} ${result.phoneNum}`);
  }
}
