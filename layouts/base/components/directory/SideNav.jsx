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
import style from '../../../../pages/people/style.module.css'

export default function SideNav({ allDepts }) {
  console.log(allDepts, 'list of departments')

  const [uiState, setUiState] = useState({})
  const closeArrow = (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      style={{
        filter:
          'invert(62%) sepia(1%) saturate(0%) hue-rotate(161deg) brightness(100%) contrast(84%)',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.865.661a.498.498 0 10-.704.703l2.636 2.638L2.16 6.639a.498.498 0 10.704.704l2.989-2.989a.498.498 0 000-.705L2.864.66v.001z"
        fill="#000"
        style={{ color: '#989898' }}
      ></path>
    </svg>
  )
  const openArrow = (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: 'rotate(90deg)',
        filter:
          'invert(62%) sepia(1%) saturate(0%) hue-rotate(161deg) brightness(100%) contrast(84%)',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.865.661a.498.498 0 10-.704.703l2.636 2.638L2.16 6.639a.498.498 0 10.704.704l2.989-2.989a.498.498 0 000-.705L2.864.66v.001z"
        fill="#000"
      ></path>
    </svg>
  )

  // create handleClick func
  // create var assigned to false
  // if specific element name === undefined set var to true
  // otherwise newValue will flip boolean to opposite of current value
  const handleClick = (elemName) => {
    let newValue = false
    // the key will only be undefined on the first click...and when we click an element we can to flip its state.
    if (uiState[elemName] === undefined) newValue = true
    else newValue = !uiState[elemName]
    setUiState((prevState) => ({ ...prevState, [elemName]: newValue }))
  }
  console.log('uiState', uiState)
  return (
    <div>
      {JSON.parse(allDepts).map((elem) => {
        if (!elem.children || elem.children.length === 0)
          return <span className={style.navItem}>{elem.name}</span>
        else {
          return (
            //return div
            //return onclick func passing in element name
            //in jsx check if element name in hash is truthy, if so open arrow
            //if elem.name in hash is truthy, return a recursively called component
            <div key={elem.name}>
              <span
                className={style.expandableFolder}
                onClick={() => handleClick(elem.name)}
              >
                {uiState[elem.name] ? openArrow : closeArrow}
                {elem.name}
              </span>
              {uiState[elem.name] && (
                <div className={style.subFolder}>
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
