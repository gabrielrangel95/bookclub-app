import { Box, Icon } from '~/components/atoms'

export const BottomBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  const routeIcon = {
    Home: 'book-outline',
    Search: 'search',
    Favorites: 'bookmark-outline',
    Profile: 'person-circle-outline',
  }

  return (
    <Box
      btw={1}
      borderColor="lightGrey"
      w="100%"
      h={84}
      ph={24}
      pt={16}
      flexDir="row"
      align="flex-start"
      justify="space-between">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const icon = routeIcon[route.name]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <Box.Touchable
            key={`bottom_bar_${index}`}
            onPress={onPress}
            flex={1}
            align="center"
            justify="center">
            <Icon
              name={icon}
              size={24}
              color={isFocused ? 'black' : 'lightGrey'}
            />

            {isFocused && <Box mt={4} height={3} w={24} bg="primary" />}
          </Box.Touchable>
        )
      })}
    </Box>
  )
}
