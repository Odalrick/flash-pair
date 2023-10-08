import { Glyph } from "data/glyph"
export const PLACEHOLDER = "Placeholder"
export const CARD = "Card"

export type Card =
  | { kind: typeof PLACEHOLDER }
  | { kind: typeof CARD; glyphs: Glyph[] }

export const blank: Card = { kind: PLACEHOLDER }

export const makeCard: (glyphs: Glyph[]) => Card = (glyphs) => {
  return { kind: CARD, glyphs }
}
