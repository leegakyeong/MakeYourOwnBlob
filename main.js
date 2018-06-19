var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');

var yourNumberForm = document.getElementById('yourNumber');
var yourNumber2Form = document.getElementById('yourNumber2');
var yourNumber4Form = document.getElementById('yourNumber4');
var yourLocForm = document.getElementsByName('loc');
var yourLoc3Form = document.getElementsByName('loc3');
var yourLoc5Form = document.getElementsByName('loc5');
var yourLoc6Form = document.getElementsByName('loc6');
var yourLoc7Form = document.getElementsByName('loc7');


if(!localStorage.getItem('yourNumber')) {
  populateStorage();
} else {
	setStyles();
}

/*if(!localStorage.getItem('yourNumber2')) {
  populateStorage();
} else {
  setStyles();
}

if(!localStorage.getItem('yourNumber3')) {
  populateStorage();
} else {
  setStyles();
}

if(!localStorage.getItem('yourNumber4')) {
  populateStorage();
} else {
  setStyles();
}

if(!localStorage.getItem('yourNumber5')) {
  populateStorage();
} else {
  setStyles();
}

if(!localStorage.getItem('yourNumber6')) {
  populateStorage();
} else {
  setStyles();
}

if(!localStorage.getItem('yourNumber7')) {
  populateStorage();
} else {
  setStyles();
}

if(!localStorage.getItem('yourNumber8')) {
  populateStorage();
} else {
  setStyles();
}*/


function populateStorage() {
  localStorage.setItem('yourNumber', document.getElementById('yourNumber').value);
  localStorage.setItem('yourNumber2', document.getElementById('yourNumber2').value);
  localStorage.setItem('yourNumber4', document.getElementById('yourNumber4').value);
  
  for(var i = 0; i < yourLocForm.length; i++){
    if(yourLocForm[i].checked){
        loc_value = yourLocForm[i].value;
        console.log(loc_value);
    }
  }

  for(var i = 0; i < yourLoc3Form.length; i++){
    if(yourLoc3Form[i].checked){
        loc3_value = yourLoc3Form[i].value;
        console.log(loc3_value);
    }
  }

  for(var i = 0; i < yourLoc5Form.length; i++){
    if(yourLoc5Form[i].checked){
        loc5_value = yourLoc5Form[i].value;
        console.log(loc5_value);
    }
  }

  for(var i = 0; i < yourLoc6Form.length; i++){
    if(yourLoc6Form[i].checked){
        loc6_value = yourLoc6Form[i].value;
        console.log(loc6_value);
    }
  }

  for(var i = 0; i < yourLoc7Form.length; i++){
    if(yourLoc7Form[i].checked){
        loc7_value = yourLoc7Form[i].value;
        console.log(loc7_value);
    }
  }

  localStorage.setItem('loc', loc_value);
  localStorage.setItem('loc3', loc_value);
  localStorage.setItem('loc5', loc_value);
  localStorage.setItem('loc6', loc_value);
  localStorage.setItem('loc7', loc_value);

  setStyles();
}


function setStyles() {
  var currentNumber= localStorage.getItem('yourNumber');
  var currentNumber2= localStorage.getItem('yourNumber2');
  var currentNumber4= localStorage.getItem('yourNumber4');
  
  var currentLoc= localStorage.getItem('loc');
  var currentLoc3= localStorage.getItem('loc3');
  var currentLoc5= localStorage.getItem('loc5');
  var currentLoc6= localStorage.getItem('loc6');
  var currentLoc7= localStorage.getItem('loc7');


  /*document.getElementById('yourNumber').value = currentNumber;
  document.getElementById('yourNumber2').value = currentNumber2;
  document.getElementById('yourNumber3').value = currentNumber3;
  document.getElementById('yourNumber4').value = currentNumber4;
  document.getElementById('yourNumber5').value = currentNumber5;
  document.getElementById('yourNumber6').value = currentNumber6;
  document.getElementById('yourNumber7').value = currentNumber7;*/
  //document.getElementById('yourNumber8').value = currentNumber8;

  //console.log(currentNumber2);
  //pElem.innerHTML = currentNumber2;
}

/*yourNumberForm.onchange = populateStorage;
yourNumber2Form.onchange = populateStorage;
yourNumber3Form.onchange = populateStorage;
yourNumber4Form.onchange = populateStorage;
yourNumber5Form.onchange = populateStorage;
yourNumber6Form.onchange = populateStorage;
yourNumber7Form.onchange = populateStorage;*/

for(var i = 0; i < yourLocForm.length; i++){
  yourLocForm[i].onchange = populateStorage;
}




