export type GlyphGuid = string & { readonly __brand: "GlyphGuid" }

export interface Glyph {
  guid: GlyphGuid
}

export const srcFromGlyph = (_glyph: Glyph): string => {
  // TODO: base on guid; once we have some glyphs
  return "/glyphs/291fb3dc-0d8b-4183-82d4-1fdfb592f673.png"
}

export const makeGlyph = (guid: string): Glyph => {
  return { guid: guid as GlyphGuid }
}
