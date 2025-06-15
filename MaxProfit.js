
var maxProfit = function(prices) {
  let minPrice = prices[0]
  let maxProfit = 0;
  
  for(let i = 1; i < prices.length; i++){

    let cPrice = prices[i];

    minPrice = Math.min(minPrice, cPrice);

    let potential = cPrice - minPrice;

    maxProfit = Math.max(maxProfit, potential);


  }

  return maxProfit;

 };







