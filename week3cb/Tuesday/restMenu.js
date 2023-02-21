const menu = document.getElementById('dishesContainer')
const starterButton = document.getElementById('starters')
const entreeButton = document.getElementById('entrees')
const dessertButton = document.getElementById('desserts')
const allButton = document.getElementById('all')
const menuList = document.getElementById('menulist')

console.log(dishes)

starterButton.addEventListener('click', function() {
    const starterMenu = dishes.filter(function(dishes) {
        return dishes.course == 'Starters'
      })
      console.log(starterMenu)
      const onlyStarters = starterMenu.map(function(starterDishes) {
        return ` 
        <li>
            <p class = 'description'>${starterDishes.description}</p>
            <img class = 'dish' src = "${starterDishes.imageURL}" />
            <div class = 'title'>${starterDishes.title}</div>
            <div class = 'price'>${starterDishes.price}</div>
        </li>
        `
      })
       menuList.innerHTML = onlyStarters.join(" ")

})
entreeButton.addEventListener('click', function() {
    const entreeMenu = dishes.filter(function(dishes) {
        return dishes.course == 'Entrees'
      })
      console.log(entreeMenu)
      const onlyEntrees = entreeMenu.map(function(entreeDishes) {
        return ` 
        <li>
            <p class = 'description'>${entreeDishes.description}</p>
            <img class = 'dish' src = "${entreeDishes.imageURL}" />
            <div class = 'title'>${entreeDishes.title}</div>
            <div class = 'price'>${entreeDishes.price}</div>
        </li>
        `
      })
       menuList.innerHTML = onlyEntrees.join(" ")

})
dessertButton.addEventListener('click', function() {
    const dessertMenu = dishes.filter(function(dishes) {
        return dishes.course == 'Desserts'
      })
      console.log(dessertMenu)
      const onlyDesserts = dessertMenu.map(function(dessertDishes) {
        return ` 
        <li>
            <p class = 'description'>${dessertDishes.description}</p>
            <img class = 'dish' src = "${dessertDishes.imageURL}" />
            <div class = 'title'>${dessertDishes.title}</div>
            <div class = 'price'>${dessertDishes.price}</div>
        </li>
        `
      })
       menuList.innerHTML = onlyDesserts.join(" ")
})
allButton.addEventListener('click', function() {
    const allMenu = dishes.filter(function(dishes) {
        return dishes
      })
      console.log(allMenu)
      const allFood = allMenu.map(function(allDishes) {
        return ` 
        <li>
            <p class = 'description'>${allDishes.description}</p>
            <img class = 'dish' src = "${allDishes.imageURL}" />
            <div class = 'title'>${allDishes.title}</div>
            <div class = 'price'>${allDishes.price}</div>
        </li>
        `
      })
       menuList.innerHTML = allFood.join(" ")
})

const menuItems = dishes.map(function(dishes) {
    return ` 
    <li>
        <p class = 'description'>${dishes.description}</p>
        <img class = 'dish' src = "${dishes.imageURL}" />
        <div class = 'title'>${dishes.title}</div>
        <div class = 'price'>${dishes.price}</div>
    </li>
    `
  })

  menuList.innerHTML = menuItems.join('')