import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Input, Button } from '~/components'

export const RegisterScreen = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Nome é obrigatório')
      .min(3, 'Nome deve ter ao menos 3 caracters.'),
    email: Yup.string()
      .email('E-mail inválido.')
      .required('E-mail é obrigatório.'),
    password: Yup.string()
      .required('Senha é obrigatório.')
      .min(6, 'Senha deve conter ao menos 6 caracteres'),
    confirmPassword: Yup.string()
      .required('Confirmar senha é obrigatório.')
      .min(6, 'Confirmar senha deve conter ao menos 6 caracteres'),
  })

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async finalValues => {
      console.log({ finalValues })
    },
  })

  return (
    <Box align="center" bg="white" w="100%" h="100%">
      <Input
        value={values.name}
        onChangeText={t => setFieldValue('name', t)}
        error={errors.name}
        placeholder="Seu nome"
        mt={48}
        mb={24}
      />

      <Input
        value={values.email}
        onChangeText={t => setFieldValue('email', t)}
        error={errors.email}
        placeholder="email@example.com"
        mb={24}
        keyboardType="email-address"
        autoCapitalize="none"
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
        mb={120}
      />

      <Button onPress={handleSubmit}>Cadastrar</Button>
    </Box>
  )
}
