function addNewWEField(){
     let newNode = document.createElement("textarea");
     newNode.classList.add("form-control");
     newNode.classList.add("weField");
     newNode.classList.add("mt-2");
     newNode.setAttribute("rows",3);
     newNode.setAttribute("placeholder", "Enter here");

     let weOb = document.getElementById("we");
     let weAddButtonOb = document.getElementById("weAddButton");

     weOb.insertBefore(newNode, weAddButtonOb);
}  

function addNewAQField(){
    let newNode = document.createElement("textarea");
     newNode.classList.add("form-control");
     newNode.classList.add("aqField");
     newNode.classList.add("mt-2");
     newNode.setAttribute("rows",3);
     newNode.setAttribute("placeholder", "Enter here");

     let aqOb = document.getElementById("aq");
     let aqAddButtonOb = document.getElementById("aqAddButton");

     aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating cv
function generateCV(){
    //console.log("Generate Cv");

    let nameField = document.getElementById('nameField').value;
    
    let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML = nameField;

    //direct

    document.getElementById('nameT2').innerHTML = nameField;

    //contact

    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;
    
    //address

    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

     //Gmail

     document.getElementById('gmT').innerHTML = document.getElementById('gmField').value;

      //Github

    document.getElementById('ghT').innerHTML = document.getElementById('ghField').value;

     //LinkedIn

     document.getElementById('liT').innerHTML = document.getElementById('liField').value;

     //Objective

     document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

     //Work Experiance

     let wes=document.getElementsByClassName("weField");

     let str=""; 

     for(let e of wes){
          str = str + `<li> ${e.value} </li>`;
     }

     document.getElementById("weT").innerHTML = str;

     //Academic Qualifiaction

     let aqs=document.getElementsByClassName("aqField");

     let str1 ="";

     for(let e of aqs){
          str1 += `<li> ${e.value} </li>`;
     }

     document.getElementById("aqT").innerHTML = str1;

     document.getElementById('cv-form').style.display = 'none';
     document.getElementById('cv-template').style.display = 'block';
}

function printCV(){
     window.print();
}