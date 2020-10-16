import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'
import LayoutDefault from "src/layouts/LayoutDefault/LayoutDefault";

const UsersLayout = (props) => {
  return (
    <LayoutDefault>
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.users()} className="rw-link">
            Users
          </Link>
        </h1>
        <Link to={routes.newUser()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New User
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </LayoutDefault>
  )
}

export default UsersLayout
