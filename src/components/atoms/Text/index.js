import PropTypes from 'prop-types'
import { TextDefault } from './styles'
import {
  sizePropsTypes,
  colorPropsTypes,
  marginPropsTypes,
  paddingPropsTypes,
  fontPropsTypes,
} from '~/styles/styled-system'

export const Text = ({ children, ...props }) => {
  return (
    <TextDefault font="regular" color="black" fontSize={16} {...props}>
      {children}
    </TextDefault>
  )
}

Text.SectionTitle = ({ children, ...props }) => (
  <TextDefault color="black" {...props} fontSize={20} fontFamily="LatoBlack">
    {children}
  </TextDefault>
)

Text.ScreenTitle = ({ children, ...props }) => (
  <TextDefault color="black" {...props} fontSize={18} fontFamily="LatoBlack">
    {children}
  </TextDefault>
)

Text.CardSmallTitle = ({ children, ...props }) => (
  <TextDefault color="black" {...props} fontSize={12} fontFamily="semibold">
    {children}
  </TextDefault>
)

Text.CardLargeTitle = ({ children, ...props }) => (
  <TextDefault color="black" {...props} fontSize={14} fontFamily="bold">
    {children}
  </TextDefault>
)

Text.ActionText = ({ children, ...props }) => (
  <TextDefault color="black" {...props} fontSize={16} fontFamily="semiBold">
    {children}
  </TextDefault>
)

Text.TinyText = ({ children, ...props }) => (
  <TextDefault color="black" {...props} fontSize={14} fontFamily="medium">
    {children}
  </TextDefault>
)

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.func,
  ]),
  ...fontPropsTypes,
  ...sizePropsTypes,
  ...colorPropsTypes,
  ...marginPropsTypes,
  ...paddingPropsTypes,
}
