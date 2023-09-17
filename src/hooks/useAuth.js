import { useSelector } from 'react-redux';
import {
  selectUserData,
  selectUserAuthentication,
  selectIsRefreshing,
} from 'redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectUserAuthentication);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUserData);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};