(function(window){

//cart object

var list = {
    items: [
        {
            id: "0",
            name: "Laphroaig 10 Year",
            price: 60,
            count: 0
        },
        {
            id: "1",
            name: "Laphroaig 18 Year",
            price: 70,
            count: 0
        },
        {
            id: "2",
            name: "Laphroaig 32 Year",
            price: 80,
            count: 0
        },
        {
            id: "3",
            name: "Oban 14 Year",
            price: 90,
            count: 0
        },
        {
            id: "4",
            name: "Oban 18 Year",
            price: 100,
            count: 0
        },
        {
            id: "5",
            name: "Lagavulin 12 Year",
            price: 90,
            count: 0
        },
        {
            id: "6",
            name: "Lagavulin 16 Year",
            price: 120,
            count: 0
        },
        {
            id: "7",
            name: "Monkey Shoulder",
            price: 50,
            count: 0
        },
        {
            id: "8",
            name: "Bowmore 12 Year",
            price: 100,
            count: 0
        },
        {
            id: "9",
            name: "Bowmore 15 Year",
            price: 90,
            count: 0
        }
    ]
};

var cart = {
    promoCode: "BIGSALE",
    cartItems: [],
    numberOfItems: function() {
        return this.cartItems.length;
    },
    cartTotal: 0
};

//establish globals
var addButtons = document.getElementsByClassName("add");
var deleteButton = document.getElementsByClassName("delete-button");
var itemButtons = document.getElementsByClassName("itemButton");
var basket = document.getElementById("basket");
var numberItemsInBasket = cart.numberOfItems();
var quantityFields = document.getElementsByClassName("quantity");
var i;
var itemPrices = document.getElementsByClassName("itemPrice");
var cartList = document.getElementById("cartList");
var cartTotal = document.getElementById("cartTotal");
basket.style.display = "none";

//fill in quantities and price
//quanitites
for(i = 0; i < quantityFields.length; i++) {
    quantityFields[i].value = list.items[i].count;
}
//prices
for(i = 0; i < itemPrices.length; i++) {
    itemPrices[i].innerText = "Price: $" + list.items[i].price;
}

//event listeners
//quantityfield on change

//control vision of basket

// for(i = 0; i < itemButtons.length; i++) {
//     itemButtons[i].addEventListener("onmouseup", function(event) {
//         if(cart.numberOfItems() > 0) {
//             console.log(cart.numberOfItems());
//             basket.style.display = "block";
//         } else {
//             console.log(cart.numberOfItems());
//             basket.style.display = "none";
//         }
//     });
// }


//add item buttons on click
for(i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function(event) {
        //get value of the item quanity input
        var parentID = this.parentNode.parentNode.getAttribute("id");
        var quantityValue = quantityFields[parentID].value;
        // console.log(quantityValue);
        //get name of selected product
        var selectedItemName = list.items[parentID].name;
        var selectedItemPrice = list.items[parentID].price;
        //if quantity added is > 0
        if(quantityValue > 0) {
            for(i = 1; i <= quantityValue; i++) {
                cart.cartItems.push(selectedItemName);
                cart.numberOfItems();
            }
            // console.log(cart.numberOfItems());
        }
        if(cart.numberOfItems() > 0) {
            // console.log(cart.numberOfItems());
            basket.style.display = "block";
        }
        //update basket price and items
        cartList.innerText = cart.numberOfItems();
        //update total cost

    });
}

//remove button click
for(i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function(event) {
        quantityFields[parentID].value = 0;
        //get value of the item quanity input
        var parentID = this.parentNode.parentNode.getAttribute("id");
        quantityValue = quantityFields[parentID].value;
        // console.log(quantityValue);
        //get name of selected product
        var selectedItemName = list.items[parentID].name;
        var selectedItemPrice = list.items[parentID].price;
        //if quantity added is > 0
        if(quantityValue > 0) {
            for(i = 1; i <= quantityValue; i++) {
                cart.cartItems.push(selectedItemName);
            }
            console.log(cart.numberOfItems());
        }
        if(cart.numberOfItems() > 0) {
            basket.style.display = "block";
        } else {
            basket.style.display = "none";
        }

    });
}


})(window);


//step 1: create variable holding number of items. This variable changes when the itemButtons are clicked
//If numberItemsInBasket is >0, show basket. If not, hide basket
//WHen an item is added, find <h3> of ite by traversing DOM and
