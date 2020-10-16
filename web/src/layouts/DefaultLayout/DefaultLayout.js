import {useAuth} from '@redwoodjs/auth'
import {Link, routes} from '@redwoodjs/router'

const DefaultLayout = ({children}) => {
  const {logIn} = useAuth()

  return (
    <div className="rw-scaffold">
      <header style={{paddingBottom: 20}}>
        <nav>
          <Link to={routes.home()}>Home</Link>{' '}
          <Link to={routes.users()}>Users</Link>{' '}
          <Link to={routes.posts()}>Posts</Link>{' '}
          <a href="#" onClick={logIn}>Log In</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
