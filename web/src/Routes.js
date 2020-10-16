// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import {Private, Router, Route} from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home"/>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Private unauthenticated="home">
        <Route path="/profile" page={ProfilePage} name="profile" />
      </Private>
      <Private unauthenticated="home" role={['admin']}>
        <Route path="/admin" page={AdminPage} name="admin" />
        <Route path="/admin/posts/new" page={NewPostPage} name="newPost"/>
        <Route path="/admin/posts/{id:Int}/edit" page={EditPostPage} name="editPost"/>
        <Route path="/admin/posts/{id:Int}" page={PostPage} name="post"/>
        <Route path="/admin/posts" page={PostsPage} name="posts"/>
        <Route path="/admin/users/new" page={NewUserPage} name="newUser"/>
        <Route path="/admin/users/{id:Int}/edit" page={EditUserPage} name="editUser"/>
        <Route path="/admin/users/{id:Int}" page={UserPage} name="user"/>
        <Route path="/admin/users" page={UsersPage} name="users"/>
      </Private>
      <Route notfound page={NotFoundPage}/>
    </Router>
  )
}

export default Routes
