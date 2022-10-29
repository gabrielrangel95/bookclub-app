import PropTypes from 'prop-types'
import { ButtonContainer } from './styles'
import { Text } from '../Text'
import {
  sizePropsTypes,
  colorPropsTypes,
  paddingPropsTypes,
  marginPropsTypes,
  borderPropsTypes,
} from '~/styles/styled-system'

export const Button = ({ children, ...props }) => (
  <ButtonContainer
    align="center"
    justify="center"
    w={356}
    h={56}
    br={16}
    bg="primary"
    {...props}>
    <Text fontSize={16} fontFamily="bold">
      {children}
    </Text>
  </ButtonContainer>
)

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.func,
  ]),
  ...sizePropsTypes,
  ...colorPropsTypes,
  ...paddingPropsTypes,
  ...marginPropsTypes,
  ...borderPropsTypes,
}
