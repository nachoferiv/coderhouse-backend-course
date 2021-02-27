const getArrayInfo = (arr) => {
    const names = arr.map(e => e.name).toString();
    const totalPrice = Number(arr.reduce((total, e) => total + e.price, 0).toFixed(2));
    const priceAvg = Number((totalPrice/arr.length).toFixed(2));
    const mostExpensiveProduct = Math.max(...arr.map(e => e.price));
    const mostCheapProduct = Math.min(...arr.map(e => e.price));

    const data = {
        names,
        totalPrice,
        priceAvg,
        mostExpensiveProduct,
        mostCheapProduct
    }

    return data;
}

module.exports = getArrayInfo;