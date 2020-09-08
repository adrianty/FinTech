//alert ('hello world'); 
function myFunction() {
    
    document.getElementById("h1ref").style.backgroundColor = "greenyellow";
    //document.querySelector(".info").style.color = "green";
    myArray = document.querySelectorAll(".info");
    myArray.forEach(function(items) {
         items.style.color ="green";
      });
}

function changeContent(){
        //document.body.innerHTML = "<p>Test</p>"
        document.getElementById("h1ref").innerHTML = "You are doing excellent job in Dev Tool Kit 1";
        document.getElementById("h1ref").style.backgroundColor = "yellow";
        var myLinkVar = document.getElementById("myLink");
        myLinkVar.href ="http://www.globalcert.cloud/";
        myLinkVar.innerHTML ="Global Certificates"; 

    }