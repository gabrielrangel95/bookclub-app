import styled from 'styled-components/native'
import {
  sizeProps,
  colorProps,
  marginProps,
  paddingProps,
  borderProps,
  flexProps,
} from '~/styles/styled-system'

export const BoxContainer = styled.View`
  ${flexProps}
  ${sizeProps}
  ${colorProps}
  ${marginProps}
  ${paddingProps}
  ${borderProps}
`

export const BoxScreenContainer = styled.SafeAreaView`
  ${flexProps}
  ${sizeProps}
  ${colorProps}
  ${marginProps}
  ${paddingProps}
  ${borderProps}
`
