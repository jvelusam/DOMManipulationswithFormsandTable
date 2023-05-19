// create form elements
// let heading = document.createElement('h1');
// heading.innerHTML = '<b>Welcome</b>';
// document.body.append(heading);

// let parent = document.createElement('div');
// let child = document.createElement('p');

// parent.append(child);

var form = document.createElement("form");

// let div = document.createElement('div')
// div.setAttribute('class', 'container')
// div.setAttribute('id', 'formid')
// form.appendChild(div)

// let div2 = document.createElement('div')
// div.appendChild(div2);

// let h2 = document.createElement('h2');
// h2.innerText = 'Employee Details'
// h2.setAttribute('class', 'd-flex justify-content-center align-items-center');
// div2.appendChild(h2);

// Div inside Div , label has sperate div and Input also has seperate div for the First Name


let FN = document.createElement('div')
FN.setAttribute('class', 'row')
form.appendChild(FN);
let FN1 = document.createElement('div')
FN1.setAttribute('class', 'col-25')
FN.appendChild(FN1);

var FNLabel = document.createElement("label");
FNLabel.textContent = 'FIRST NAME:'
FNLabel.setAttribute('class','d-flex  align-items-center')
FNLabel.setAttribute('class','form-label');
FNLabel.setAttribute('for','fname');
FN1.appendChild(FNLabel);


let FN2 = document.createElement('div')
FN2.setAttribute('class', 'row')
form.appendChild(FN2);

let FN3 = document.createElement('div')
FN3.setAttribute('class', 'col-75')
FN2.appendChild(FN3);

var FNInput = document.createElement("input");
 FNInput.type = "text";
 FNInput.name = "name";
 FNInput.setAttribute('class','form-control');
 FNInput.setAttribute('id','fname');
 FN3.appendChild(FNInput);


 let LN = document.createElement('div')
 LN.setAttribute('class', 'row')
 form.appendChild(LN);
 let LN1 = document.createElement('div')
 LN1.setAttribute('class', 'col-25')
 LN.appendChild(LN1);
 
 var LNLabel = document.createElement("label");
 LNLabel.textContent = 'LAST NAME:';
 LNLabel.setAttribute('class','form-label');
 LNLabel.setAttribute('for','fname');
 LN1.appendChild(LNLabel);
 
 
 let LN2 = document.createElement('div')
 LN2.setAttribute('class', 'row')
 form.appendChild(LN2);
 
 let LN3 = document.createElement('div')
 LN3.setAttribute('class', 'col-75')
 LN2.appendChild(LN3);
 
 var LNInput = document.createElement("input");
 LNInput.type = "text";
 LNInput.name = "name";
 LNInput.setAttribute('class','form-control');
 LNInput.setAttribute('id','fname');
  LN3.appendChild(LNInput);


  //
let AddN = document.createElement('div')
AddN.setAttribute('class', 'row')
 form.appendChild(AddN);
 let AddN1 = document.createElement('div')
 AddN1.setAttribute('class', 'col-25')
 AddN.appendChild(AddN1);
 
 var ADDLabel = document.createElement("label");
 ADDLabel.textContent = 'ADDRESSE:';
 ADDLabel.setAttribute('class','form-label');
 ADDLabel.setAttribute('for','fname');
 AddN1.appendChild(ADDLabel);
 
 
 let ADDN2 = document.createElement('div')
 ADDN2.setAttribute('class', 'row')
 form.appendChild(ADDN2);
 
 let ADDN3 = document.createElement('div')
 ADDN3.setAttribute('class', 'col-75')
 ADDN2.appendChild(ADDN3);
 
 var ADDInput = document.createElement("input");
 ADDInput.type = "text";
 ADDInput.name = "name";
 ADDInput.setAttribute('class','form-control');
 ADDInput.setAttribute('id','fname');
 ADDN3.appendChild(ADDInput);
 



 let ZIPC = document.createElement('div')
 ZIPC.setAttribute('class', 'row')
 form.appendChild(ZIPC);
 let ZIPC1 = document.createElement('div')
 ZIPC1.setAttribute('class', 'col-25')
 ZIPC.appendChild(ZIPC1);
 
 var ZIPLabel = document.createElement("label");
 ZIPLabel.textContent = 'ZIP CODE:';
 ZIPLabel.setAttribute('class','form-label');
 ZIPLabel.setAttribute('for','fname');
 ZIPC1.appendChild(ZIPLabel);
 
 
 let ZIPN2 = document.createElement('div')
 ZIPN2.setAttribute('class', 'row')
 form.appendChild(ZIPN2);
 
 let ZIPN3 = document.createElement('div')
 ZIPN3.setAttribute('class', 'col-75')
 ZIPN2.appendChild(ZIPN3);
 
 var ZIPInput = document.createElement("input");
 ZIPInput.type = "text";
 ZIPInput.name = "name";
 ZIPInput.setAttribute('class','form-control');
 ZIPInput.setAttribute('id','fname');
 ZIPN3.appendChild(ZIPInput);



 
let MF = document.createElement('div')
MF.setAttribute('class', 'col-mb-3')
form.appendChild(MF);


let MF1 = document.createElement('div')
MF1.setAttribute('class', 'mt-3 row mb-4')
MF.appendChild(MF1);

let MF2 = document.createElement('div')
MF2.setAttribute('class', 'col-lg-6 col-sm-12')
MF1.appendChild(MF2);

var GenderLabel = document.createElement("label");
GenderLabel.textContent = "Male:";
GenderLabel.setAttribute('class','form-check-label d-flex  align-items-center')
MF2.appendChild(GenderLabel);
var GenderInput = document.createElement("input");
GenderInput.type = "radio";
GenderInput.setAttribute('class','form-check-label');
GenderInput.name = "gender";
GenderInput.id='Male'
GenderLabel.appendChild(GenderInput);


let GENDD = document.createElement('div')
GENDD.setAttribute('class', 'formbuilder-radio-group form-group field-gender')
form.appendChild(GENDD);


let GENDD1 = document.createElement('div')
GENDD1.setAttribute('class', 'radio-group')
GENDD.appendChild(GENDD1);

let GENDD2 = document.createElement('div')
GENDD2.setAttribute('class', 'formbuilder-radio')
GENDD1.appendChild(GENDD2);


var Gender1 = document.createElement("label");
Gender1.setAttribute('class','form-check-label d-flex  align-items-center')
Gender1.textContent = "Female:";
GENDD2.appendChild(Gender1);

var GenderInput1 = document.createElement("input");
GenderInput1.type = "radio";
GenderInput1.setAttribute('class','form-check-label');
GenderInput1.name = "gender";
GenderInput1.id='Female'
Gender1.appendChild(GenderInput1);



{/* <div class="formbuilder-checkbox-group form-group field-food">
    <label for="food" class="formbuilder-checkbox-group-label">Food Selections<span class="formbuilder-required">*</span></label>
    <div class="checkbox-group">
        <div class="formbuilder-checkbox">
            <input class="form-check-label" name="food[]" access="false" id="food-0" aria-required="true" value="Chapati" type="checkbox" checked="checked">
            <label for="food-0">Chapati</label>
        </div>
        <div class="formbuilder-checkbox">
            <input class="form-check-label" name="food[]" access="false" id="food-1" aria-required="true" value="Poori" type="checkbox" checked="checked">
            <label for="food-1">Poori</label>
        </div>
        <div class="formbuilder-checkbox">
            <input class="form-check-label" name="food[]" access="false" id="food-2" aria-required="true" value="Mutton" type="checkbox" checked="checked">
            <label for="food-2">Mutton</label>
        </div>
        <div class="formbuilder-checkbox">
            <input class="form-check-label" name="food[]" access="false" id="food-3" aria-required="true" value="Chicken" type="checkbox" checked="checked">
            <label for="food-3">Chicken</label>
        </div>
        <div class="formbuilder-checkbox">
            <input class="form-check-label" name="food[]" access="false" id="food-4" aria-required="true" value="Veg" type="checkbox" checked="checked">
            <label for="food-4">Veg</label>
        </div>
        <div class="formbuilder-checkbox">
            <input class="form-check-label" name="food[]" access="false" id="food-5" aria-required="true" value="Paneer" type="checkbox" checked="checked">
            <label for="food-5">Paneer</label>
        </div>
    </div>
</div> */}

let FoodNonVegMeal = document.createElement('div')
FoodNonVegMeal.setAttribute('class', 'formbuilder-checkbox-group form-group field-food')
form.appendChild(FoodNonVegMeal);

let FoodNonVegM1 = document.createElement('div')
FoodNonVegM1.setAttribute('class', 'checkbox-group')
FoodNonVegMeal.appendChild(FoodNonVegM1);

let FoodNonVegM2 = document.createElement('div')
FoodNonVegM2.setAttribute('class', 'formbuilder-checkbox')
FoodNonVegM1.appendChild(FoodNonVegM2);


var FoodNVegLabC1 = document.createElement("label");
FoodNVegLabC1.textContent = "Non Veg Meal:";
FoodNVegLabC1.setAttribute('for','food-0');
FoodNonVegM2.appendChild(FoodNVegLabC1);


var FoodNVegCInput1 = document.createElement("input");
FoodNVegCInput1.type = "checkbox";
FoodNVegCInput1.setAttribute('class','form-check-label');
FoodNVegCInput1.name = "food[]";
FoodNVegCInput1.id='Food-0'
FoodNVegLabC1.appendChild(FoodNVegCInput1);




let FoodM = document.createElement('div')
FoodM.setAttribute('class', 'formbuilder-checkbox-group form-group field-food')
form.appendChild(FoodM);

let FooddM1 = document.createElement('div')
FooddM1.setAttribute('class', 'checkbox-group')
FoodM.appendChild(FooddM1);

let FooddM2 = document.createElement('div')
FooddM2.setAttribute('class', 'formbuilder-checkbox')
FooddM1.appendChild(FooddM2);


var FoodMLabC1 = document.createElement("label");
FoodMLabC1.textContent = "Mutton:";
FoodMLabC1.setAttribute('for','food-1');
FoodNonVegM2.appendChild(FoodMLabC1);


var FoodMCInput1 = document.createElement("input");
FoodMCInput1.type = "checkbox";
FoodMCInput1.setAttribute('class','form-check-label');
FoodMCInput1.name = "food[]";
FoodMCInput1.id='Food-1'
FoodMLabC1.appendChild(FoodMCInput1);




let FoodVeg = document.createElement('div')
FoodVeg.setAttribute('class', 'formbuilder-checkbox-group form-group field-food')
form.appendChild(FoodVeg);

let FoodVeg1 = document.createElement('div')
FoodVeg1.setAttribute('class', 'checkbox-group')
FoodVeg.appendChild(FoodVeg1);

let FoodVeg2 = document.createElement('div')
FoodVeg2.setAttribute('class', 'formbuilder-checkbox')
FoodVeg1.appendChild(FoodVeg2);


var FoodVegLabC1 = document.createElement("label");
FoodVegLabC1.textContent = "Veg Meal:";
FoodVegLabC1.setAttribute('for','food-2');
FoodNonVegM2.appendChild(FoodVegLabC1);


var FoodvegCInput1 = document.createElement("input");
FoodvegCInput1.type = "checkbox";
FoodvegCInput1.setAttribute('class','form-check-label');
FoodvegCInput1.name = "food[]";
FoodvegCInput1.id='Food-2'
FoodVegLabC1.appendChild(FoodvegCInput1);







let submitted = document.createElement('div')
submitted.setAttribute('class', 'col-25')
form.appendChild(submitted);

var submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.type='submit';
submitButton.setAttribute('class','btn btn-primary w-100')
submitted.appendChild(submitButton);


let formValues = 
{
    FristName: "F Name ",
    LastName: "L Name ",
    Addresse: "Addresse",
    Pincode: "1",
    Gender: "M",
    Food: [],
    State: "TN",
    Country: "IND",
}

submitButton.addEventListener("click", function (event) 
{
  

    event.preventDefault();

    let GEX = document.querySelector('input[name="gender"]:checked').id
    console.log(GEX);


    let Fodds = document.querySelectorAll('input[name="food"]:checked')
        console.log(Fodds);

        Fodds.forEach(element => 
        {
            console.log(element.id);
            formValues.Food.push(element.id);
        });


    var FRISTNAME = FNInput.value;
    var LASTNAMES = LNInput.value;
    var ADDRESSESS = ADDInput.value;
    var ZIPCODE = ZIPInput.value;
    var GEND = GEX;
    var Foodie = formValues.Food;
    var table = document.getElementById("dataTable");
    var row = table.insertRow();
    var nameCell = row.insertCell();
    var emailCell = row.insertCell();
    var addrCell = row.insertCell();
    var ZipCell = row.insertCell();
    var GEN = row.insertCell();
    var Fod = row.insertCell();
    nameCell.textContent = FRISTNAME;
    emailCell.textContent = LASTNAMES;
    addrCell.textContent = ADDRESSESS;
    ZipCell.textContent = ZIPCODE;
    GEN.textContent = GEND;
    Fod.textContent = Foodie;
  
    form.reset();
});

// create table
var table = document.createElement("table");
table.id = "dataTable";
var headerRow = table.insertRow();
var fnames = headerRow.insertCell();
fnames.textContent = "FRISTNAME";
var lnames = headerRow.insertCell();
lnames.textContent = "LASTNAMES";
var addresses = headerRow.insertCell();
addresses.textContent = "ADDRESSESS";
var zipp = headerRow.insertCell();
zipp.textContent = "ZIPCODE";
var gen = headerRow.insertCell();
gen.textContent = "Gender";
var Fodd = headerRow.insertCell();
Fodd.textContent = "Food Selections";


// add form and table to document
document.body.appendChild(form);
form.appendChild(FNLabel);
form.appendChild(FNInput);
form.appendChild(LNLabel);
form.appendChild(LNInput);
form.appendChild(ADDLabel);
form.appendChild(ADDInput);
form.appendChild(ZIPLabel);
form.appendChild(ZIPInput);
form.appendChild(GenderLabel);
form.appendChild(GenderInput);
form.appendChild(Gender1);
form.appendChild(GenderInput1);
form.appendChild(FoodNVegLabC1);
form.appendChild(FoodNVegCInput1);
form.appendChild(FoodMLabC1);
form.appendChild(FoodMCInput1);
form.appendChild(FoodVegLabC1);
form.appendChild(FoodvegCInput1);
form.appendChild(submitButton);
document.body.appendChild(table);
