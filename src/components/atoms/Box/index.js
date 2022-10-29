import PropTypes from 'prop-types'
import {
  BoxContainer,
  BoxScreenContainer,
  BoxTouchableContainer,
} from './styles'
import {
  sizePropsTypes,
  colorPropsTypes,
  paddingPropsTypes,
  marginPropsTypes,
  borderPropsTypes,
  flexPropsTypes,
} from '~/styles/styled-system'

export const Box = ({ children, ...props }) => {
  return <BoxContainer {...props}>{children}</BoxContainer>
}

Box.Screen = ({ children, ...props }) => {
  return <BoxScreenContainer {...props}>{children}</BoxScreenContainer>
}

Box.Touchable = ({ children, ...props }) => {
  return <BoxTouchableContainer {...props}>{children}</BoxTouchableContainer>
}

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.func,
  ]),
  onPress: PropTypes.func,
  ...flexPropsTypes,
  ...sizePropsTypes,
  ...colorPropsTypes,
  ...paddingPropsTypes,
  ...marginPropsTypes,
  ...borderPropsTypes,
}
