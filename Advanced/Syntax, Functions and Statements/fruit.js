function fruit(fruit_type, weight, price_per_kg) {
    let kg_weight = weight / 1000;
    let money = (weight / 1000) * price_per_kg;
    console.log(`I need $${money.toFixed(2)} to buy ${kg_weight.toFixed(2)} kilograms ${fruit_type}.`);
};

fruit('orange', 2500, 1.80);