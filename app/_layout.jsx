
import useAuth from '../hooks/useAuth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import _authLayout from './(welcome&auth)/_layout';
import TabsLayout from './(tabs)/_layout';

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  const { user } = useAuth; // Set a default empty object if useAuth returns undefined

  if (user) {
    return (
      TabsLayout()
    );
  }
  else {
    return (
      _authLayout()
    );
  }
};

export default RootLayout;