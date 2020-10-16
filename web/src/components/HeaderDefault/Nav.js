import {useAuth} from '@redwoodjs/auth'
import {Link, routes} from '@redwoodjs/router'

const Nav = () => {
  const {isAuthenticated, hasRole, logIn} = useAuth()

  return (
    <nav>
      <Link to={routes.home()}>Home</Link>{' '}
      {hasRole('admin') && <Link to={routes.admin()}>Admin</Link>}{' '}
      {isAuthenticated
        ? <Link to={routes.profile()}>Profile</Link>
        : <a href="#" onClick={logIn}>Log In</a>
      }

    </nav>
  )
}

export default Nav
