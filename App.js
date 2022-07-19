import 'react-native-gesture-handler';
import Header from './ProjectFiles/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './ProjectFiles/RootNavigation';
import SignUP from './ProjectFiles/signup';
import Dashboard from './src/AppStack';
import Login from './ProjectFiles/login';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      ref={navigationRef}>
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen
          name="SignUP"
          component={SignUP}
          options={{
            header: () => <Header headerDisplay="SignUP" />
          }}
        />
        
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => <Header headerDisplay="Login" />
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            header: () => <Header headerDisplay="Dashboard" />
          }}
        />
       
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

