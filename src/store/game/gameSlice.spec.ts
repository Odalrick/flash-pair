import { describe, expect, it } from "@jest/globals"
import * as Card from "data/card"

import reducer from "./gameSlice"

describe("game reducer", () => {
  it("should start in initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      score: 0,
      commonCard: Card.blank,
      playerCard: Card.blank,
    })
  })
})
