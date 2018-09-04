const printAll = () => {
  for (let i = 0; i < employeeList.length; i++) {
    render(`${employeeList[i].name},
    ${employeeList[i].officeNum},
    ${employeeList[i].phoneNum}`);
  }
};
// look up code....
const lookUp = name => {
  const result = employeeList.find(
    employee => employee.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (result === undefined) {
    render(`no match found...`);
  } else render(`${result.name} ${result.officeNum} ${result.phoneNum}`);
};

const verifyEmployee = name => {
  const index = employeeList.findIndex(
    employee => employee.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (index >= 0) {
    render(`True`);
  } else {
    render(`False`);
  }
};
// containsEmployee has no feature of case-insensitive.  This is to-do...
const containsEmployee = search => {
  const listContains = employeeList.filter(content =>
    content.name.toLowerCase().includes(search.toLowerCase())
  );
  if (listContains.length === 0) {
    render('no match found...');
  } else {
    for (let i in listContains) {
      render(
        `${listContains[i].name} ${listContains[i].officeNum} ${
          listContains[i].phoneNum
        }`
      );
    }
  }
};

const updateEmployee = name => {
  const updateName = employeeList.find(
    employee => employee.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (updateName === undefined) {
    render('no match found...');
  } else {
    const field = prompt("Which fied to update, 'office' or 'phone' ?");
    if (field === 'office') {
      let value = prompt('What is the update value? ');
      updateName.officeNum = value;
    } else if (field === 'phone') {
      let value = prompt('What is the update value? ');
      updateName.phoneNum = value;
    } else {
      render(`wrong field entered...`);
    }
    render(`${updateName.name} ${updateName.officeNum} ${updateName.phoneNum}`);
  }
};

const addEmployee = (name1, officeNum1, phoneNum1) => {
  const addToEmployeeList = {
    name: name1,
    officeNum: officeNum1,
    phoneNum: phoneNum1
  };
  employeeList.push(addToEmployeeList);
};

const deleteEmployee = name => {
  const result = employeeList.find(
    employee => employee.name.toLowerCase() === name.toLowerCase()
  );
  const removeIndex = employeeList.indexOf(result);
  if (removeIndex === -1) {
    render(`Found no match..`);
  } else {
    employeeList.splice(removeIndex, 1);
  }
};
