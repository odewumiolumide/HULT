function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        username : "odewumiolumide2@gmail.com",
        password : "olumide2004",
        To : "odewumiolumide2@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value 
        + "<br> Email: " + document.getElementById("email").value
        + "<br> phone no: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("Message").value,
    }).then
    message => alert((messageSENTSUCCESFULLY)
    );
    
}

const sr = scrollReveal ({
    distance: '300px',
    duration:2500,
    reset:true,
})

sr.reveal(".home-img", {delay:200, origin:left});
sr.reveal(".home-img" , {delay:200 , origin:right});
sr.reveal(".container" , ".about" , ".menu" , {delay:200, origin:right});

var $ = function(id){
    return document.getElementById(id);
}

var container = function() {
    var name = $("name").value;
    var email = $("email").value;
    var phone = $("phone").value;

    var validated = true;
    var atIndex= email.atIndex("@");
    if(name == "")
    {
        //alert("Required field.");
        $("empty name").textContent = "Required field";
        validated = false;
    }
 

if(validated)
{
    $("container").onsubmit();
    alert("You have successfully register");
}

window.onload = function() {
    $("").onclick;
    $("").focus();
}
