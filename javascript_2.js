$(document).ready(function(){
  
let menuInputs = $("input");
menuInputs = menuInputs.filter(input => { return input.val();}); 
function displayMenu(){
    let total=0;
    let receipt = [];
    menuInputs.each((input) =>{
        if(input.val()>0){
        total += (input.dataset * input.val());
        receipt.push(input.closest(".menu-grid").figcaption.innerHTML + " X" + input.val() + " " + (input["data-value"] * input.val()));
        console.log(receipt);
       }
    });
    
}

$("#checkout").on("click", displayMenu);


});
