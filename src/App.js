import { ThemeProvider } from 'styled-components'
import { theme } from '~/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FlashMessage from 'react-native-flash-message'
import { GlobalProvider } from '~/services/context'
import { Router } from '~/router'

const queryClient = new QueryClient()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </GlobalProvider>
      <FlashMessage position="top" />
    </ThemeProvider>
  )
}

export default App
