const imgUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
const drinksUrl = "http://localhost:3000/drinks"

document.addEventListener('DOMContentLoaded', function () {

let allDrinks = [];

let drinkDiv = document.querySelector("div#cocktail-image-div")
let drinkUl = document.querySelector("#cocktail-names")
let dropDown = document.querySelector("#drink-dropdown")


dropDown.addEventListener('change', (event) => {
    
    const selectedChoice = event.target.value
    if (selectedChoice != "all") {
        const filteredDrinks = allDrinks.filter((drinkObj) => drinkObj.type == selectedChoice)
        const drinkData = filteredDrinks.map((drink) => drink.strDrink)
        const drinkLi = drinkData.map((drinkName) => `<li>${drinkName}</li>`)
        drinkUl.innerHTML = drinkLi.join('')
    }
    else {
        const drinkData = allDrinks.map((drink) => drink.strDrink)
        const drinkLi = drinkData.map((drinkName) => `<li>${drinkName}</li>`)
        drinkUl.innerHTML = drinkLi.join('')
    }

})


drinkUl.addEventListener('click',(event) => event.target.style.color = 'white')




    fetch(imgUrl, { method: 'GET'})
    .then(res => res.json())
    .then((imgPOJO) => {
    const imgData = imgPOJO.drinks[0]["strDrinkThumb"]
    drinkDiv.innerHTML = `<center><img src="${imgData}"></center>`
    })


    fetch(drinksUrl, { method: 'GET'})
    .then(res => res.json())
    .then((drinkPOJO) => {
    const drinkData = drinkPOJO.map((drink) => drink.strDrink)
    const drinkLi = drinkData.map((drinkName) => `<li>${drinkName}</li>`)
    drinkUl.innerHTML = drinkLi.join('')

    
    allDrinks = drinkPOJO
    
    
    })




})