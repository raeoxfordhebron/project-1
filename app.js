// variable for API key
const apiKey = "ff13e44c-13f5-4d10-ae1a-09f957918836"

// variable for base url
const baseURL = "https://api.nookipedia.com/"

// save some variables
const $title = $("#title")
const $main = $("main")
const $villagerTextName = $("#villagerTextName")
const $villagerName = $("#villagerName")
const $quote = $("#quote")
const $birthdayMonth = $("#birthdayMonth")


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
        $birthdayMonth.html(`Birthday Month: ${data[0].birthday_month}`)
        $quote.html(`"${data[0].quote}"`)
    })
}

// function render() {
//     $villagerName.text(villager[0].name)
// }

villagerSearch("Bob")