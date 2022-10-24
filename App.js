import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from '~/styles'
import { Text } from '~/components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Text.SectionTitle>Olá, BookClub!</Text.SectionTitle>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
