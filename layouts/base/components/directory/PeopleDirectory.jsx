/**
 * ************************************
 *
 * @module  PeopleDirectory
 * @author Oliver Roldan
 * @description display of cards showing person's name, avatar, job title, and department
 *
 * ************************************
 */

import React from 'react'
import style from '../../../../pages/people/style.module.css'

export default function PeopleDirectory({ people }) {
  const showPeople = (people) => {
    return people.map((person) => {
      //if avatar exists, it will return value of string (truthy)
      //if value to left is truthy, return val on left, otherwise val on right
      //opt chaining('?.'): if you access prop of object that doesnt exist, itll break. but optional chaining will not throw a runtime error
      const src =
        person?.avatar?.url ??
        'https://s3-alpha-sig.figma.com/img/0141/2c98/7cc92de18c91d1c68d77f3fedc8aeba3?Expires=1653264000&Signature=FGmueFwBcHQX5yv2UWbUPZXm2hYGCRYc6GugKnVPgKam1dTPrykXsB26Xeg~gA~iAgFo-7Ge93GDZr3wNNexHEpoy4G0ZaUWND6dKQB33RpehSaB2RRYsmt2WuBO3eS3IJGI8TbXM~8KkwC3ioW9NIduc-B6GVfD8nBAxig0rDgvEoZnlTRC8jMCIebDqc7cmr1vQw7o8DmgY5lRb99DauqatdLFNbG54egMUVxAqDZb4nw1p-KBeQZXCakKCKC5-4Tkv0YjafwzvCFte2LBN~4dTNlP3hK9oC0mEGhWTL4xQ9WrFgTHPlss-vg62qSzm8kBUBdUyVpqqi~-lMasLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
      //return an individual card, styled w a classname
      return (
        <div key={person.name} className={style.peopleCards}>
          <div className={style.teamMember}>
            <figure className={style.teamMemberImage}>
              <img
                className={style.personImage}
                alt="headshot of employee"
                key={person.name}
                src={src}
              />
            </figure>
          </div>
          <div>
            <p className={style.teamHeading}>{person.name}</p>
            <p className={style.teamDesignation}>{person.title}</p>
            <p className={style.teamDepartment}>{person.department.name}</p>
          </div>
        </div>
      )
    })
  }
  return <div className={style.peopleWrapper}>{showPeople(people)}</div>
}

/*
For Reference:

avatar:
url: "https://www.datocms-assets.com/37761/1605803255-18.jpg"
[[Prototype]]: Object
department:
name: "HR"
[[Prototype]]: Object
name: "Evelyn Conroy"
title: "Chief Optimization Associate"
*/
