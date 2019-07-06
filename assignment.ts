function tableCreate(employees) {
  var table = document.createElement('table');
  table.setAttribute('class', 'table');
  document.body.appendChild(table);

  var tableHead = document.createElement('thead');
  tableHead.setAttribute('class', 'thead-light');
  table.appendChild(tableHead);

  var tableHeadRow = document.createElement('tr');
  tableHead.appendChild(tableHeadRow);

  var tableHeadRowContentCount = document.createElement('th');
  tableHeadRowContentCount.setAttribute('scope', 'col');
  tableHeadRowContentCount.innerHTML = '#';
  tableHeadRow.appendChild(tableHeadRowContentCount);

  var employeeKeys = [];
  if (employees && employees.length > 0) {
    employeeKeys = Object.keys(employees[0]);
  }
  for (var index = 0; index < employeeKeys.length; index++) {
    var tableHeadRowContent = document.createElement('th');
    tableHeadRowContent.setAttribute('scope', 'col');
    tableHeadRowContent.innerHTML = employeeKeys[index].toUpperCase();
    tableHeadRow.appendChild(tableHeadRowContent);
  }
  var tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  for (var indexRow = 0; indexRow < employees.length; indexRow++) {
    var tableBodyRow = document.createElement('tr');
    tableBody.appendChild(tableBodyRow);

    var tableBodyRowContentCount = document.createElement('th');
    tableBodyRowContentCount.setAttribute('scope', 'col');
    tableBodyRowContentCount.innerHTML = (indexRow+1).toString();
    tableBodyRow.appendChild(tableBodyRowContentCount);

    for (
      var indexColumn = 0;
      indexColumn < employeeKeys.length;
      indexColumn++
    ) {
      var tableBodyRowContent = document.createElement('th');
      tableBodyRowContent.innerHTML =
        employees[indexRow][employeeKeys[indexColumn]];
      tableBodyRow.appendChild(tableBodyRowContent);
    }
  }
}

var employees = [
  {
    firstName: 'John',
    lastName: 'Appleseed',
    designation: 'Senior Software Engineer',
    experience: '18 months',
    age: 27,
    phonenumber: '9798636932',
    currentLocation: 'Chicago',
    telecommuter: true
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    designation: 'Associate Software Engineer',
    experience: '12 months',
    CurrentLocation: 'Omaha',
    phoneNumber: '9798636932',
    telecommuter: false
  },
  {
    firstName: 'John',
    lastName: 'Papa',
    designation: 'Angular Developer',
    experience: '48 months',
    currentLocation: 'Silicon Valley',
    telecommuter: true
  }
];

tableCreate(employees);
