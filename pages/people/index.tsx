import rivetQuery from '@hashicorp/platform-cms'
import { GetStaticPropsResult } from 'next'
import { PersonRecord, DepartmentRecord } from 'types'
import BaseLayout from '../../layouts/base'
import style from './style.module.css'
import query from './query.graphql'
import HideFeature from '../../layouts/base/components/directory/HideFeature'
import PeopleDirectory from '../../layouts/base/components/directory/PeopleDirectory'
import SearchBar from '../../layouts/base/components/directory/SearchBar'
import SideNav from '../../layouts/base/components/directory/SideNav'

interface Props {
  allPeople: PersonRecord[]
  allDepartments: DepartmentRecord[]
}

/*
pass down props from index.tsx to SideNav.jsx
*/
export default function PeoplePage({
  allPeople,
  allDepartments,
}: Props): React.ReactElement {
  const people = JSON.stringify(allPeople, null, 2)
  const allDepts = JSON.stringify(allDepartments, null, 2)
  return (
    <main>
      <SearchBar />
      <HideFeature />
      <div style={{ display: 'flex' }}>
        <SideNav allDepts={allDepts} />
        <PeopleDirectory people={people} />
      </div>
    </main>
    // <main className="g-grid-container">
    //   <h2>People Data</h2>
    //   <pre className={style.myData}>{JSON.stringify(allPeople, null, 2)}</pre>
    //   <h2>Departments Data</h2>
    //   <pre className={style.myData}>
    //     {JSON.stringify(allDepartments, null, 2)}
    //   </pre>
    // </main>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const data = await rivetQuery({ query })
  console.log(data)
  return { props: data }
}

PeoplePage.layout = BaseLayout
