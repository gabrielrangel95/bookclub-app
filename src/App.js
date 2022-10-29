import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from '~/styles'
import { UnAuthRoutes } from '~/modules/unauthenticated/routes'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <UnAuthRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
