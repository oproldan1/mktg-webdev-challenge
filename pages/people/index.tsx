import rivetQuery from '@hashicorp/platform-cms'
import { GetStaticPropsResult } from 'next'
import { PersonRecord, DepartmentRecord } from 'types'
import BaseLayout from '../../layouts/base'
import style from './style.module.css'
import query from './query.graphql'
import HideFeature from '../../layouts/base/components/directory/HideFeature'
import SearchBar from '../../layouts/base/components/directory/SearchBar'

/*
Smart, Functional components should live at the highest level components
Dumb, presentation components should live on bottom so we can recycle as we scale
Could have also used Context API to avoid prop-drilling (esp w/ SearchBar feature)
Then use the useReducer hook so that all components within the provider don't re-render, just the targeted component 

Accessibility:
Semantic HTML: Thoughtful HTML that describes elements on page to inform users where they are currently located. Avoid use of semantic tags for styling because people depend on semantic HTML to gather important info about site 
Tab Trapping: For keyboard users we can keep them within a specific field
Skip links: Skip to the content for a keyboard only user
Alt tags/Alt Attributes/Aria roles: Provide semantic meaning to content
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
        <h1 className={style.title}>HashiCorp Humans</h1>
        <p className={style.tagline}>Find a HashiCorp human</p>
        <SearchBar people={people} />
      </header>
      <HideFeature people={people} allDepts={allDepts} />
    </main>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const data = await rivetQuery({ query })
  console.log(data)
  return { props: data }
}

PeoplePage.layout = BaseLayout
