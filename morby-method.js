/**
 * - Useful when seller needs a large down payment
 * - Non QM or DSCR Lenders give 50% of purchase and seller will carry other 50% in a note
 * - Pretty much getting a loan for the down payment
 */
const loanAmount = 20000
const purchasePrice=200000
const remainingMortgage=180000
const monthlyMortgagePayment = (remainingMortgage / 30) /12
const monthlyLoanPayment = (loanAmount / 5) / 12
const monthlyPayment = monthlyLoanPayment + monthlyMortgagePayment

console.log('monthlyPayment', monthlyPayment)