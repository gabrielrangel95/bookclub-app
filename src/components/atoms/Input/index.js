import { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Box } from '../Box'
import { TextInput } from './styles'
import { paddingPropsTypes, marginPropsTypes } from '~/styles/styled-system'
import { theme } from '~/styles/theme'

export const Input = ({
  onChangeText,
  secureTextEntry,
  value,
  placeholder,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false)
  const [secureText, setSecureText] = useState(secureTextEntry)
  return (
    <Box
      flexDir="row"
      h={56}
      w={352}
      br={12}
      align="center"
      justify="flex-start"
      borderColor={isFocus ? 'primary' : 'lightGrey'}
      bw={isFocus ? 1.5 : 1}
      borderStyle="solid"
      p={8}
      {...props}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureText}
        fontFamily="medium"
        fontSize={16}
        color="black"
        onFocus={() => setIsFocus(true)}
        onEndEditing={() => setIsFocus(false)}
      />
      {secureTextEntry && (
        <Box.Touchable
          position="absolute"
          right={24}
          onPress={() => setSecureText(!secureText)}>
          <Icon name="eye" color={theme.primary} size={theme.px(24)} />
        </Box.Touchable>
      )}
    </Box>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  ...paddingPropsTypes,
  ...marginPropsTypes,
}
