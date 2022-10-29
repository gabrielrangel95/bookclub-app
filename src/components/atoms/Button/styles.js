import styled from 'styled-components/native'
import {
  sizeProps,
  colorProps,
  marginProps,
  paddingProps,
  borderProps,
  flexProps,
} from '~/styles/styled-system'

export const ButtonContainer = styled.TouchableOpacity`
  ${flexProps}
  ${sizeProps}
  ${colorProps}
  ${marginProps}
  ${paddingProps}
  ${borderProps}
`
