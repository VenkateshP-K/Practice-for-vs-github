

async function foo(){
    let res = await fetch("https://data.covid19india.org/v4/min/data.min.json")
    let res01 = await res.json();
    console.log(res01)
    var che = res01.TN.districts.Chennai.total
    console.log(che)

    var div = document.createElement("div")
    div.innerHTML=`</div>
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
      <div class="card-header">Chennai(TN)</div>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">Confirmed:${che.confirmed}</p>
        <p class="card-text">Deceased:${che.deceased}</p>
        <p class="card-text">Recovered:${che.recovered}</p>
        <p class="card-text">Tested:${che.tested}</p>
        <p class="card-text">Vaccin1:${che.vaccinated1}</p>
        <p class="card-text">Vaccin2:${che.vaccinated2}</p>
        </div>
      </div>`
      
      document.body.append(div)
}
foo()