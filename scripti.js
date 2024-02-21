
function label_create(tagname,attrname,attrvalue,content){
var ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content
return ele;
}
//Ex:label_create("label","for","email","Email");
//<label for="email">Email</label>

function break_create(){
var ele = document.createElement("br");
return ele;
}
//break_create("br")
//<br>
function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
var element = document.createElement(tagname)
element.setAttribute(attr1name,attr1value);
element.setAttribute(attr2name,attr2value);
return element;
}
//inpute_create("input","type","fname","id","fname")
//  <input type="fname" id="Firstname"><br>
var Firstname = label_create("label","for","fname","Firstname");
var fname_break = break_create();
var fname_input = input_create("input","type","text","id","firstname");
var finput_break = break_create();

var middlename = label_create("label","for","mname","Middlename");
var mname_break = break_create();
var mname_input = input_create("input","type","text","id","middlename");
var minput_break = break_create();

var lastname = label_create("label","for","lname","Lastname");
var lname_break = break_create();
var lname_input = input_create("input","type","text","id","lastname");
var linput_break = break_create();

var email = label_create("label","for","email","Email");
var email_break = break_create();
var email_input = input_create("input","type","text","id","email");
var einput_break = break_create();

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick","foo()");
button.innerHTML="Submit"

document.body.append(Firstname,fname_break,fname_input,finput_break,middlename,mname_break,mname_input,minput_break,lastname,lname_break,lname_input,linput_break,email,email_break,email_input,einput_break,button);