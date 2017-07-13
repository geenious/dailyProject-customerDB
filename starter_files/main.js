function companyDirectory(thing) {

let header = document.createElement("h1");
let body = document.querySelector("body");
let container = document.createElement("div");
header.textContent = "Internal Company Directory";
container.id = "container";
body.appendChild(header);
body.appendChild(container);

  let employeeProfile = "";
  for (let i = 0; i < customers.results.length; i++) {
    let employee = customers.results[i];
    employeeProfile += `
    <div id="employee">
      <img id="headshot" src=${employee.picture.large}>
      <div id="name">
        ${employee.name.first} ${employee.name.last}
      </div>
      <div id="email">
        ${employee.email}
      </div>
      <div id="address">
        ${employee.location.street}<br>
        ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}
      </div>
      <div id="phone">
        ${employee.phone}
      </div>
      <div id="ssn">
        ${employee.id.value}
      </div>
    </div>
  `;

  container.innerHTML = employeeProfile;
  }
}

companyDirectory(customers);
