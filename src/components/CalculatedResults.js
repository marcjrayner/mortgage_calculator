import React from 'react';

const ResultsDisplay = (props) => {

  const getMonthlyPayments = () => {
    const annual = props.loanAmount / props.repaymentTime;
    const interest = (annual / 100) * props.interestRate;
    const monthly = (annual / 12) + interest;
    return Math.ceil(monthly);
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

export default ResultsDisplay;