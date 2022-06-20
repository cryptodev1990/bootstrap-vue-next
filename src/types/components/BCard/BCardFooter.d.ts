import type {ColorVariant, TextColorVariant} from 'src/types'
// Props
export interface Props {
  footer: string
  footerBgVariant?: ColorVariant
  footerBorderVariant?: ColorVariant
  footerClass?: Array<string> | Record<string, unknown> | string
  footerHtml?: string
  footerTag?: string
  footerTextVariant?: TextColorVariant
}
// Emits

// Other
