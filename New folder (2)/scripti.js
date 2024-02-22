function foo(){
    var first = document.getElementById("firtname").Value;
    console,log(`First name ${first} `);
    
    var middle = document.getElementById("middlename").Value;
    console.log(`Middle name ${middle}`);

    var last = document.getElementById("lastname").Value;
    console.log(`Last name ${last} `);

    var email = document.getElementById("email").Value;
    console.log(`Email ${email} `);

    var password = document.getElementById("password").Value;
    console.log(`Password ${password} `);
}

//<label for="name">Name</label><br>
function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    ele.innerHTML=content
    return ele;
} 
//<br> 
function break_create(){
    var ele = document.createElement("br")
    return ele;
}
//<input type="text" id="name">
function input_create(tagname,att1name,att1value,att2name,att2value){
    var ele = document.createElement(tagname)
    ele.setAttribute(att1name,att1value)
    ele.setAttribute(att2name,att2value)
    return ele;
}
//for firstname
var firstname = label_create("label","for","fname","Firstname");
var fbreak = break_create();
var finput = input_create("input","type","text","id","fname");
var f1break = break_create();

var middlename = label_create("label","for","mname","Middlename");
var mbreak = break_create();
var minput = input_create("input","type","text","id","mname");
var m1break = break_create();

var Lastname = label_create("label","for","lname","lastname");
var lbreak = break_create();
var linput = input_create("input","type","text","id","lname");
var l1break = break_create();

var email = label_create("label","for","email","Email");
var ebreak = break_create();
var einput = input_create("input","type","text","id","email");
var embreak = break_create();

var password = label_create("label","for","password","Password");
var passbreak = break_create();
var passinput = input_create("input","type","text","id","password");
var pwbreak = break_create();

var button = document.createElement("button")
button.setAttribute("type","button")
button.innerHTML="Submit"

document.body.append(firstname,fbreak,finput,f1break,middlename,mbreak,minput,m1break,Lastname,lbreak,linput,l1break,email,ebreak,einput,embreak,password,passbreak,passinput,pwbreak,button,);