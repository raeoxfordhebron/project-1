// variable for API key
const apiKey = "ff13e44c-13f5-4d10-ae1a-09f957918836"

// variable for base url
const baseURL = "https://api.nookipedia.com/"

function showSimilarVillagers(species) {
    $.ajax({
        url: `${baseURL}villagers?species=${species}`,
        headers: {"X-API-KEY": `${apiKey}`}
    })
    .then((data) => {
        console.log(data)
})
}

showSimilarVillagers("bear")

