import React from "react"
import { memo } from "react"
import { TetradInput } from "../Fold/TetradInput"

export const leftTopIcon = `<svg viewBox="0 0 1024 1024" height="16" width="16" fill="currentColor" focusable="false" aria-hidden="true"><path d="M152,872 L152,952 L72,952 L72,872 L152,872 Z M312,872 L312,952 L232,952 L232,872 L312,872 Z M472,872 L472,952 L392,952 L392,872 L472,872 Z M632,872 L632,952 L552,952 L552,872 L632,872 Z M952,872 L952,952 L872,952 L872,872 L952,872 Z M792,872 L792,952 L712,952 L712,872 L792,872 Z M152,712 L152,792 L72,792 L72,712 L152,712 Z M952,712 L952,792 L872,792 L872,712 L952,712 Z M152,552 L152,632 L72,632 L72,552 L152,552 Z M832,72 C898.3,72 952,125.7 952,192 L952,192 L952,632 L872,632 L872,232 C872,188.2 836.9,152.7 793.3,152 L793.3,152 L392,152 L392,72 Z M152,392 L152,472 L72,472 L72,392 L152,392 Z M152,232 L152,312 L72,312 L72,232 L152,232 Z M152,72 L152,152 L72,152 L72,72 L152,72 Z M312,72 L312,152 L232,152 L232,72 L312,72 Z" transform="translate(512.000000, 512.000000) scale(-1, 1) translate(-512.000000, -512.000000) "></path></svg>`

export const rightTopIcon = `<svg viewBox="0 0 1024 1024" height="16" width="16" fill="currentColor" focusable="false" aria-hidden="true"><path d="M152,872 L152,952 L72,952 L72,872 L152,872 Z M312,872 L312,952 L232,952 L232,872 L312,872 Z M472,872 L472,952 L392,952 L392,872 L472,872 Z M632,872 L632,952 L552,952 L552,872 L632,872 Z M952,872 L952,952 L872,952 L872,872 L952,872 Z M792,872 L792,952 L712,952 L712,872 L792,872 Z M152,712 L152,792 L72,792 L72,712 L152,712 Z M952,712 L952,792 L872,792 L872,712 L952,712 Z M152,552 L152,632 L72,632 L72,552 L152,552 Z M832,72 C898.3,72 952,125.7 952,192 L952,192 L952,632 L872,632 L872,232 C872,188.2 836.9,152.7 793.3,152 L793.3,152 L392,152 L392,72 Z M152,392 L152,472 L72,472 L72,392 L152,392 Z M152,232 L152,312 L72,312 L72,232 L152,232 Z M152,72 L152,152 L72,152 L72,72 L152,72 Z M312,72 L312,152 L232,152 L232,72 L312,72 Z"></path></svg>
`

export const rightBottomIcon = `<svg viewBox="0 0 1024 1024" height="16" width="16" fill="currentColor" focusable="false" aria-hidden="true"><path d="M152,872 L152,952 L72,952 L72,872 L152,872 Z M312,872 L312,952 L232,952 L232,872 L312,872 Z M472,872 L472,952 L392,952 L392,872 L472,872 Z M632,872 L632,952 L552,952 L552,872 L632,872 Z M952,872 L952,952 L872,952 L872,872 L952,872 Z M792,872 L792,952 L712,952 L712,872 L792,872 Z M152,712 L152,792 L72,792 L72,712 L152,712 Z M952,712 L952,792 L872,792 L872,712 L952,712 Z M152,552 L152,632 L72,632 L72,552 L152,552 Z M832,72 C898.3,72 952,125.7 952,192 L952,192 L952,632 L872,632 L872,232 C872,188.2 836.9,152.7 793.3,152 L793.3,152 L392,152 L392,72 Z M152,392 L152,472 L72,472 L72,392 L152,392 Z M152,232 L152,312 L72,312 L72,232 L152,232 Z M152,72 L152,152 L72,152 L72,72 L152,72 Z M312,72 L312,152 L232,152 L232,72 L312,72 Z" transform="translate(512.000000, 512.000000) scale(1, -1) translate(-512.000000, -512.000000) "></path></svg>
`

export const leftBottomIcon = `<svg viewBox="0 0 1024 1024" height="16" width="16" fill="currentColor" focusable="false" aria-hidden="true"><path d="M152,872 L152,952 L72,952 L72,872 L152,872 Z M312,872 L312,952 L232,952 L232,872 L312,872 Z M472,872 L472,952 L392,952 L392,872 L472,872 Z M632,872 L632,952 L552,952 L552,872 L632,872 Z M952,872 L952,952 L872,952 L872,872 L952,872 Z M792,872 L792,952 L712,952 L712,872 L792,872 Z M152,712 L152,792 L72,792 L72,712 L152,712 Z M952,712 L952,792 L872,792 L872,712 L952,712 Z M152,552 L152,632 L72,632 L72,552 L152,552 Z M832,72 C898.3,72 952,125.7 952,192 L952,192 L952,632 L872,632 L872,232 C872,188.2 836.9,152.7 793.3,152 L793.3,152 L392,152 L392,72 Z M152,392 L152,472 L72,472 L72,392 L152,392 Z M152,232 L152,312 L72,312 L72,232 L152,232 Z M152,72 L152,152 L72,152 L72,72 L152,72 Z M312,72 L312,152 L232,152 L232,72 L312,72 Z" transform="translate(512.000000, 512.000000) scale(-1, -1) translate(-512.000000, -512.000000) "></path></svg>`

export interface IRadius {
  borderTopLeftRadius?: string,
  borderTopRightRadius?: string,
  borderBottomLeftRadius?: string,
  borderBottomRightRadius?: string,
}

export const BorderRadiusSetter = memo((props: {
  title?: string,
  leftTopTitle?: string,
  rightTopTitle?: string,
  leftBottomTitle?: string,
  rightBottomTitle?: string,
  value?: IRadius,
  onChange?: (value?: IRadius) => void
}) => {
  const { title, leftTopTitle, rightTopTitle, leftBottomTitle, rightBottomTitle, ...other } = props;

  return (
    <TetradInput
      keys={[
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ]}
      title={title}
      title1={leftTopTitle}
      title2={rightTopTitle}
      title3={leftBottomTitle}
      title4={rightBottomTitle}
      icon1={leftTopIcon}
      icon2={rightTopIcon}
      icon3={leftBottomIcon}
      icon4={rightBottomIcon}
      {...other}
    />
  )
})
