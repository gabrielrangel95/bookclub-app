import { Image } from '../Image'
import logoSrc from '~/assets/img/logo_full.png'

export const Logo = ({ small }) => (
  <Image
    resizeMode="contain"
    source={logoSrc}
    mt={48}
    h={small ? 36 : 48}
    w={small ? 118 : 160}
    mb={small ? 0 : 120}
  />
)
