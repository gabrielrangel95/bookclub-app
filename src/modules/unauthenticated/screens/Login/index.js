import { Box, Button, Image, Input, Text } from '~/components/atoms'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import logoSrc from '~/assets/img/logo_full.png'
import { useMutation } from '@tanstack/react-query'
import { LOGIN } from '~/services/api/requests'
import { showMessage } from 'react-native-flash-message'
import { useGlobal } from '~/services/context'

export const LoginScreen = ({ navigation }) => {
  const { dispatch } = useGlobal()

  const mutation = useMutation(data => LOGIN(data), {
    onSuccess: ({ data }) => {
      dispatch({
        type: 'setState',
        data: {
          user: data?.user,
          token: data?.token,
          router: 'authenticated',
        },
      })
      showMessage({
        message: 'Autenticado com sucesso!',
        type: 'success',
      })
    },
    onError: ({ response }) => {
      const errorMessage = response?.data?.error || 'Falha ao realizar o login.'
      showMessage({
        message: errorMessage,
        type: 'danger',
      })
    },
  })

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
    onSubmit: ({ email, password }) => {
      mutation.mutate({ email, password })
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
        autoCorrect={false}
      />
      <Box mb={36} w={352} align="flex-end">
        <Box.Touchable onPress={() => navigation.navigate('ForgotPassword')}>
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
