function deliveryCost(totalShirt) {
    const akso = 100;
    const duiso = 80;
    const duisoPlus = 50;
    //if tshirt quantity 100 or less than 100
    if (totalShirt <= 100) {
        const totalS1 = totalShirt * akso;
        console.log("This is part 1", totalS1);
        return totalS1;
    }
    // if tshirt quantity 200 or less than 200
    else if (totalShirt <= 200) {
        const first1 = 100 * akso;
        const minus = totalShirt - 100;
        const first2 = minus * duiso;
        const totalS2 = first1 + first2;
        console.log("This is part 2", totalS2);
        return totalS2;
    }
    //if tshirt value more than 200
    else {
        const first3 = 100 * akso;
        const first4 = 100 * duiso;
        const minus2 = totalShirt - 200;
        const first5 = minus2 * duisoPlus;
        const totalS3 = first3 + first4 + first5;
        console.log("This is part 3", totalS3);
        return totalS3;
    }
}
const totalDelivery = deliveryCost(500);
console.log(totalDelivery);