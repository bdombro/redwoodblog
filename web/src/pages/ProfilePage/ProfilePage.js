import PagesLayout from 'src/layouts/PagesLayout'
import {useAuth} from "@redwoodjs/auth";
import ProfileCell from 'src/components/ProfileCell'

const ProfilePage = () => {
  const {currentUser, logOut, userMetadata} = useAuth()

  return (
    <PagesLayout title="Profile">
      <p>
        Hello {userMetadata.user_metadata.full_name} (<a href="#" onClick={logOut}>Logout</a>)
      </p>
      <ProfileCell email={currentUser.email} name={userMetadata.user_metadata.full_name} />
    </PagesLayout>
  )
}

export default ProfilePage
