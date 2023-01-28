import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  HomeScreen,
  SearchScreen,
  ProfileScreen,
  FavoritesScreen,
} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomBar } from '~/components'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export const AuthRoutes = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
