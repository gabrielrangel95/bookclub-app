import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions

const figmaWidth = 390

export const px = valuePx => {
  const widthPercent = (valuePx / figmaWidth) * 100
  const screenWidth = Dimensions.get('window').width
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  )
}

export const metrics = {
  px,
  screenWidth: width,
  screenHeight: height,
}
