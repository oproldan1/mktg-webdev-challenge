/**
 * ************************************
 *
 * @module  SideNav
 * @author Oliver Roldan
 * @description navigation tree that displays folders and subfolders based on department
 *
 * ************************************
 */

import React, { useState } from 'react'

export default function SideNav({ allDepts }) {
  console.log(allDepts, 'list of departments')

  const [uiState, setUiState] = useState({})
  let closeArrow = '▶'
  let openArrow = '▼'

  // create handleClick func
  // create var assigned to false
  // if specific elementname === undefined set var to true
  // otherwise newValue will flip boolean to opposite of current value
  const handleClick = (elemName) => {
    let newValue = false
    // the key will only be undefined on the first click.. and when we click an element we can to flip its state.
    if (uiState[elemName] === undefined) newValue = true
    else newValue = !uiState[elemName]
    setUiState((prevState) => ({ ...prevState, [elemName]: newValue }))
  }

  console.log('uiState', uiState)

  return (
    <div>
      {JSON.parse(allDepts).map((elem) => {
        if (!elem.children || elem.children.length === 0)
          return (
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              {'•'}
              {elem.name}
            </span>
          )
        else {
          return (
            //return div
            //return onclick func passing in element name
            //in jsx check if element name in hash is truthy, if so open arrow
            //if elem.name in hash is truthy, return a recursively called component
            <div key={elem.name}>
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => handleClick(elem.name)}
              >
                {uiState[elem.name] ? openArrow : closeArrow}
                {elem.name}
              </span>
              {uiState[elem.name] && (
                <div style={{ paddingLeft: '25px' }}>
                  <SideNav allDepts={JSON.stringify(elem.children, null)} />
                </div>
              )}
            </div>
          )
        }
      })}
    </div>
  )
}
