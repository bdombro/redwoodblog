import {Link, routes} from '@redwoodjs/router'

const DefaultLayout = ({children}) => {
  return (
    <div className="rw-scaffold">
      <header style={{paddingBottom: 20}}>
        <nav>
          <Link to={routes.home()}>Home</Link>{' '}
          <Link to={routes.users()}>Users</Link>{' '}
          <Link to={routes.posts()}>Posts</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
