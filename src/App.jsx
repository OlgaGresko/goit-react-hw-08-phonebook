// import ContactForm from './components/ContactForm/ContactForm';
// import Filter from './components/Filter/Filter';
// import ContactList from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserAuthentication,
  selectUserData,
} from 'redux/selectors';
import { Audio } from 'react-loader-spinner';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  appRoutes,
} from 'config/routes';
import { Suspense, lazy, useEffect } from 'react';
import { logoutUser, refreshUser } from 'redux/operations';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthentication);
  const userData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#f6f6f6',
      }}
    >
      <header>
        <nav>
          <NavLink to={HOME_ROUTE} className='link'>Home</NavLink>

          {authenticated ? (
            <>
              <NavLink to={CONTACTS_ROUTE} className='link'>Phonebook</NavLink>
              <span>Hello, {userData.name}</span>
              <button onClick={handleLogout} className='link'>Log Out</button>
            </>
          ) : (
            <>
              <NavLink to={SIGNUP_ROUTE} className='link'>Sign Up</NavLink>
              <NavLink to={LOGIN_ROUTE} className='link'>Log In</NavLink>
            </>
          )}
        </nav>
        
      </header>
      <hr />
      <main>
        <Suspense
          fallback={
            <Audio height="80" width="80" color="grey" ariaLabel="loading" />
          }
        >
          <Routes>
            {appRoutes.map(({ path, element }) => {
              return <Route path={path} element={element} key={path} />;
            })}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
