import React from 'react';

const CalculatedResults = (props) => {

  // const getMonthlyPayments = () => {
  //   const annual = props.loanAmount / props.repaymentTime;
  //   const interest = (annual / 100) * props.interestRate;
  //   const monthly = (annual / 12) + interest;
  //   return Math.ceil(monthly);
  // }

  const getMonthlyPayments = () => {
    const total = props.loanAmount;
    const monthly_interest = (props.interestRate / 100) / 12;
    const number_of_payments = props.repaymentTime * 12;

    const numerator = (monthly_interest * Math.pow(1 + monthly_interest, number_of_payments));
    const denominator = Math.pow(1 + monthly_interest, number_of_payments) - 1;

    const monthly_payments = total * (numerator / denominator);

    return parseInt(monthly_payments);
  }

  const getTotalAmountRepayable = () => {
    const monthly = getMonthlyPayments();
    return ((monthly * 12) * props.repaymentTime);
  }

  return(
    <div>
      <h2>Results</h2>
      <h3>Total amount repayable: £ {getTotalAmountRepayable()}</h3>
      <h3>Monthly repayments: £ {getMonthlyPayments()}</h3>
    </div>
  )


}

export default CalculatedResults;