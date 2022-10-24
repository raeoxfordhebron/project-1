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
const $species = $("#species")
const $sign = $("#sign")
const $personality = $("#personality")
const $appearances = $("#appearances")

// save some more variables
let personality


// function that does villager search
function villagerSearch(name) {
    $.ajax({
        url: `${baseURL}villagers?name=${name}`,
        headers: {"X-API-KEY": `${apiKey}`}
    })
    .then((data) => {
        console.log(data)
        // $main.empty()
        // render data onto DOM
        $villagerName.text(`Villager Name: ${data[0].name}`)
        $birthday.text(`Birthday: ${data[0].birthday_month} ${data[0].birthday_day}`)
        $quote.text(`"${data[0].quote}"`)
        $image.html(`<img src="${data[0].image_url}">`)
        $clothing.text(`Clothing Choice: ${data[0].clothing}`)
        $species.text(`Species: ${data[0].species}`)
        $sign.text(`Astrological Sign: ${data[0].sign}`)
        $personality.text(`Personality: ${data[0].personality}`)
        $appearances.text(`Present in ${data[0].appearances}`)
        similarVillagers(data[0].personality)
    })
}

// grab submit and add click event
$("input[type=submit]").on("click", (event) => {
    event.preventDefault();
    const inputText = $villagerTextName.val()
    villagerSearch(inputText) // function is grabbing the name
})

function similarVillagers(personality) {
    $.ajax({
    url: `${baseURL}villagers?personality=${personality}`,
    headers: {"X-API-KEY": `${apiKey}`}})
    .then((data) => {
        console.log(data)
        data.forEach((element, index) => {
            console.log(element)
            const newLi = $("<li>").text(`${element.name} (${element.species}) `)
            $("aside").append(newLi)
        })
    })
}
