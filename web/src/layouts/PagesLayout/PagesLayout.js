import {Flash} from '@redwoodjs/web'
import LayoutDefault from "src/layouts/LayoutDefault/LayoutDefault";

const PagesLayout = (props) => {
  return (
    <LayoutDefault>
      <Flash timeout={1000}/>
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          {props.title}
        </h1>
      </header>
      <main className="rw-main">{props.children}</main>
    </LayoutDefault>
  )
}

export default PagesLayout
