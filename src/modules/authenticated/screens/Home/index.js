import { Box, Text, Logo, BookList } from '~/components'
import { BOOKS_HIGHLIGHTED } from '~/services/api/requests'
import { useQuery } from '@tanstack/react-query'

export const HomeScreen = () => {
  const { data, isLoading, error } = useQuery(['booksHighlighted'], () =>
    BOOKS_HIGHLIGHTED(),
  )

  return (
    <Box
      bg="background"
      pt={24}
      flex={1}
      align="flex-start"
      justify="flex-start">
      <Box pl={24} pb={16}>
        <Logo small />
        <Text.SectionTitle mt={24}>Destaques</Text.SectionTitle>
      </Box>
      <BookList data={data?.data} />
    </Box>
  )
}
