import { Box, Text, Logo } from '~/components'

export const HomeScreen = () => {
  return (
    <Box
      bg="background"
      pt={24}
      flex={1}
      align="flex-start"
      justify="flex-start">
      <Box pl={24}>
        <Logo small />
        <Text.SectionTitle mt={24}>Destaques</Text.SectionTitle>
      </Box>
    </Box>
  )
}
