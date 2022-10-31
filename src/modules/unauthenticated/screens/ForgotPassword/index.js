import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Input, Button, Text } from '~/components'
import { useMutation } from '@tanstack/react-query'
import { FORGOT_PASSWORD } from '~/services/api/requests'
import { showMessage } from 'react-native-flash-message'

export const ForgotPasswordScreen = ({ navigation }) => {
  const mutation = useMutation(data => FORGOT_PASSWORD(data), {
    onSuccess: ({ data }) => {
      showMessage({
        message: 'E-mail enviado com sucesso!',
        type: 'success',
      })
      navigation.navigate('ResetPassword', {
        email: values.email,
      })
    },
    onError: ({ response }) => {
      const errorMessage = response?.data?.error || 'Falha ao enviar e-mail.'
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
  })

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async finalValues => {
      mutation.mutate(finalValues)
    },
  })

  return (
    <Box align="center" bg="white" w="100%" h="100%">
      <Box p={24} align="flex-start" w="100%">
        <Text.ScreenTitle>Instruções</Text.ScreenTitle>
        <Text mt={8}>
          Digite abaixo seu e-mail que enviaremos um código de recuperação de
          senha:
        </Text>
      </Box>

      <Input
        value={values.email}
        onChangeText={t => setFieldValue('email', t)}
        error={errors.email}
        placeholder="email@example.com"
        mb={48}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Button onPress={handleSubmit}>Próximo</Button>
    </Box>
  )
}
