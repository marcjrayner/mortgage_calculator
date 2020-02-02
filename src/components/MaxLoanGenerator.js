import React, { Component } from 'react'

class MaxLoanGenerator extends Component {

  constructor(props) {
    super(props);
    this.state = {

     }
     this.handleSalaryChange = this.handleSalaryChange.bind(this)
  }

  handleSalaryChange(event) {
    this.props.onSalaryChange(event.target.value)
  }

  render() {
    return(
      <div className="displayToggle">
        <h3>Calclulate Max Loan: </h3>
        <label>Salary: <input type="number" value={this.props.salary} onChange={this.handleSalaryChange}/></label>
        <p>Your Max Loan: £{this.props.maxLoan}</p>
        <hr></hr>
      </div>
    )
  }

};

export default MaxLoanGenerator;