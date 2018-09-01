const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

// Take a command
// print: Print all,  verify: employee in employeeList?
// lookup: Find an employee, contains: search partial or full name,
// update: update employeeList, add: add a new employee,
// delete: delete an employee.
const command = prompt('Enter your command: ');
switch (command.toLocaleLowerCase()) {
  case 'print':
    printAll();
    break;
  case 'verify':
    const nameToVerify = prompt('Enter the name to verify:');
    verifyEmployee(nameToVerify);
    break;
  case 'lookup':
    const nameToLookup = prompt('Enter the name to look up:');
    lookUp(nameToLookup);
    break;
  case 'contains':
    const nameToContain = prompt(
      'Enter partial contained in the name to search:'
    );
    containsEmployee(nameToContain);
    break;
  case 'update':
    const nameToUpdate = prompt('Enter the emplyee name');
    updateEmployee(nameToUpdate);
    break;
  case 'add':
    const nameToAdd = prompt('Enter the employee name to add: ');
    const officeToAdd = prompt('Enter the offince number: ');
    const phoneToAdd = prompt('Enter the phone number to add: ');
    addEmployee(nameToAdd, officeToAdd, phoneToAdd);
    printAll();
    break;
  case 'delete':
    const nameToDelete = prompt('Enter the employee name to delete: ');
    deleteEmployee(nameToDelete);
    printAll();
    break;
  default:
    render(`Wrong command..`);
}
