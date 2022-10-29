import { Box, Button, Image } from '~/components/atoms'
import logoSrc from '~/assets/img/logo_full.png'

export const LoginScreen = () => {
  return (
    <Box.Screen
      m={24}
      w="100%"
      height="100%"
      flexDir="column"
      align="flex-start"
      justify="flex-start">
      <Image source={logoSrc} h={54} w={180} />
      <Button>Login</Button>
    </Box.Screen>
  )
}
