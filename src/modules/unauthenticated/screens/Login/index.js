import { Box, Button, Image, Input, Text } from '~/components/atoms'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import logoSrc from '~/assets/img/logo_full.png'

export const LoginScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('E-mail inválido.')
      .required('E-mail é obrigatório.'),
    password: Yup.string().required('Senha é obrigatório.'),
  })

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async ({ email, password }) => {
      console.log({ email, password })
    },
  })

  return (
    <Box
      bg="white"
      p={24}
      w="100%"
      height="100%"
      flexDir="column"
      align="flex-start"
      justify="flex-start">
      <Image
        resizeMode="contain"
        source={logoSrc}
        mt={48}
        h={48}
        w={160}
        mb={120}
      />
      <Text.ScreenTitle mb={16}>Login</Text.ScreenTitle>
      <Input
        value={values.email}
        onChangeText={t => setFieldValue('email', t)}
        placeholder="email@example.com"
        mb={16}
        error={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        value={values.password}
        onChangeText={t => setFieldValue('password', t)}
        placeholder="********"
        secureTextEntry
        mb={16}
        error={errors.password}
      />
      <Box mb={36} w={352} align="flex-end">
        <Box.Touchable>
          <Text.TinyText color="grey">Esqueceu a senha?</Text.TinyText>
        </Box.Touchable>
      </Box>
      <Button onPress={handleSubmit}>Login</Button>
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
