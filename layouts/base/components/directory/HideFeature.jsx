/**
 * ************************************
 *
 * @module  HideFeature
 * @author Oliver Roldan
 * @description checkbox that hides people without an image when clicked. Parent of SideNav and People Directory
 *
 * ************************************
 */

import React, { useState } from 'react'
import PeopleDirectory from './PeopleDirectory'
import SideNav from './SideNav'
import style from '../../../../pages/people/style.module.css'

export default function HideFeature({ people, allDepts }) {
  const [isClicked, setIsClicked] = useState(false)

  const allPersons = JSON.parse(people)
  const noAvatar = allPersons.filter((person) => person.avatar)
  console.log(noAvatar)
  console.log(allPersons)

  return (
    <div>
      <div className={style.hideFeatureGroup}>
        <input
          className={style.hideFeatureCheckbox}
          type="checkbox"
          onChange={(e) => setIsClicked(e.target.checked)}
        ></input>
        <span className={style.hideFeatureText}>
          Hide people missing a profile image
        </span>
      </div>

      <div className={style.pageContent}>
        <div className={style.navArea}>
          <div className={style.navTitle}>Filter By Department</div>
          <SideNav allDepts={allDepts} />
        </div>
        {/* clicked? render component passing in those w/ no avatar, else pass in all people */}
        {isClicked ? (
          <PeopleDirectory people={noAvatar} />
        ) : (
          <PeopleDirectory people={allPersons} />
        )}
      </div>
    </div>
  )
}
