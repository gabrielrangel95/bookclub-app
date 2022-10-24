import PropTypes from 'prop-types'
import { TextDefault } from './styles'
import {
  sizePropsTypes,
  colorPropsTypes,
  marginPropsTypes,
  paddingPropsTypes,
} from '~/styles/styled-system'

export const Text = ({ children }) => {
  return <TextDefault>{children}</TextDefault>
}

Text.SectionTitle = ({ children, ...props }) => (
  <TextDefault color="black" {...props} fontSize={20} fontFamily="LatoBlack">
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
  ...sizePropsTypes,
  ...colorPropsTypes,
  ...marginPropsTypes,
  ...paddingPropsTypes,
}
