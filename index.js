var heading = document.createElement("h5");
heading.innerHTML="Age calculator"

var date = document.createElement("input")
date.setAttribute("type","date");
date.id="dob"
 
var button = document.createElement("button");
button.setAttribute("type","button");
button.className="btn-btn-primary";
button.innerHTML="Submit"
button.addEventListener("click",date_data,res)

function date_data(){
    var input = document.getElementById("dob").value;
    var input_date = new Date(input)
    var current_date = new Date();

    var millisecdiff = parseInt(current_date.getTime()-input_date.getTime());
    console.log(millisecdiff)

    var secondsdiff = Math.floor(millisecdiff/1000);
    console.log(secondsdiff)

    var minutesdiff = Math.floor(secondsdiff/60);
    console.log(minutesdiff)

    var hoursdiff = Math.floor(minutesdiff/60);
    console.log(hoursdiff)

    var daydiff = Math.floor(hoursdiff/24);
    console.log(daydiff)

    var yeardiff = current_date.getFullYear()-input_date.getFullYear();
    console.log(yeardiff)

    var monthdiff = (yeardiff*12)+(current_date.getMonth()-input_date.getMonth());
    console.log(monthdiff);
}
function res(){
    var ele = document.getElementById("date_data").value
    console.log(ele)
}

document.body.append(heading,date,button);
