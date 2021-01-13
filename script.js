
const timeStamp = document.getElementById("timeStamp");
const btnCases = document.getElementById("btnCases");
const btnDeaths = document.getElementById("btnDeaths");
const btnRecoveries = document.getElementById("btnRecoveries");
const resultsLabel = document.getElementById("results");
const category = document.getElementById("category")

const getCovidData =(country)=>{
    fetch(`https://covid19-api.org/api/status/${country}`)
        .then(response => response.json())
        .then(data => displayData(data))
}

getCovidData("SA");

const displayData = (data) =>{
    console.log(data)
    resultsLabel.innerText = data.cases
    category.innerText = "Cases:"
    timeStamp.innerText = `Last Updated : ${data.last_update}`;

    /********************Button Clicks********************/  
    // Cases
    btnCases.addEventListener("click", ()=>{
        resultsLabel.innerText = data.cases;
        category.innerText = "Cases:"
    })

    //Deaths 
    btnDeaths.addEventListener("click", ()=>{
        resultsLabel.innerText = data.deaths;
        category.innerText = "Deaths:"
    })

    //Recoveries
    btnRecoveries.addEventListener("click", ()=>{
        resultsLabel.innerText = data.recovered;
        category.innerText = "Recoveries:"
    })
}

