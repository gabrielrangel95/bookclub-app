import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens'

const Stack = createNativeStackNavigator()

export const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  )
}
