

var sendBtn = document.querySelector(".contact-form");
sendBtn.addEventListener('submit', checkFill);

var n = /^[A-Za-z]+\s?[A-Za-z]+/;
var e = /[\w .]+@\w+\.(com | net |ac.in)/;
var m = /\w+/;



function checkFill() {
    event.preventDefault();
    var name = document.querySelector("#naMe").value;
    var email = document.querySelector("#emAil").value;
    var message = document.querySelector("#meSsage").value;

    if (!n.test(name)) {
        document.getElementById("isnameValid").innerHTML = "Invalid Name";
    }
    else if(!e.test(email) ){
        document.getElementById("isemailValid").innerHTML = "Invalid Email";
    }
    else if(!m.test(message)){
        document.getElementById("ismessageValid").innerHTML = "Empty Message";
    }
    else {
        document.getElementById("isnameValid").innerHTML = " ";
        document.getElementById("isemailValid").innerHTML = " ";
        document.getElementById("ismessageValid").innerHTML = " ";
        var conf = document.getElementById("#confirmation");
        conf.style.display = 'block';

        setTimeout(() => {
            conf.style.display = 'none';
            document.querySelector("#naMe").value = "";
            document.querySelector("#emAil").value = "";
            document.querySelector("#meSsage").value = "";
        }, 1000);

    }
}