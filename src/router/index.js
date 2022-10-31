import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from '~/modules/authenticated/routes'
import { UnAuthRoutes } from '~/modules/unauthenticated/routes'
import { useGlobal } from '~/services/context'

export const Router = () => {
  const { state } = useGlobal()
  const { router } = state
  return (
    <NavigationContainer>
      {router === 'unAuth' && <UnAuthRoutes />}
      {router === 'authenticated' && <AuthRoutes />}
    </NavigationContainer>
  )
}
