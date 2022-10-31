import { Box, Text } from '~/components'
import { useGlobal } from '~/services/context'
export const HomeScreen = () => {
  const { state } = useGlobal()

  return (
    <Box>
      <Text>HomeScreen</Text>
    </Box>
  )
}
