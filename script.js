
let locpath = window.location.pathname
console.log(locpath)
if (locpath == '/index.html') 
{
    function handlesubmit() 
    {
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
        let firstname = document.getElementById('fname').value
        formValues.FristName = firstname;
        console.log(firstname);
        let lastname = document.getElementById('lname').value
        formValues.LastName = lastname;
        console.log(lastname);
        let addresse = document.getElementById('addresse').value
        formValues.Addresse = addresse;
        console.log(addresse);
        let Zip = document.getElementById('zip').value
        formValues.Pincode = Zip;
        console.log(Zip);
        let genders = document.querySelector('input[name="gender"]:checked').id
        formValues.Gender = genders;
        console.log(genders)
        let selectedfoods = document.querySelectorAll('input[name="food"]:checked')
        console.log(selectedfoods);
        let states = document.getElementById('stateid').value
         formValues.State = states;
         console.log(states);
         let country = document.getElementById('country').value
         formValues.Country = country;
         console.log(country);

        selectedfoods.forEach(element => 
        {
            console.log(element.id);
            formValues.Food.push(element.id);
        });

        console.log(formValues);


        if(firstname =="" || lastname =="" || addresse=="")
        {
            alert("Please enter something first!");
        }else{
            var html="";
     
            html="<tr><td>"+firstname+"</td><td>"+lastname+"</td><td>"+addresse+"</td><td>"+Zip+"</td><td>"+genders+"</td><td>"+formValues.Food+"</td><td>"+formValues.State+"</td><td>"+formValues.Country+"</td></tr>";
     
            document.getElementById('result').innerHTML+=html;
            document.getElementById('firstname').value="";
            document.getElementById('lastname').value="";
            document.getElementById('address').value="";
        }


    }
}





else if (locpath == '/userdetails.html') 
{


    // let data = document.getElementById("result").innerHTML = localStorage.getItem("sett");
    // console.log(data)
 let data = [
        {
            FristName: "F Name ",
            LastName: "L Name ",
            Addresse: "Addresse",
            Pincode: "1",
            Gender: "M",
            Food: "Veg",
            State: "TN",
            Country: "IND",
        },
        {
            FristName: "F Name ",
            LastName: "L Name ",
            Addresse: "Addresse",
            Pincode: "1",
            Gender: "M",
            Food: "Veg",
            State: "TN",
            Country: "IND",
        },
        {
            FristName: "F Name ",
            LastName: "L Name ",
            Addresse: "Addresse",
            Pincode: "1",
            Gender: "M",
            Food: "Veg",
            State: "TN",
            Country: "IND",
        },
        {
            FristName: "F Name ",
            LastName: "L Name ",
            Addresse: "Addresse",
            Pincode: "1",
            Gender: "M",
            Food: "Veg",
            State: "TN",
            Country: "IND",
        },
        {
            FristName: "F Name ",
            LastName: "L Name ",
            Addresse: "Addresse",
            Pincode: "1",
            Gender: "M",
            Food: "Veg",
            State: "TN",
            Country: "IND",
        },
        {
            FristName: "F Name ",
            LastName: "L Name ",
            Addresse: "Addresse",
            Pincode: "1",
            Gender: "M",
            Food: "Veg",
            State: "TN",
            Country: "IND",
        },
        {
            FristName: "F Name ",
            LastName: "L Name ",
            Addresse: "Addresse",
            Pincode: "1",
            Gender: "M",
            Food: "Veg",
            State: "TN",
            Country: "IND",
        },
        {
            FristName: "F Name ",
            LastName: "L Name ",
            Addresse: "Addresse",
            Pincode: "1",
            Gender: "M",
            Food: "Veg",
            State: "TN",
            Country: "IND",
        },
        {
            FristName: "F Name ",
            LastName: "L Name ",
            Addresse: "Addresse",
            Pincode: "1",
            Gender: "M",
            Food: "Veg",
            State: "TN",
            Country: "IND",
        },
        {
            FristName: "F Name ",
            LastName: "L Name ",
            Addresse: "Addresse",
            Pincode: "1",
            Gender: "M",
            Food: "Veg",
            State: "TN",
            Country: "IND",
        },
    ];






let xhr = new XMLHttpRequest();
xhr.open("GET","https://640e94b7cde47f68db32e71f.mockapi.io/users");
xhr.send();
xhr.onload = function ()
{
    let responses=JSON.parse(xhr.response);
    let headers = ['FristName', 'LastName', 'Addresse', 'Pincode']

    let table = document.createElement('table')
    table.setAttribute('class', 'table')

    let thead = document.createElement('thead')
    let tr = document.createElement('tr')

    for (let i of headers) {
        let th = document.createElement('th')
        th.innerText = i;
        tr.appendChild(th)
    }

    thead.append(tr);
    table.append(thead);

    let tbody = document.createElement('tbody');

    for (let i of responses) {
        let tr = document.createElement('tr')

        Object.values(i).forEach((tableData) => {
            let td = document.createElement('td')
            td.innerText = tableData;
            tr.append(td)
        })
        tbody.append(tr)
    }

    table.appendChild(tbody)

    document.body.append(table)
}
   

    
}


//XML API GET Request 
// let xhr = new XMLHttpRequest();
// xhr.open("GET","https://640e94b7cde47f68db32e71f.mockapi.io/users");
// xhr.send();
// xhr.onload = function ()
// {
//     let responses=JSON.parse(xhr.response);
// }