import React from 'react'

function DisplayToggle () {
  return(
    <div className="displayToggle">
      <form>
         <label><input type="radio" id="maxLoan" />Max Loan</label>
         <label><input type="radio" id="monthlyCost" />Monthly Cost</label>
      </form>
    </div>
  )
};

export default DisplayToggle;