import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from '~/styles'
import { LoginScreen } from '~/modules/unauthenticated/screens'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
