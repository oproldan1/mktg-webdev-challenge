/**
 * ************************************
 *
 * @module  SearchBar
 * @author Oliver Roldan
 * @description search bar allowing user to find specific person by name
 *
 * ************************************
 */

/*
How I would implement:
The onChange method would invoke each time the input field changes
That would invoke the setter function and update state within useState hook
Apply that current value as a filter
Where filter.name === input value, capture that input and filter all users available with that specific value
Straightforward to implement, unfortunately ran out of time.

Restructued component tree, and attempted last minute to use useRef to check if value changes in state. If so, it would eventually affect rendering.
*/

import React, { useState, useRef } from 'react'
import style from '../../../../pages/people/style.module.css'

export default function SearchBar({ people }) {
  const inputEl = useRef(' ')
  console.log(inputEl.current.value)
  console.log(people, 'in search bar')
  const [search, setSearch] = useState('')

  return (
    <div className={style.search}>
      <i
        alt="search icon"
        style={{ position: 'relative', top: '4px', left: '30px' }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M8.75 15a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5z"
            stroke="var(--gray-3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17.5 17.5l-4.333-4.333"
            stroke="var(--gray-3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </i>
      <input
        className={style.searchBar}
        ref={inputEl}
        type="text"
        name="searchInput"
        placeholder="Search people by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
