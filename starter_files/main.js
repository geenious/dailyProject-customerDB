function companyDirectory(thing) {

let header = document.createElement("h1");
let body = document.querySelector("body");
header.textContent = "Internal Company Directory";
body.appendChild(header);
let container = document.createElement("div");
container.id = "container";
body.appendChild(container);

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

  container.innerHTML = employeeProfile;
  }
}

companyDirectory(customers);
