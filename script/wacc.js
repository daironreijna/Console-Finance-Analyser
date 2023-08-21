// Clear the console to start with a clean slate
console.clear();

// Initial data for WACC calculation
const costDebt = 0.05; // Cost of Debt (5%)
const proportionDebt = 0.6; // Proportion of Debt in capital structure (60%)
const costEquity = 0.1; // Cost of Equity (10%)
const proportionEquity = 0.4; // Proportion of Equity in capital structure (40%)

// Calculate Weighted Average Cost of Capital (WACC)
const weightedAverageCostCapital = (costDebt * proportionDebt) + (costEquity * proportionEquity);

// Display the WACC result
console.log('Weighted Average Cost of Capital (WACC) Calculation');
console.log('----------------------------------------------');
console.log(`Cost of Debt: ${costDebt * 100}%`);
console.log(`Proportion of Debt: ${proportionDebt * 100}%`);
console.log(`Cost of Equity: ${costEquity * 100}%`);
console.log(`Proportion of Equity: ${proportionEquity * 100}%`);
console.log(`WACC: ${weightedAverageCostCapital * 100}%`);
