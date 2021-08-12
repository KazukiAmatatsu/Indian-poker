import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation
} from 'styled-components'

export const sp = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (max-width: 599px) {
    ${css(first, ...interpolations)}
  }
`

export const tab = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: 600px) and (max-width: 1024px) {
    ${css(first, ...interpolations)}
  }
`
export const pc = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: 1025px) {
    ${css(first, ...interpolations)}
  }
`
