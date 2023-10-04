export const PLACEHOLDER = "Placeholder"
export const CARD = "Card"

export type Card =
  | { kind: typeof PLACEHOLDER }
  | { kind: typeof CARD; symbols: string[] }

export const blank: Card = { kind: PLACEHOLDER }

// function describeCard(card: Card): string {
//   switch (card.kind) {
//     case PLACEHOLDER:
//       return "It's a placeholder card, waiting for a real card to be dealt."
//     case CARD:
//       return `Card values: ${card.values.join(", ")}`
//   }
// }
