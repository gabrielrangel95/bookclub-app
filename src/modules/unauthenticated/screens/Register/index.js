import { useState } from 'react'
import { Box, Input, Button } from '~/components'

export const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <Box align="center" bg="white" w="100%" h="100%">
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Seu nome"
        mt={48}
        mb={24}
      />

      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="email@example.com"
        mb={24}
      />

      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="********"
        secureTextEntry
        mb={24}
      />

      <Input
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="********"
        secureTextEntry
        mb={120}
      />

      <Button>Cadastrar</Button>
    </Box>
  )
}
