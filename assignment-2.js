function totalSales(shirts, pants, shoes) {
    const shirtsTk = 100;
    const pantsTk = 200;
    const shoesTk = 500;
    // calculation
    const shirtCost = shirts * shirtsTk;
    const pantsCost = pants * pantsTk;
    const shoesCost = shoes * shoesTk;
    // adding all  quantity
    const totalCost = shirtCost + pantsCost + shoesCost;
    return totalCost;
}

const cost = totalSales(1, 3, 5);
console.log(cost);