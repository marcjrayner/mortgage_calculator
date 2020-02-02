import React, { Component } from 'react'
import DisplayToggle from '../components/DisplayToggle'
import DataEntryForm from '../components/DataEntryForm'
import ResultsDisplay from '../components/ResultsDisplay'
import MaxLoanGenerator from '../components/MaxLoanGenerator'


class CalcContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      salary: 100000,
      maxLoan: 350000
    };
    this.updateMaxLoan = this.updateMaxLoan.bind(this)
    this.handleMaxLoanSalaryChange = this.handleMaxLoanSalaryChange.bind(this)
  }

  handleMaxLoanSalaryChange(newSalary) {
    let newSalInt = parseInt(newSalary)
    // if (isNaN(newSalInt)) {this.updateMaxLoan(0)}
    // else 
    this.setState({salary: newSalInt})
    this.updateMaxLoan(newSalInt)
    
  }

  updateMaxLoan(newSalInt) {
    const newMaxLoan = newSalInt * 3.5
    this.setState({maxLoan: newMaxLoan})
  }


  render() {
    return(
      <>
        <h1>Mortgage Calculator</h1>
        <MaxLoanGenerator 
          salary={this.state.salary} 
          maxLoan={this.state.maxLoan}
          onSalaryChange={this.handleMaxLoanSalaryChange}
        />
        <DisplayToggle/>
        <DataEntryForm/>
        <ResultsDisplay/>
      </>
    )
  }

};

export default CalcContainer;