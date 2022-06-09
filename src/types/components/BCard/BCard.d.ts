// Props
export interface Props {
  align?: Alignment
  bgVariant?: ColorVariant
  bodyBgVariant?: ColorVariant
  bodyClass?: Array | Record<string, unknown> | string // TODO record<string, unknown> can be replaced as a known object
  bodyTag?: string // Above todo, also Array can be explicit
  bodyTextVariant?: ColorVariant
  borderVariant?: ColorVariant
  footer?: string
  footerBgVariant?: ColorVariant
  footerBorderVariant?: ColorVariant
  footerClass?: Array | Record<string, unknown> | string
  footerHtml?: string
  footerTag?: string
  footerTextVariant?: ColorVariant
  header?: string
  headerBgVariant?: ColorVariant
  headerBorderVariant?: ColorVariant
  headerClass?: Array | Record<string, unknown> | string
  headerHtml?: string
  headerTag?: string
  headerTextVariant?: ColorVariant
  imgAlt?: string
  imgBottom?: boolean
  imgEnd?: boolean
  imgHeight?: string | number
  imgLeft?: boolean
  imgRight?: boolean
  imgSrc?: string
  imgStart?: boolean
  imgTop?: boolean
  imgWidth?: string | number
  noBody?: boolean
  overlay?: boolean
  subTitle?: string
  subTitleTag?: string
  subTitleTextVariant?: ColorVariant
  tag?: string
  textVariant?: ColorVariant
  title?: string
  titleTag?: string
}
// Emits

// Other
