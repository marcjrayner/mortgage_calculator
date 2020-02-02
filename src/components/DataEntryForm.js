import React from 'react';

function DataEntryFrom () {
  return(
    <div>
      <h2>Enter Info:</h2>
      <form>
        <label>Total loan amount: <input type="number"/></label>
        <label>Repayment time(years): <input type="text"  /></label>
        <label>Interest rate: <input type="text" /></label>
      </form>
    </div>
  )
}

export default DataEntryFrom;