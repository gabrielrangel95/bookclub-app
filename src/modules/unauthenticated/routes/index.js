import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
} from '../screens'
import { theme } from '~/styles/theme'
import { Box } from '~/components'
import Icon from 'react-native-vector-icons/Entypo'

const Stack = createNativeStackNavigator()

export const UnAuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleStyle: {
          fontFamily: theme.fonts.LatoBlack,
          fontSize: theme.px(18),
        },
        headerBackTitleVisible: false,
        headerLeft: () => (
          <Box.Touchable onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-thin-left"
              size={theme.px(24)}
              color={theme.primary}
            />
          </Box.Touchable>
        ),
      })}>
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          title: 'Cadastro',
        }}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{
          title: 'Esqueceu Senha',
        }}
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        options={{
          title: 'Nova Senha',
        }}
        name="ResetPassword"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  )
}
