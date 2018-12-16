

function validate()
{
var a=/^[A-Za-z.\s]{0,30}$/;
if (document.hemant.firstnm.value=="")
{
alert("Please Enter firstname");
document.hemant.firstnm.focus();
return false; 
}

if(!a.test(document.hemant.firstnm.value))
{
alert("Please Enter only alpha character value");
document.hemant.firstnm.focus();
return false;
}



var a=/^[A-Za-z.\s]{0,30}$/;
if (document.hemant.lastnam.value=="")
{
alert("Please Enter Lastname Number");
document.hemant.lastnam.focus();
return false; 
}

if(!a.test(document.hemant.lastnam.value))
{
alert("Please Enter only character  value");
document.hemant.lastnam.focus();
return false;
}


var a=/^[A-Za-z0-9_\-\.]+\@[A-Za-z0-9_\-\.]+\.[A-Za-z]{2,4}$/;
if (document.hemant.email.value=="")
{
alert("Please Enter email id Number");
document.hemant.email.focus();
return false; 
}

if(!a.test(document.hemant.email.value))
{
alert("Please Enter only character  value");
document.hemant.email.focus();
return false;
}
var a=/^[0-9.\s]{0,30}$/;
if (document.hemant.mob.value=="")
{
alert("Please Enter Mobile Number");
document.hemant.mob.focus();
return false; 
}

if (document.hemant.mob.value.length!=10)
{
alert("Please Enter equql to ten digit number");
document.hemant.mob.focus();
return false;
}

var a=/^[A-Za-z.\s]{0,30}$/;
if (document.hemant.state.value=="")
{
alert("Please Enter statename Number");
document.hemant.state.focus();
return false; 
}

if(!a.test(document.hemant.state.value))
{
alert("Please Enter only character  value");
document.hemant.state.focus();
return false;
}
var a=/^[A-Za-z.\s]{0,30}$/;
if (document.hemant.city.value=="")
{
alert("Please Enter cityname Number");
document.hemant.city.focus();
return false; 
}

if(!a.test(document.hemant.city.value))
{
alert("Please Enter only character  value");
document.hemant.city.focus();
return false;
}
var a=/^[A-Za-z.\s]{0,30}$/;
if (document.hemant.country.value=="")
{
alert("Please Enter countryname Number");
document.hemant.country.focus();
return false; 
}

if(!a.test(document.hemant.country.value))
{
alert("Please Enter only character  value");
document.hemant.country.focus();
return false;
}

}



