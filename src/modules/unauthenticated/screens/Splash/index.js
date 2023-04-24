import { useEffect } from 'react'
import { Box, Logo, Loader } from '~/components'
import { getData } from '~/services/storage'
import { USER_STORAGE_KEY } from '~/services/storage/constants'
import { useGlobal } from '~/services/context'
import { api } from '~/services/api/config'

export const SplashScreen = () => {
  const { dispatch } = useGlobal()

  const retrieveUser = async () => {
    const data = await getData(USER_STORAGE_KEY)

    if (data) {
      api.interceptors.request.use(config => {
        config.headers.authentication = `bearer ${data?.token}`
        return config
      })

      dispatch({
        type: 'setState',
        data: {
          user: data?.user,
          token: data?.token,
          router: 'authenticated',
        },
      })
      return
    }
    dispatch({
      type: 'setState',
      data: {
        router: 'unAuth',
      },
    })
  }

  useEffect(() => {
    retrieveUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box flex={1} align="center" justify="center">
      <Logo />
      <Loader />
    </Box>
  )
}
