import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));

export const HOME_ROUTE = '/';
export const CONTACTS_ROUTE = '/contacts';
export const SIGNUP_ROUTE = '/signup';
export const LOGIN_ROUTE = '/login';

export const appRoutes = [
    {
      path: HOME_ROUTE,
      element: <RestrictedRoute component={<HomePage/>} redirectTo={CONTACTS_ROUTE}/>,
    },
    {
      path: CONTACTS_ROUTE,
      element: <PrivateRoute component={<ContactsPage/>} redirectTo={LOGIN_ROUTE}/> ,
    },
    {
      path: SIGNUP_ROUTE,
      element: <RestrictedRoute component={<SignUpPage/>} redirectTo={CONTACTS_ROUTE}/>,
    },
    {
      path: LOGIN_ROUTE,
      element: <RestrictedRoute component={<LogInPage/>} redirectTo={CONTACTS_ROUTE}/>,
    },
  ]