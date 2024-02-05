//create a XML-HTTP Object
var request =  new XMLHttpRequest();
//open a request
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    var result_asia = res.filter((ele) => ele.region == "Asia");
    console.log(result_asia)
    var country_names = result_asia.map((ele) => ele.name)
    console.log(country_names)

    var pop = res.filter((ele2) => ele2.population<200000)
    console.log(pop)
    var pop_cap = pop.map((ele2)=>ele2.capital)
    console.log(pop_cap)
}