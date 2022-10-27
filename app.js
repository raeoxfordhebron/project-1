// variable for API key
const apiKey = "ff13e44c-13f5-4d10-ae1a-09f957918836"

// variable for base url
const baseURL = "https://api.nookipedia.com/"

// save some HTML variables
const $title = $("#title")
const $main = $("main")
const $villagerTextName = $("#villagerTextName")
const $villagerName = $("#villagerName")
const $quote = $("#quote")
const $birthday = $("#birthday")
const $image = $("#image")
const $clothing = $("#clothing")
const $villagerSpecies = $("#villagerSpecies")
const $sign = $("#sign")
const $personality = $("#personality")
const $appearances = $("#appearances")
const $listOfAppearances = $("#appearances li")
const $aside = $("aside")
const $species = $("#species")
const $listOfSpecies = $("main li")

// save some more variables
let personality;


// function that does villager search
function villagerSearch(name) {
    $.ajax({
        url: `${baseURL}villagers?name=${name}`,
        headers: {"X-API-KEY": `${apiKey}`}
    })
    .then((data) => {
        console.log(data)
        $appearances.empty()
        $aside.empty()
        // $main.empty()
        // render data onto DOM
        // render()
        if(!data.length){
            alert("That is not the name of an Animal Crossing Villager. Please choose a different name.")
        }
        $villagerName.text(`Villager Name: ${data[0].name}`)
        $birthday.text(`Birthday: ${data[0].birthday_month} ${data[0].birthday_day}`)
        $quote.text(`Quote: "${data[0].quote}"`)
        $image.html(`<img src="${data[0].image_url}">`)
        $clothing.text(`Favorite Clothing: ${data[0].clothing}`)
        $villagerSpecies.text(`Species: ${data[0].species}`)
        $sign.text(`Astrological Sign: ${data[0].sign}`)
        $personality.text(`Personality: ${data[0].personality}`)
        // grab single elements
        data[0].appearances.forEach((element, index) => {
            const newP = $(`<li id='${element}'>`).text(element)
            return $appearances.append(newP)
        })
        similarVillagers(data[0].personality)
    }) 
}

// grab submit and add click event
$("input[type=submit]").on("click", (event) => {
    event.preventDefault();
    const inputText = $villagerTextName.val()
    villagerSearch(inputText) // function is grabbing the name
})

// show villagers by personality
function similarVillagers(personality) {
    $.ajax({
    url: `${baseURL}villagers?personality=${personality}`,
    headers: {"X-API-KEY": `${apiKey}`}})
    .then((data) => {
        data.forEach((element, index) => {
            const newLi = $("<li>").text(` ${element.name} (${element.species})`)
            $("aside").append(newLi)
        })
    })
}


// trying to search for villagers by species

function villagerSpecies(species){
    $.ajax({
        url: `${baseURL}villagers?species=${species}`,
        headers: {"X-API-KEY": `${apiKey}`}
    })
    .then((data) => {
        console.log(data)
        $("main p").empty()
        data.forEach((element, index) => {
            console.log(element)
            const speciesLi = $("<li>").text(`${element.name}`)
            speciesLi.click(function(e){
                const inputText = e.target.textContent
                $("main p").empty()
                $("main li").remove()
                // $("<main>")
                villagerSearch(inputText)
            })
            $main.append(speciesLi)
        })   
    })
}

// grab dropdown

$("#species").change(function (event){
    const inputText = $species.val()
    villagerSpecies(inputText)
})

// grab click event on villager names from species type


