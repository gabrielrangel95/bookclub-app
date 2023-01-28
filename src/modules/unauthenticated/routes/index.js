import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
} from '../screens'
import { theme } from '~/styles/theme'
import { Icon } from '~/components'

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
          <Icon.Touchable
            onPress={() => navigation.goBack()}
            name="chevron-left"
            size={28}
            color="primary"
          />
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
