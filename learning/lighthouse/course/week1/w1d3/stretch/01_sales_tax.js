var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sumSalesArray(array) {
  var total = 0;
  for (i in array) {
    total += array[i];
  }
  return total;
}

function calculateSalesTax(salesData, taxRates) {
  var data = {};

  for(var i = 0; i < salesData.length; i++) {
  var totalTaxesforEach = sumSalesArray(salesData[i]["sales"]) * taxRates[salesData[i]["province"]];

  if(data[salesData[i]["name"]] === undefined) {
    data[salesData[i]["name"]] = {
      totalSales: sumSalesArray(salesData[i]["sales"]),
      totalTaxes: totalTaxesforEach
    }
  } else {
    data[salesData[i]["name"]]["totalSales"] += sumSalesArray(salesData[i]["sales"]);
    data[salesData[i]["name"]]["totalTaxes"] += totalTaxesforEach;
   }
 }

return data;

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results)
