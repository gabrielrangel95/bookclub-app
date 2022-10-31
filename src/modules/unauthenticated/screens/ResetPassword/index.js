import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Input, Button, Text } from '~/components'
import { useMutation } from '@tanstack/react-query'
import { FORGOT_PASSWORD, RESET_PASSWORD } from '~/services/api/requests'
import { showMessage } from 'react-native-flash-message'

export const ResetPasswordScreen = ({ navigation, route }) => {
  const { email } = route.params

  const mutation = useMutation(data => RESET_PASSWORD(data), {
    onSuccess: ({ data }) => {
      showMessage({
        message: 'Senha atualizada com sucesso!',
        type: 'success',
      })
      navigation.navigate('Login')
    },
    onError: ({ response }) => {
      const errorMessage =
        response?.data?.error || 'Falha ao salvar nova senha.'
      showMessage({
        message: errorMessage,
        type: 'danger',
      })
    },
  })

  const mutationResend = useMutation(data => FORGOT_PASSWORD(data), {
    onSuccess: ({ data }) => {
      showMessage({
        message: 'E-mail reenviado com sucesso!',
        type: 'success',
      })
    },
    onError: ({ response }) => {
      const errorMessage =
        response?.data?.error || 'Falha ao reenviar nova senha.'
      showMessage({
        message: errorMessage,
        type: 'danger',
      })
    },
  })

  const validationSchema = Yup.object().shape({
    token: Yup.string()
      .length(6, 'Código deve conter 6 digitos')
      .required('Código é obrigatório'),
    password: Yup.string()
      .required('Senha é obrigatório.')
      .min(6, 'Senha deve conter ao menos 6 caracteres'),
    confirmPassword: Yup.string()
      .required('Confirmar senha é obrigatório.')
      .min(6, 'Confirmar senha deve conter ao menos 6 caracteres')
      .oneOf([Yup.ref('password')], 'Senhas não conferem.'),
  })

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async finalValues => {
      mutation.mutate({
        ...finalValues,
        email,
      })
    },
  })

  return (
    <Box align="center" bg="white" w="100%" h="100%">
      <Box p={24} align="flex-start" w="100%">
        <Text.ScreenTitle>Instruções</Text.ScreenTitle>
        <Text mt={8}>
          Digite o código enviado e uma nova senha nos campos abaixo:
        </Text>
      </Box>

      <Input
        value={values.token}
        onChangeText={t => setFieldValue('token', t)}
        error={errors.token}
        placeholder="Código"
        autoCorrect={false}
        mb={24}
      />

      <Input
        value={values.password}
        onChangeText={t => setFieldValue('password', t)}
        error={errors.password}
        placeholder="********"
        secureTextEntry
        mb={24}
      />

      <Input
        value={values.confirmPassword}
        onChangeText={t => setFieldValue('confirmPassword', t)}
        error={errors.confirmPassword}
        placeholder="********"
        secureTextEntry
        mb={60}
      />

      <Box p={24} w="100%" align="center">
        <Box.Touchable
          onPress={() =>
            mutationResend.mutate({
              email,
            })
          }
          flexDir="row">
          <Text fontSize={14} color="grey" font="semibold">
            Não recebeu o código?{' '}
          </Text>
          <Text fontSize={14} font="bold">
            Clique aqui para reenviar.
          </Text>
        </Box.Touchable>
      </Box>

      <Button onPress={handleSubmit}>Confirmar</Button>
    </Box>
  )
}
