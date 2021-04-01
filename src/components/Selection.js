import React, { Fragment } from 'react'

const Selection = ({ trls, selectedTRL }) => {

   const renderTRLs = trls?.map((trl) => {
      return (
         <option key={trl?.id.toString()} value={trl?.id}> {trl?.name} </option>
      )
   })

   return (
      <Fragment>
         <label htmlFor="trl">Technology Readiness Level</label>
         <div className="select">
            <select value={selectedTRL} id="trl">
               {renderTRLs}
            </select>
         </div>
      </Fragment>
   )
}

export default Selection
