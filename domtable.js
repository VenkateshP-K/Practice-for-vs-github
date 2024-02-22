function create_tr(){
    var tr = document.createElement("tr");
    return tr; 
}
function create_th(tagname,attrname,attrvalue,content){
var ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}

function create_td(tagname,content){
var ele = document.createElement(tagname);
ele.innerHTML = content;
return ele;
}


var table= document.createElement("table");
table.className = "table"

var thead = document.createElement("thead")
thead.className = "thead-dark"

var thead_tr = create_tr();

var th1 = create_th("th","scope","col","#");
var th2 = create_th("th","scope","col","first");
var th3  = create_th("th","scope","col","last");
var th4 = create_th("th","scope","col","handle");

thead_tr.append(th1,th2,th3,th4)
thead.append(thead_tr)

var tbody = document.createElement("tbody");
var body_tr = create_tr();
var body_th = create_th("th","scope","row","1");
var td1 = create_td("td","mark")
var td2 = create_td("td","otto")
var td3 = create_td("td","@otto")

body_tr.append(body_th,td1,td2,td3);
tbody.append(body_tr);


table.append(thead,tbody)
document.body.append(table)