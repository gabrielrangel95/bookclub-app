import PropTypes from 'prop-types'
import {
  sizePropsTypes,
  paddingPropsTypes,
  marginPropsTypes,
  borderPropsTypes,
} from '~/styles/styled-system'
import { ImageContainer } from './styles'

export const Image = ({ ...props }) => {
  return <ImageContainer {...props} />
}

Image.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]),
  resizeMode: PropTypes.oneOf([
    'cover',
    'contain',
    'stretch',
    'repeat',
    'center',
  ]),
  ...sizePropsTypes,
  ...paddingPropsTypes,
  ...marginPropsTypes,
  ...borderPropsTypes,
}
