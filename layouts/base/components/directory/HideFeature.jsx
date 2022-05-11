/**
 * ************************************
 *
 * @module  HideFeature
 * @author Oliver Roldan
 * @description checkbox that hides people without an image when clicked
 *
 * ************************************
 */

import React from 'react'
import style from '../../../../pages/people/style.module.css'


export default function HideFeature() {


  return (
    <div className={style.hideFeature}>
      <input
        className={style.hideFeatureCheckbox}
        type="checkbox"
        // onClick={handleClick()}
      ></input>
      <span className={style.hideFeatureText}>
        Hide people missing a profile image
      </span>
    </div>
  )
}
