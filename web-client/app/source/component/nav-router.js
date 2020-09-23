import React, {Component, Fragment} from 'react'
import {Router, Route, Link} from 'react-router-dom'

import ErrorBoundary from './error-boundary'
import history from './../history'
import {AuthContextProvider} from '../context/auth-context'
import NavAppBar from './nav-app-bar'
import ProfileTab from './tab-profile'
import SignupAdminTab from './tab-signup-admin'
import LoginAdminTab from './tab-login-admin'
import AdminsTab from './tab-admins'
import PagesTab from './tab-pages'
import UsersTab from './tab-users'
import AboutPage from './page-about'
import SignupPage from './page-signup'
import QuestionsPage from './page-questions'
import UserDetails from './details-user'
import AdminDetails from './details-admin'


const NavRouter = () =>
  <ErrorBoundary>
    <AuthContextProvider>
      <Router history={history}>
        <Route path='/' render={({location}) => (
          <Fragment>
            {window.location.pathname.includes('admin') && <NavAppBar />}

            <Route exact path='/' component={QuestionsPage} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/about' component={AboutPage} />

            <Route exact path='/admin' component={UsersTab} />
            <Route exact path='/admin/signup' component={SignupAdminTab} />
            <Route exact path='/admin/profile' component={ProfileTab} />
            <Route exact path='/admin/login' component={LoginAdminTab} />
            <Route exact path='/admin/admins' component={AdminsTab} />
            <Route exact path='/admin/pages' component={PagesTab} />
            <Route exact path="/admin/user/:userId" render={
              (props) => <UserDetails userId={props.match.params.userId}/>
            } />
            <Route exact path="/admin/admin/:userId" render={
              (props) => <AdminDetails userId={props.match.params.userId}/>
            } />
          </Fragment>
        )} />
      </Router>
    </AuthContextProvider>
  </ErrorBoundary>

export default NavRouter
