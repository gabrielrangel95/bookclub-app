import { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Box } from '../Box'
import { Text } from '../Text'
import { TextInput } from './styles'
import { paddingPropsTypes, marginPropsTypes } from '~/styles/styled-system'
import { theme } from '~/styles/theme'

export const Input = ({
  onChangeText,
  secureTextEntry,
  value,
  placeholder,
  error,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false)
  const [secureText, setSecureText] = useState(secureTextEntry)
  return (
    <Box {...props}>
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
        p={8}>
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
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect || true}
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
      {error && (
        <Text.TinyText mt={4} color="red">
          {error}
        </Text.TinyText>
      )}
    </Box>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  error: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  ...paddingPropsTypes,
  ...marginPropsTypes,
}
