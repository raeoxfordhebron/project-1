// variable for API key
const apiKey = "ff13e44c-13f5-4d10-ae1a-09f957918836"

// variable for base url
const baseURL = "https://api.nookipedia.com/"

function showSimilarVillagers(personality) {
    $.ajax({
        url: `${baseURL}villagers?personality=${personality}`,
        headers: {"X-API-KEY": `${apiKey}`}
    })
    .then((data) => {
        console.log(data)
        const speciesArray = data.map((element, index) => {
            return {
                name: element.name,
                species: element.species
            }
        })
        console.log(speciesArray)
        const filterVersion = speciesArray.filter((element) => element.species === "bear")
        console.log(filterVersion)
})
}

function ajaxCall2(species){
    $.ajax({
        url: `${baseURL}villagers?species=${species}`,
        headers: {"X-API-KEY": `${apiKey}`}
    })
    .then((data) => {
        console.log(data)
    })
}

showSimilarVillagers("smug")