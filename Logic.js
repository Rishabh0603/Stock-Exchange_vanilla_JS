let InitialPrice = document.querySelector("#InitialPrice");
let Quantity =     document.querySelector("#Quantity");
let CurrentPrice = document.querySelector("#CurrentPrice");
let btn =          document.querySelector("#btn");
let Output =       document.querySelector("#Output");




function CalculateProfit(){
    let quantity = parseInt(Quantity.value); 
    let CostPrice= parseFloat(InitialPrice.value)* quantity;
    let SellingPrice = parseFloat(CurrentPrice.value)* quantity;
let profit = SellingPrice - CostPrice;

return profit;
}

function CalculateLoss(){
    let quantity = parseInt(Quantity.value); 
    let CostPrice= parseFloat(InitialPrice.value)* quantity;
    let SellingPrice = parseFloat(CurrentPrice.value)* quantity;
   
   let loss = Math.abs(SellingPrice - CostPrice);
   return loss;
}

function CalculateProfitercentage(){
    let quantity = parseInt(Quantity.value); 
   let profit = CalculateProfit();
   let CostPrice= parseFloat(InitialPrice.value)* quantity;
   let profitPercentage = (profit/CostPrice)*100;
   Output.innerText=(`Hey, the profit is ${profit} and the percentage is ${profitPercentage}%`);
   return profitPercentage;
}

function CalculateLossPercentage(){
    let quantity = parseInt(Quantity.value); 
   let loss = CalculateLoss();
   let CostPrice= parseFloat(InitialPrice.value)* quantity;
   let lossPercentage = (loss/CostPrice)*100;
   Output.innerText= `Hey, the loss is ${loss} and the percentage is ${lossPercentage}%`;
   return lossPercentage;
}

function CalculateProfitandLoss(){
    let quantity = parseInt(Quantity.value); 
    let CostPrice= parseFloat(InitialPrice.value)* quantity;
    let SellingPrice = parseFloat(CurrentPrice.value)* quantity;

    if(!quantity || quantity<0 || !CostPrice || CostPrice<0 || !SellingPrice || SellingPrice<0)
    alert("please enter valid value");

    else{
    if(SellingPrice > CostPrice){
        let profit = CalculateProfit();
        let profitPercentage = CalculateProfitercentage();
    }
    else{
        let loss = CalculateLoss();
        let lossPercentage = CalculateLossPercentage();
    }

SellingPrice>CostPrice?document.body.style.backgroundColor="rgb(116 234 116)":document.body.style.backgroundColor="#f73e3e";

}}
btn.addEventListener("click",CalculateProfitandLoss)

