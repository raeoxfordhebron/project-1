// variable for API key
const apiKey = "ff13e44c-13f5-4d10-ae1a-09f957918836"

// variable for base url
const baseURL = "https://api.nookipedia.com/"

// save some variables
const $main = $("main")

// function that does villager search
function villagerSearch(name) {
    $.ajax({
        url: `${baseURL}villagers?name=${name}`,
        headers: {"X-API-KEY": `${apiKey}`}
    })
    .then((villager) => {
        console.log(villager)
        $main.empty()
        // render data onto DOM
        $main.html(`<h2>${villager[0].name}`)
    })
}

villagerSearch("Bob")