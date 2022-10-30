import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from '~/styles'
import { UnAuthRoutes } from '~/modules/unauthenticated/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FlashMessage from 'react-native-flash-message'

const queryClient = new QueryClient()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <UnAuthRoutes />
        </NavigationContainer>
      </QueryClientProvider>
      <FlashMessage position="top" />
    </ThemeProvider>
  )
}

export default App
