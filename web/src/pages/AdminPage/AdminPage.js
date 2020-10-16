import PagesLayout from 'src/layouts/PagesLayout'
import {Link, routes} from "@redwoodjs/router";

const AdminPage = () => {
  return (
    <PagesLayout title="Admin Dashboard">
      <ul>
        <li>
          <Link to={routes.users()}>Users</Link>{' '}
        </li>
        <li>
          <Link to={routes.posts()}>Posts</Link>{' '}
        </li>
      </ul>
    </PagesLayout>
  )
}

export default AdminPage
