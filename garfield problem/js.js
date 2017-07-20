function cat([dolars, exRate, pizzaPrice, lasagnaPrice, sandwichPrice, pizzaQuantity, lasagnaQuantity, sandwichQuantity ]) {
      let pizzaTotal = (pizzaPrice / exRate) * pizzaQuantity;
      let lasagnaTotal = (lasagnaPrice / exRate) * lasagnaQuantity;
      let sandwichTotal = (sandwichPrice / exRate) * sandwichQuantity;
      let totalBill = pizzaTotal + lasagnaTotal + sandwichTotal;
      let difference = Math.abs(totalBill - dolars).toFixed(2);

      if(  totalBill <= dolars) {
          console.log(`Garfield is well fed, John is awesome. Money left: $${difference}.`);
      }else{
          console.log(`Garfield is hungry. John is a badass. Money needed: $${difference}.`);
      }
}

cat([2100000000,
    1.0,
    2100000010.5656,
    1922816888.932,
    1999882888.99,
    90000,
    99,
    289]);