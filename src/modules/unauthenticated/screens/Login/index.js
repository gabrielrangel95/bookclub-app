import { useState } from 'react'
import { Box, Button, Image, Input } from '~/components/atoms'
import logoSrc from '~/assets/img/logo_full.png'

export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Box.Screen
      m={24}
      w="100%"
      height="100%"
      flexDir="column"
      align="flex-start"
      justify="flex-start">
      <Image source={logoSrc} h={54} w={180} mb={200} />
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="email@example.com"
        mb={16}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="********"
        secureTextEntry
        mb={48}
      />
      <Button>Login</Button>
    </Box.Screen>
  )
}
