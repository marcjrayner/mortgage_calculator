import React from 'react'
import DisplayToggle from '../components/DisplayToggle'
import DataEntryForm from '../components/DataEntryForm'
import ResultsDisplay from '../components/ResultsDisplay'


function CalcContainer () {
  return(
    <>
      <h1>Mortgage Calculator</h1>
      <DisplayToggle/>
      <DataEntryForm/>
      <ResultsDisplay/>
    </>
  )
};

export default CalcContainer;