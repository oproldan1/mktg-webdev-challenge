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

/*
TODO:
Create search with placeholder
Create checkbox with hide people missing a profile image
create logic for cards 
*/

interface Props {
  allPeople: PersonRecord[]
  allDepartments: DepartmentRecord[]
}

export default function PeoplePage({
  allPeople,
  allDepartments,
}: Props): React.ReactElement {
  const people = JSON.stringify(allPeople, null, 2)
  const allDepts = JSON.stringify(allDepartments, null, 2)
  return (
    <main>
      <header className={style.pageHeader}>
        <h2 className={style.title}>HashiCorp Humans</h2>
        <p className={style.tagline}>Find a HashiCorp human</p>
        <SearchBar />
        <HideFeature />
      </header>
      <div className={style.pageContent}>
        <div className={style.navArea}>
          <div className={style.navTitle}>Filter By Department</div>
          <SideNav allDepts={allDepts} />
        </div>
        <PeopleDirectory people={people} />
      </div>
    </main>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const data = await rivetQuery({ query })
  console.log(data)
  return { props: data }
}

PeoplePage.layout = BaseLayout
