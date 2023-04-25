import { FlatList } from 'react-native'
import { BookCard } from '~/components/molecules'
import { px } from '~/styles/metrics'

export const BookList = ({ data }) => {
  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item?.id}
      renderItem={({ item }) => <BookCard {...item} />}
      contentContainerStyle={{
        paddingLeft: px(24),
      }}
    />
  )
}
