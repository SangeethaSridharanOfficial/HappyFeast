/*///////////////JQuery for the navigation menue to be placed in mobile menu//////////////////////////////////// */

$(document).ready(function(){
    $('#nav_menu').slicknav({prependTo:"#mobilemenu"});
});

/*//////////Function to ensure proper loading of document ///////////////////////////////////////// */


window.onload = function(){
  document.querySelector('#sendButton').onclick = validateForm;
}

//Validation of form function///////////////////////////////////////////////////////////////////////

    let firstname = document.querySelector("#Fname");
    let lastname = document.querySelector("#Lname");
    let email = document.querySelector("#EmailAdd");

function validateForm() {
 
    

    let check = [0,0,0];

    let namepattern = /^[a-zA-Z]{2,20}$/;
    let emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    

    if(firstname.value == ""){  ////firstname start
      check[0]=0; 
      firstname.nextElementSibling.innerHTML = "please enter firstname";
    } else if(!namepattern.test(firstname.value)){
      check[0]=0; 
      firstname.nextElementSibling.innerHTML = "please enter firstname with letter only";
    }else{
      check[0]=1; 
      firstname.nextElementSibling.innerHTML = " ";}
     if(lastname.value == ""){/////lastname start
      check[1]=0; 
      lastname.nextElementSibling.innerHTML = "please enter lastname";
    } else if(!namepattern.test(lastname.value)){
      check[1]=0; 
      lastname.nextElementSibling.innerHTML = "please enter lastname with letter only";}
       else{ 
         check[1]=1;
         lastname.nextElementSibling.innerHTML = " ";
        }
       if(!emailpattern.test(email.value)){/////////email start
        check[2]=0;
        email.nextElementSibling.innerHTML = "please enter valid email address";
      }
        else{ 
          check[2]=1;
          email.nextElementSibling.innerHTML = " ";
        }

        if (check[0]==1 && check[1]==1 && check[2]==1)
        {
          alert("Thank you for your submission. We will get in touch with you soon")
          location.href = "ContactUs.html";
        
        }
      
  }

  /*reset form*/
  function resetForm(){
    
  document.getElementById("Fname").value = "";
  document.getElementById("Lname").value = "";
  document.getElementById("EmailAdd").value = "";
  document.getElementById("PhoneNum").value = "";
  document.getElementById("comment").value = "";
  firstname.nextElementSibling.innerHTML = " ";
  lastname.nextElementSibling.innerHTML = " ";
  email.nextElementSibling.innerHTML = " ";

  }
