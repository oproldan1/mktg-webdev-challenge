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

export default function PeopleDirectory({ people }) {
  const allPersons = JSON.parse(people)
  // console.log(allPersons)
  const showPeople = (people) => {
    return people.map((person) => {
      const src =
        //if exists, it will return val of string (truthy)
        //if val to left is truthy, return val on left, otherwise val on right
        //opt chaining: if you access prop of object that doesnt exist, itll break. but optional chaining doesnt throw runtime error
        person?.avatar?.url ??
        'https://www.datocms-assets.com/37761/1605803216-1.jpg'
      return <img alt="pic" key={person.name} src={src} />
    })
  }
  return <div>{showPeople(allPersons)}</div>
}
