import { Box, Icon } from '~/components/atoms'

export const BottomBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  const routeIcon = {
    Home: 'book-open-page-variant-outline',
    Search: 'search-web',
    Favorites: 'bookmark-outline',
    Profile: 'account-circle-outline',
  }

  return (
    <Box
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

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <Box.Touchable
            // accessibilityRole="button"
            // accessibilityState={isFocused ? { selected: true } : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            onPress={onPress}
            // onLongPress={onLongPress}
            flex={1}
            align="center"
            justify="center">
            <Icon
              name={icon}
              size={24}
              color={isFocused ? 'primary' : 'grey'}
            />
          </Box.Touchable>
        )
      })}
    </Box>
  )
}
