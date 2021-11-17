const receipt = [];
const balance = [];
//token  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
let slider = document.getElementById("receipt-section");
let overlay = document.getElementById("overlay");
class receiptEntry{
    constructor(multiplier, name, price){
        this.multiplier=multiplier;
        this.name=name;
        this.price=price;
    }
    formatString(){
        return  this.name + "    " + this.multiplier + "x    $" + (this.price*this.multiplier) + ".00";
    }
}
function setSpecial(){

const specialP = document.getElementById("special-p");
const specialImg = document.getElementById("special-img");
const specialCaption = document.getElementById("special-caption");
const specialButton = document.getElementById("special-btn");
//receipt array 


    const dayOfWeek = (new Date()).getDay();
    switch(dayOfWeek){
        case 0:
            specialButton.dataset.value = "25";
            specialImg.src= "resources/menu-items/lobster.jpg";
            specialP.innerHTML = "Decadent Lobster for a Celebration: $25.00";
            specialCaption.innerHTML = "Smoked Lobster";
        break;

        case 1:
            specialButton.dataset.value = "20";
            specialImg.src= "resources/menu-items/Kerala-Prawn-Curry-3.jpg";
            specialP.innerHTML = "Spicy and sweet, You'll love these prawns $20.00";
            specialCaption.innerHTML = "Kerala Prawn Curry";
        break;

        case 2:
            specialButton.dataset.value  = "15";
            specialImg.src= "resources/menu-items/mapo-tofu-9-1.jpg";
            specialP.innerHTML = "This is a classic spicy tofu dish $15.00";
            specialCaption.innerHTML = "Mapo Tofu";
        break;

        case 3:
            specialButton.dataset.value = "30";
            specialImg.src= "resources/menu-items/SmokedCrabLegs6.jpg";
            specialP.innerHTML = "These crab legs will blow you away $30.00";
            specialCaption.innerHTML = "Smoked Snow Crab Legs";
        break;

        case 4:
            specialButton.dataset.value = "18";
            specialImg.src= "resources/menu-items/28371_calamari_parsley_garlic_3000.jpg";
            specialP.innerHTML = "Calamari oven-cooked with garlic and parsley $18.00";
            specialCaption.innerHTML = "Calamari With Parsley";
        break;

        case 5:
            specialButton.dataset.value  = "12";
            specialImg.src= "resources/menu-items/beef-chow-fun-16.jpg";
            specialP.innerHTML = "Try today's special: the classic noolde dish $12.00";
            specialCaption.innerHTML = "Beef Chow Fun";
        break;

        case 6:
            specialButton.dataset.value  = "8";
            specialImg.src= "resources/menu-items/stringbean.jpeg";
            specialP.innerHTML = "These String beans are amazing $8.00";
            specialCaption.innerHTML = "Amazing String Bean";
        break;

        default:
            console.log("error occurred in setSpecial function");
            break;
    }
}

function backToMenu(){
    document.querySelector('#receipt-container').classList.add("hidden");
    toggleSlider();
    overlay.style.zIndex=-1;
}


let total=0;
function displayBalance(){
    overlay.style.zIndex = 1;
    total=0;
    // get total
    for(const itemCost of balance){
        total+= parseInt(itemCost, 10);
    }
    document.querySelector('#receipt-section h4 span').innerHTML = "$" +total + ".00";
    //display all receipt items
    let container = document.getElementById("receipt-area");
    
    for(const item of receipt){
        let p = document.createElement('p');
        let innerText =document.createTextNode( item.formatString());
       // receipt.shift();
        p.appendChild(innerText);
        container.appendChild(p);
       
    }


    //display the receipt page
    //document.querySelector('#menu-section').classList.add("hidden");
    document.querySelector('#receipt-container').classList.remove("hidden");
    toggleSlider();
}

function toggleSlider() {
    if (slider.classList.contains('slide-up')) {
      slider.classList.remove('slide-up');
    } else {
      slider.classList.add('slide-up');
    }
  }

function submitQuantityHandler(target){
    if(target.previousElementSibling.value !== ""){
     //value in text box sister to target button
    let multiplier = target.previousElementSibling.value;
    //value attr in the submit button
    let price = target.dataset.value;
   
    let caption =target.previousElementSibling.previousElementSibling.previousElementSibling.children[1].innerHTML;
   
    //update receipt
    //receipt.push([caption, multiplier, (price*multiplier)]);
    balance.push([price*multiplier]);
    receipt.push(new receiptEntry(multiplier, caption, price));
    }
}
//set up all the buttons

let checkOutButton = document.getElementById('check-out');
let backToMenuButton = document.getElementById('back-to-menu-button');
checkOutButton.addEventListener("click", displayBalance);
backToMenuButton.addEventListener("click", backToMenu);


let buttons = document.getElementsByClassName("submit");
for(let i =0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){submitQuantityHandler(buttons[i]);});
}
//set up the special dish
setSpecial();

