import {Flash} from '@redwoodjs/web'
import DefaultLayout from "src/layouts/DefaultLayout/DefaultLayout";

const PagesLayout = (props) => {
  return (
    <DefaultLayout>
      <Flash timeout={1000}/>
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          {props.title}
        </h1>
      </header>
      <main className="rw-main">{props.children}</main>
    </DefaultLayout>
  )
}

export default PagesLayout
