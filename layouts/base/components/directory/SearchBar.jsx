/**
 * ************************************
 *
 * @module  SearchBar
 * @author Oliver Roldan
 * @description search bar allowing user to find specific person by name
 *
 * ************************************
 */

import React, { useState } from 'react'
import style from '../../../../pages/people/style.module.css'

export default function SearchBar() {
  const [text, setText] = useState('')

  return (
    <div>
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
      <input
        className={style.searchBar}
        type="text"
        name="searchInput"
        placeholder="Search people by name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}
