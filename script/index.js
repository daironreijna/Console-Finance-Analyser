// Clear the console to start with a clean slate
console.clear();

// Initial data: An array of financial data for different months
const finances = [
  { monthYear: 'Jan-2010', profitLoss : 867884}, 
  { monthYear: 'Feb-2010', profitLoss : 984655}, 
  { monthYear: 'Mar-2010', profitLoss : 322013}, 
  { monthYear: 'Apr-2010', profitLoss : -69417}, 
  { monthYear: 'May-2010', profitLoss : 310503}, 
  { monthYear: 'Jun-2010', profitLoss : 522857}, 
  { monthYear: 'Jul-2010', profitLoss : 1033096}, 
  { monthYear: 'Aug-2010', profitLoss : 604885}, 
  { monthYear: 'Sep-2010', profitLoss : -216386}, 
  { monthYear: 'Oct-2010', profitLoss : 477532}, 
  { monthYear: 'Nov-2010', profitLoss : 893810}, 
  { monthYear: 'Dec-2010', profitLoss : -80353}, 
  { monthYear: 'Jan-2011', profitLoss : 779806}, 
  { monthYear: 'Feb-2011', profitLoss : -335203}, 
  { monthYear: 'Mar-2011', profitLoss : 697845}, 
  { monthYear: 'Apr-2011', profitLoss : 793163}, 
  { monthYear: 'May-2011', profitLoss : 485070}, 
  { monthYear: 'Jun-2011', profitLoss : 584122}, 
  { monthYear: 'Jul-2011', profitLoss : 62729}, 
  { monthYear: 'Aug-2011', profitLoss : 668179}, 
  { monthYear: 'Sep-2011', profitLoss : 899906}, 
  { monthYear: 'Oct-2011', profitLoss : 834719}, 
  { monthYear: 'Nov-2011', profitLoss : 132003}, 
  { monthYear: 'Dec-2011', profitLoss : 309978}, 
  { monthYear: 'Jan-2012', profitLoss : -755566}, 
  { monthYear: 'Feb-2012', profitLoss : 1170593}, 
  { monthYear: 'Mar-2012', profitLoss : 252788}, 
  { monthYear: 'Apr-2012', profitLoss : 1151518}, 
  { monthYear: 'May-2012', profitLoss : 817256}, 
  { monthYear: 'Jun-2012', profitLoss : 570757}, 
  { monthYear: 'Jul-2012', profitLoss : 506702}, 
  { monthYear: 'Aug-2012', profitLoss : -1022534}, 
  { monthYear: 'Sep-2012', profitLoss : 475062}, 
  { monthYear: 'Oct-2012', profitLoss : 779976}, 
  { monthYear: 'Nov-2012', profitLoss : 144175}, 
  { monthYear: 'Dec-2012', profitLoss : 542494}, 
  { monthYear: 'Jan-2013', profitLoss : 359333}, 
  { monthYear: 'Feb-2013', profitLoss : 321469}, 
  { monthYear: 'Mar-2013', profitLoss : 67780}, 
  { monthYear: 'Apr-2013', profitLoss : 471435}, 
  { monthYear: 'May-2013', profitLoss : 565603}, 
  { monthYear: 'Jun-2013', profitLoss : 872480}, 
  { monthYear: 'Jul-2013', profitLoss : 789480}, 
  { monthYear: 'Aug-2013', profitLoss : 999942}, 
  { monthYear: 'Sep-2013', profitLoss : -1196225}, 
  { monthYear: 'Oct-2013', profitLoss : 268997}, 
  { monthYear: 'Nov-2013', profitLoss : -687986}, 
  { monthYear: 'Dec-2013', profitLoss : 1150461}, 
  { monthYear: 'Jan-2014', profitLoss : 682458}, 
  { monthYear: 'Feb-2014', profitLoss : 617856}, 
  { monthYear: 'Mar-2014', profitLoss : 824098}, 
  { monthYear: 'Apr-2014', profitLoss : 581943}, 
  { monthYear: 'May-2014', profitLoss : 132864},     
  { monthYear: 'Jun-2014', profitLoss : 448062}, 
  { monthYear: 'Jul-2014', profitLoss : 689161}, 
  { monthYear: 'Aug-2014', profitLoss : 800701}, 
  { monthYear: 'Sep-2014', profitLoss : 1166643}, 
  { monthYear: 'Oct-2014', profitLoss : 947333}, 
  { monthYear: 'Nov-2014', profitLoss : 578668}, 
  { monthYear: 'Dec-2014', profitLoss : 988505}, 
  { monthYear: 'Jan-2015', profitLoss : 1139715}, 
  { monthYear: 'Feb-2015', profitLoss : 1029471}, 
  { monthYear: 'Mar-2015', profitLoss : 687533}, 
  { monthYear: 'Apr-2015', profitLoss : -524626}, 
  { monthYear: 'May-2015', profitLoss : 158620}, 
  { monthYear: 'Jun-2015', profitLoss : 87795}, 
  { monthYear: 'Jul-2015', profitLoss : 423389}, 
  { monthYear: 'Aug-2015', profitLoss : 840723}, 
  { monthYear: 'Sep-2015', profitLoss : 568529}, 
  { monthYear: 'Oct-2015', profitLoss : 332067}, 
  { monthYear: 'Nov-2015', profitLoss : 989499}, 
  { monthYear: 'Dec-2015', profitLoss : 778237}, 
  { monthYear: 'Jan-2016', profitLoss : 650000}, 
  { monthYear: 'Feb-2016', profitLoss : -1100387}, 
  { monthYear: 'Mar-2016', profitLoss : -174946}, 
  { monthYear: 'Apr-2016', profitLoss : 757143}, 
  { monthYear: 'May-2016', profitLoss : 445709}, 
  { monthYear: 'Jun-2016', profitLoss : 712961}, 
  { monthYear: 'Jul-2016', profitLoss : -1163797}, 
  { monthYear: 'Aug-2016', profitLoss : 569899}, 
  { monthYear: 'Sep-2016', profitLoss : 768450}, 
  { monthYear: 'Oct-2016', profitLoss : 102685}, 
  { monthYear: 'Nov-2016', profitLoss : 795914}, 
  { monthYear: 'Dec-2016', profitLoss : 60988}, 
  { monthYear: 'Jan-2017', profitLoss : 138230}, 
  { monthYear: 'Feb-2017', profitLoss : 671099}
];

// Display the financial data in a table format
console.table(finances);

// Count the number of months in the dataset
const numberOfMonths = finances.length;

// Calculate the total profit or loss over the entire period
let total = 0;
for (let i = 0; i < numberOfMonths; i++) {
  // Access the profitLoss property of each month's data
  total += finances[i].profitLoss;
}

// Calculate the average change in profit or loss
let totalChange = 0;
for (let i = 1; i < numberOfMonths; i++) {
  // Calculate the change by subtracting the current month's profit/loss from the previous month's
  const change = finances[i].profitLoss - finances[i - 1].profitLoss;
  totalChange += change;
}

// Calculate the average change by dividing the total change by the number of changes
const averageChange = totalChange / (numberOfMonths - 1);

// Find the month with the greatest increase in profits
let greatestIncrease = { amount: -Infinity };
for (let i = 1; i < numberOfMonths; i++) {
  const increase = finances[i].profitLoss - finances[i - 1].profitLoss;
  if (increase > greatestIncrease.amount) {
    greatestIncrease = { amount: increase, monthYear: finances[i].monthYear };
  }
}

// Find the month with the greatest decrease in profits
let greatestDecrease = { amount: Infinity };
for (let i = 1; i < numberOfMonths; i++) {
  const decrease = finances[i].profitLoss - finances[i - 1].profitLoss;
  if (decrease < greatestDecrease.amount) {
    greatestDecrease = { amount: decrease, monthYear: finances[i].monthYear };
  }
}

// Display the financial analysis to the user
console.log('Financial Analysis');
console.log('----------------------------');
console.log(`Number of Months: ${numberOfMonths}`);
console.log(`Total Profit/Loss: $${total}`);
console.log(`Average Change: $${averageChange.toFixed(2)}`);
console.log(`Greatest Increase in Profits: ${greatestIncrease.monthYear} ($${greatestIncrease.amount.toFixed(2)})`);
console.log(`Greatest Decrease in Profits: ${greatestDecrease.monthYear} ($${greatestDecrease.amount.toFixed(2)})`);