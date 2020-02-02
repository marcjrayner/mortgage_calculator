import React, { Component } from 'react';
import CalculatedResults from './CalculatedResults';

class DataEntryFrom extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: props.maxLoan,
      repaymentTime: 25,
      interestRate: 4
      
    };
    this.handleLoanChange = this.handleLoanChange.bind(this)
  }

  handleLoanChange(e) {
    const newAmount = parseInt(e.target.value)
    this.setState({loanAmount: newAmount })
  }

  render() {
    return(
      <div>
        <h2>Enter Info:</h2>
        <form>
          <label>Total loan amount: <input type="number" defaultValue={this.props.maxLoan} onChange={this.handleLoanChange} /></label>
          <label>Repayment time(years): <input type="text" defaultValue="25" /></label>
          <label>Interest rate (%): <input type="text" defaultValue="4"/></label>
        </form>
        <CalculatedResults
          loanAmount={this.state.loanAmount}
          repaymentTime={this.state.repaymentTime}
          interestRate={this.state.interestRate}
        />
      </div>
    )
  }

}

export default DataEntryFrom;