import { useState } from 'react'
import { Box, Button, Image, Input, Text } from '~/components/atoms'
import logoSrc from '~/assets/img/logo_full.png'

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Box
      bg="white"
      p={24}
      w="100%"
      height="100%"
      flexDir="column"
      align="flex-start"
      justify="flex-start">
      <Image source={logoSrc} mt={48} h={54} w={180} mb={160} />
      <Text.ScreenTitle mb={16}>Login</Text.ScreenTitle>
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
        mb={16}
      />
      <Box mb={24} w={352} align="flex-end">
        <Box.Touchable>
          <Text.TinyText color="grey">Esqueceu a senha?</Text.TinyText>
        </Box.Touchable>
      </Box>
      <Button>Login</Button>
      <Box mt={64} w="100%" align="center">
        <Box.Touchable
          onPress={() => navigation.navigate('Register')}
          flexDir="row">
          <Text color="grey" font="semibold">
            Não possui uma conta?{' '}
          </Text>
          <Text font="bold">Cadastre-se aqui.</Text>
        </Box.Touchable>
      </Box>
    </Box>
  )
}
