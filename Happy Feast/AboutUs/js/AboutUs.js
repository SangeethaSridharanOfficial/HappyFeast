
/////JQuery for mobile menu/////////////////////////////////////
$(document).ready(function(){
    $('#nav_menu').slicknav({prependTo:"#mobilemenu"});
});

//////////Display name of the month by creating array/////////////////        
n=new Date();
y=n.getFullYear();
d=n.getDate();
let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
let m = month[n.getMonth()];

/////////Displaying next week Date/////////////////////////////////////////////////////////////////////

let nextweek = new Date(n.getFullYear(), n.getMonth(), n.getDate()+7);

document.getElementById("date").innerHTML=m + " " + d + ", " + y;
document.getElementById("nextweek1").innerHTML=" "+ nextweek;

//Displaying appropriate message if today is Wednesday or calls nextWedDate Function and display next Wednesday Date 
if(n.getDay()==3)
{
    document.getElementById("nextwednes").innerHTML= "Today!! Yes It Is WEDNESDAY.. Join Our Combo Wednesday Today"
}
else{
    let nexwednes= "Wednesday"+ nextWedDate(3).toLocaleString();
    document.getElementById("nextwednes").innerHTML=" "+ nexwednes;
}
//Function takes dayIndex from sunday(0) to saturday(6) and calculate next week date

function nextWedDate(index) {
    var today = new Date();
    today.setDate(today.getDate() + (index - 1 - today.getDay() + 7) % 7 + 1);
    return today;
}
