function companyDirectory(thing) {

  let title = `<h1>Internal Company Directory</h1>`;
  document.body.innerHTML = title;
  let employeeProfile = "";
  for (let i = 0; i < customers.results.length; i++) {
    employeeProfile += `
    <div id="employee">
      <img id="headshot" src=${customers.results[i].picture.large}>
      <div id="name">
        ${customers.results[i].name.first} ${customers.results[i].name.last}
      </div>
      <div id="email">
        ${customers.results[i].email}
      </div>
      <div id="address">
        ${customers.results[i].location.street}<br>
        ${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}
      </div>
      <div id="phone">
        ${customers.results[i].phone}
      </div>
      <div id="ssn">
        ${customers.results[i].id.value}
      </div>
    </div>
  `;

  document.body.innerHTML += employeeProfile;
  }
}

companyDirectory(customers);
