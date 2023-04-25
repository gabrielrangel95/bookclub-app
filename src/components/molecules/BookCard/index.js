import { Box, Image, Text } from '~/components/atoms'

export const BookCard = ({ author, cover_url, id, name }) => {
  return (
    <Box h={220} mr={16} flexDir="column" align="center" justify="center">
      <Image
        br={12}
        h={180}
        w={120}
        source={{ uri: cover_url }}
        resizeMode="cover"
      />
      <Text.CardSmallTitle mt={12}>{name}</Text.CardSmallTitle>
      <Text mt={4} fontSize={10} color="grey">
        {author?.name}
      </Text>
    </Box>
  )
}
