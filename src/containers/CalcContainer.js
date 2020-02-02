import React, { Component } from 'react'
import DisplayToggle from '../components/DisplayToggle'
import DataEntryForm from '../components/DataEntryForm'
import ResultsDisplay from '../components/ResultsDisplay'
import MaxLoanGenerator from '../components/MaxLoanGenerator'


class CalcContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      salary: 100000
    };

    this.handleMaxLoanSalaryChange = this.handleMaxLoanSalaryChange.bind(this)
  }

  handleMaxLoanSalaryChange(newSalary) {
    this.setState({salary: newSalary})
  }

  render() {
    return(
      <>
        <h1>Mortgage Calculator</h1>
        <MaxLoanGenerator 
          salary={this.state.salary} 
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