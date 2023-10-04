export type GlyphGuid = string & { readonly __brand: "GlyphGuid" }

interface Glyph {
  guid: GlyphGuid
}

export const srcFromGlyph = (glyph: Glyph): string => {
  // TODO: base on guid; once we have some glyphs
  return "/glyphs/291fb3dc-0d8b-4183-82d4-1fdfb592f673.png"
}
