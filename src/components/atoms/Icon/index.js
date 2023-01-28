import PropTypes from 'prop-types'
import IconLib from 'react-native-vector-icons/MaterialCommunityIcons'
import { Box } from '~/components/atoms'
import { theme } from '~/styles/theme'
import { paddingPropsTypes, marginPropsTypes } from '~/styles/styled-system'

export const Icon = ({ name, size, color, ...props }) => {
  return (
    <Box {...props}>
      <IconLib
        size={theme.px(size)}
        name={name}
        color={theme[color || 'primary']}
      />
    </Box>
  )
}

Icon.Touchable = ({ name, size, color, ...props }) => {
  return (
    <Box.Touchable {...props}>
      <IconLib
        size={theme.px(size)}
        name={name}
        color={theme[color || 'primary']}
      />
    </Box.Touchable>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func,
  ...paddingPropsTypes,
  ...marginPropsTypes,
}
