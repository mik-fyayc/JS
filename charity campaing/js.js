function cooking([numDays, numCooks, numCakes, numGofrets, numPancakes ]) {
    let priceCake = 45;
    let priceGafrets = 5.8;
    let pricePancakes = 3.2;

    let pricePerDay = (numCakes * priceCake) + (numGofrets * priceGafrets) + (numPancakes * pricePancakes);
    let finalPrice = (pricePerDay * numCooks * numDays);
    let tax = finalPrice * 0.125;
    let total = finalPrice - tax;
    console.log(total.toFixed(2));
}

cooking([20, 8, 14, 30, 16]);