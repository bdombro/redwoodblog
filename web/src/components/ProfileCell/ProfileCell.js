/**
 * Shows a user edit form
 *
 * Note: New users exist in netlify but not in our database yet. So,
 * this cell will create the user record if it doesn't exist.
 *
 */
import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import UserForm from 'src/components/UserForm'

export const QUERY = gql`
  query FIND_USER_BY_EMAIL($email: String!) {
    user: userByEmail(email: $email) {
      id
      createdAt
      email
      name
    }
  }
`
const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`
const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({email, name}) => {
  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      navigate(routes.profile())
    },
  })

  React.useEffect(() => {
    createUser({ variables: { input: {email, name} } })
  }, []);

  return !!error && (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Oops!</h2>
      </header>
      <div className="rw-segment-main">
        There was an error finding your profile.
        Details:
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    </div>
  )
}

export const Success = ({ user }) => {
  const { addMessage } = useFlash()
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      navigate(routes.profile())
      addMessage('User updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit User {user.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UserForm user={user} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
