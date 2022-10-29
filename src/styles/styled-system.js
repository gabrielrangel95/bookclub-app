import PropTypes from 'prop-types'
import { colors } from './colors'
import { metrics } from './metrics'
import { fonts } from './fonts'
const { px, hp } = metrics

const getColor = key => {
  if (!key) {
    return null
  }

  if (key.includes('.')) {
    const splited = key.split('.')
    return colors[splited[0]][splited[1]] || '#fff'
  }

  return colors[key] || key
}

export const paddingProps = ({ p, ph, pv, pr, pl, pt, pb }) => `
    ${p ? `padding: ${px(p)}px;` : ''}
    ${ph ? `padding-horizontal: ${px(ph)}px;` : ''}
    ${pv ? `padding-vertical: ${px(pv)}px;` : ''}
    ${pr ? `padding-right: ${px(pr)}px;` : ''}
    ${pl ? `padding-left: ${px(pl)}px;` : ''}
    ${pt ? `padding-top: ${px(pt)}px;` : ''}
    ${pb ? `padding-bottom: ${px(pb)}px;` : ''}
  `

export const paddingPropsTypes = {
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ph: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pv: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export const marginProps = ({ m, mh, mv, mr, ml, mt, mb, mtHp }) => `
    ${m ? `margin: ${px(m)}px;` : ''}
    ${mh ? `margin-horizontal: ${px(mh)}px;` : ''}
    ${mv ? `margin-vertical: ${px(mv)}px;` : ''}
    ${mr ? `margin-right: ${px(mr)}px;` : ''}
    ${ml ? `margin-left: ${px(ml)}px;` : ''}
    ${mt ? `margin-top: ${px(mt)}px;` : ''}
    ${mtHp ? `margin-top: ${hp(mtHp)}px;` : ''}
    ${mb ? `margin-bottom: ${px(mb)}px;` : ''}
  `

export const marginPropsTypes = {
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mh: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mv: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export const sizeProps = ({
  h,
  maxH,
  minH,
  w,
  maxW,
  minW,
  fontSize,
  fluid,
  overflow,
  position,
  zIndex,
  top,
  bottom,
  left,
  right,
  fullWidth,
  baseWidth,
}) => `
  ${h ? `height: ${typeof h === 'number' ? `${px(h)}px` : h};` : ''}
  ${maxH ? `max-height: ${px(maxH)}px;` : ''}
  ${minH ? `min-height: ${px(minH)}px;` : ''}
  ${w ? `width: ${typeof w === 'number' ? `${px(w)}px` : w};` : ''}
  ${fullWidth ? `width: ${px(390)}px` : ''}
  ${baseWidth ? `width: ${px(335)}px` : ''}
  ${maxW ? `max-width: ${px(maxW)}px;` : ''}
  ${minW ? `min-width: ${px(minW)}px;` : ''}
  ${fontSize ? `font-size: ${px(fontSize)}px;` : ''}
  ${fluid ? (fluid === 'vertical' ? 'height: 100%;' : 'width: 100%;') : ''}
  ${overflow ? `overflow: ${overflow};` : ''}
  ${position ? `position: ${position};` : ''}
  ${zIndex ? `z-index: ${zIndex};` : ''}
  ${top ? `top: ${px(top)}px;` : ''}
  ${bottom ? `bottom: ${px(bottom)}px;` : ''}
  ${left ? `left: ${px(left)}px;` : ''}
  ${right ? `right: ${px(right)}px;` : ''}
  `

export const sizePropsTypes = {
  h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxH: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minH: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  w: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minW: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxW: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
  fluid: PropTypes.oneOfType([
    PropTypes.oneOf(['vertical', 'horizontal']),
    PropTypes.bool,
  ]),
  overflow: PropTypes.string,
  position: PropTypes.string,
  zIndex: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export const colorProps = ({ color, bg, opacity }) => `
  ${color ? `color: ${getColor(color)};` : ''}
  ${bg ? `background-color: ${getColor(bg)};` : ''}
  ${opacity ? `opacity: ${opacity};` : ''}
  `

export const colorPropsTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
}

export const flexProps = ({
  flex,
  flexDir,
  flexGrow,
  flexWrap,
  justifyContent,
  align,
  justify,
  alignItems,
  alignSelf,
}) => `
  ${flex ? `flex: ${flex};` : ''}
  ${flexDir ? `flex-direction: ${flexDir};` : ''}
  ${flexGrow ? `flex-grow: ${flexGrow};` : ''}
  ${flexWrap ? `flex-wrap: ${flexWrap};` : ''}
  ${justifyContent ? `justify-content: ${justifyContent};` : ''}
  ${justify ? `justify-content: ${justify};` : ''}
  ${alignItems ? `align-items: ${alignItems};` : ''}
  ${align ? `align-items: ${align};` : ''}
  ${alignSelf ? `align-self: ${alignSelf};` : ''}
`

export const flexPropsTypes = {
  flex: PropTypes.number,
  flexDir: PropTypes.oneOf(['row', 'column', 'column-reverse', 'row-reverse']),
  flexGrow: PropTypes.number,
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
  alignSelf: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
}

const fontFamilies = fonts

const handleFontFamily = props => {
  if (props?.font || props?.fontFamily) {
    return props?.font || props?.fontFamily
  }
  if (props?.defaultFont) {
    return props?.defaultFont
  }
  return 'regular'
}

export const fontProps = ({ underline, align, letterSpacing, ...props }) => `
  ${`font-family: ${fontFamilies[handleFontFamily(props)]};`}
  ${underline ? 'text-decoration-line: underline;' : ''}
  ${align ? `text-align: ${align};` : ''}
  ${letterSpacing ? `letter-spacing: ${px(letterSpacing, true) * 0.03}px;` : ''}
`
export const fontPropsTypes = {
  underline: PropTypes.bool,
  br: PropTypes.number,
  topLeftRadius: PropTypes.number,
  align: PropTypes.string,
  letterSpacing: PropTypes.number,
}

export const borderProps = ({
  bw,
  btw,
  bbw,
  blw,
  brw,
  br,
  topLeftRadius,
  topRightRadius,
  bottomRightRadius,
  bottomLeftRadius,
  borderColor,
  borderStyle,
}) => `
  ${bw ? `border-width: ${px(bw)}px;` : ''}
  ${btw ? `border-top-width: ${px(btw)}px;` : ''}
  ${bbw ? `border-bottom-width: ${px(bbw)}px;` : ''}
  ${blw ? `border-left-width: ${px(blw)}px;` : ''}
  ${brw ? `border-right-width: ${px(brw)}px;` : ''}
  ${br ? `border-radius: ${px(br)}px;` : ''}
  ${topLeftRadius ? `border-top-left-radius: ${px(topLeftRadius)}px;` : ''}
  ${topRightRadius ? `border-top-right-radius: ${px(topRightRadius)}px;` : ''}
  ${
    bottomRightRadius
      ? `border-bottom-right-radius: ${px(bottomRightRadius)}px;`
      : ''
  }
  ${
    bottomLeftRadius
      ? `border-bottom-left-radius: ${px(bottomLeftRadius)}px;`
      : ''
  }
  ${borderColor ? `border-color: ${getColor(borderColor)};` : ''}
  ${borderStyle ? `border-style: ${borderStyle};` : ''}
`

export const borderPropsTypes = {
  bw: PropTypes.number,
  btw: PropTypes.number,
  bbw: PropTypes.number,
  blw: PropTypes.number,
  brw: PropTypes.number,
  br: PropTypes.number,
  topLeftRadius: PropTypes.number,
  topRightRadius: PropTypes.number,
  bottomRightRadius: PropTypes.number,
  bottomLeftRadius: PropTypes.number,
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string,
}
