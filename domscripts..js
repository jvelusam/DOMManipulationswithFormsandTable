var form = document.createElement("form");

//FristName Tag
var nameLabel = document.createElement("label");
nameLabel.textContent = "FristName:";
var nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "name";

//Last Name
var emailLabel = document.createElement("label");
emailLabel.textContent = "LastName:";
var emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";


//Addresse
var phoneLabel = document.createElement("label");
phoneLabel.textContent = "Addresse:";
var phoneInput = document.createElement("input");
phoneInput.type = "text";
phoneInput.name = "name";

// Phone

var phoneLabel = document.createElement("label");
phoneLabel.textContent = "Pincode:";
var Pincode = document.createElement("input");
Pincode.type = "tel";
Pincode.name = "phone";

var submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var name = nameInput.value;
  var email = emailInput.value;
  var Zip = Pincode.value;
  var table = document.getElementById("dataTable");
  var row = table.insertRow();
  var nameCell = row.insertCell();
  var emailCell = row.insertCell();
  var phoneCell = row.insertCell();
  nameCell.textContent = name;
  emailCell.textContent = email;
  phoneCell.textContent = Zip;
  form.reset();
});

// create table
var table = document.createElement("table");
table.id = "dataTable";
var headerRow = table.insertRow();
var nameHeader = headerRow.insertCell();
nameHeader.textContent = "Name";
var emailHeader = headerRow.insertCell();
emailHeader.textContent = "Email";
var phoneHeader = headerRow.insertCell();
phoneHeader.textContent = "Phone";

// add form and table to document
document.body.appendChild(form);
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(phoneLabel);
form.appendChild(phoneInput);
form.appendChild(submitButton);
document.body.appendChild(table);