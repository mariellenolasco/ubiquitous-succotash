function listRestaurant() {
    // renders a list of restaurants
    var parentDiv = document.getElementById("listOfStuff");
    // create table element to hold restaurants
    var table = document.createElement("table");
    var restaurants = ["Mcdo", "Jollibee"];
    // for each restaurant we'll add a row
    restaurants.forEach(restaurant => {
        var row = table.insertRow(table.rows.length);
        var name = row.insertCell(0);
        name.innerHTML = restaurant;
        row.onclick = function () {
            getMenuItems(restaurant);
            console.log(restaurant);
        }
    });
    parentDiv.appendChild(table);
}
function getMenuItems(restaurant) {
    var JollibeeMenu = ["JolliDog", "Chicken Joy"];
    var McdoMenu = ["Chicken Fillet", "McFlurry"];
    var parentDiv = document.querySelector("#listOfStuff");
    parentDiv.removeChild(parentDiv.firstElementChild);
    var table = document.createElement("table");
    var theader = table.insertRow(table.rows.length);
    var nameHeader = theader.insertCell(0);
    nameHeader.innerHTML = restaurant;
    switch (restaurant) {
        case "Jollibee":
            JollibeeMenu.forEach(menuItem => {
                var row = table.insertRow(table.rows.length);
                var name = row.insertCell(0);
                name.innerHTML = menuItem;
                row.onclick = function () {
                    console.log(menuItem);
                    add2Cart(menuItem);

                };
            });
            break;
        case "Mcdo":
            McdoMenu.forEach(menuItem => {
                var row = table.insertRow(table.rows.length);
                var name = row.insertCell(0);
                name.innerHTML = menuItem;
                row.onclick = function () {
                    console.log(menuItem);
                    add2Cart(menuItem);
                }
            });
            break;
    }

    parentDiv.appendChild(table);

}
function add2Cart(menuItem) {
    console.log("I got called");
    var cart = document.getElementById("cart");
    var element = document.createElement("p");
    element.innerHTML = menuItem;
    cart.appendChild(element);
}