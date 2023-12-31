import { describe, expect, it } from "@jest/globals"

import reducer, { gameStart, initialState, win, lose } from "./gameSlice"
import { makeGlyph } from "data/glyph.ts"
import { makeCard } from "data/card"

describe("game reducer", () => {
  it("should start in initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual(initialState)
  })

  it("should handle gameStart", () => {
    const playerCard = makeCard([
      makeGlyph("feac5ea6-5b39-4f7d-831f-48f61c1a6ca1"),
      makeGlyph("77eb3cc3-5ed7-454a-a889-171f680b32b5"),
      makeGlyph("57e7ed0b-174a-43c1-a6a1-a489d34b0d6f"),
      makeGlyph("7d69bed1-9e60-4a46-b9cd-5563e45f21ec"),
      makeGlyph("36e18ca3-cb1b-45c5-947a-b2fdb06b8085"),
      makeGlyph("98c2e2ce-42e2-44d4-8aeb-b76bb7089e17"),
    ])
    const commonCard = makeCard([
      makeGlyph("7c2f5fac-c903-4f02-a70c-a643e18fa8d2"),
      makeGlyph("cad6b2a5-d603-46e9-85a6-714f01f65047"),
      makeGlyph("38e9384b-0cf2-47b1-bad6-55fed9edb7a9"),
      makeGlyph("0a5dc9ff-d291-4be8-8ebb-b9ef9186cd60"),
      makeGlyph("d641c190-5f10-4b08-a931-61d742e49fd6"),
      makeGlyph("23cb3b4f-7884-4deb-96d1-d88b83f37823"),
    ])

    const actual = reducer(
      initialState,
      gameStart({
        playerCard,
        commonCard,
      }),
    )

    expect(actual).toEqual({
      score: 0,
      commonCard,
      playerCard,
    })
  })
  it("should handle win", () => {
    const newScore = 1

    const commonCard = makeCard([
      makeGlyph("7c2f5fac-c903-4f02-a70c-a643e18fa8d2"),
      makeGlyph("cad6b2a5-d603-46e9-85a6-714f01f65047"),
      makeGlyph("38e9384b-0cf2-47b1-bad6-55fed9edb7a9"),
      makeGlyph("0a5dc9ff-d291-4be8-8ebb-b9ef9186cd60"),
      makeGlyph("d641c190-5f10-4b08-a931-61d742e49fd6"),
      makeGlyph("23cb3b4f-7884-4deb-96d1-d88b83f37823"),
    ])

    const actual = reducer(
      initialState,
      win({
        newScore: newScore,
        commonCard: commonCard,
      }),
    )

    expect(actual).toEqual({
      score: 1,
      commonCard,
      playerCard: initialState.playerCard,
    })
  })
  it("should handle lose", () => {
    const newScore = 0

    const commonCard = makeCard([
      makeGlyph("7c2f5fac-c903-4f02-a70c-a643e18fa8d2"),
      makeGlyph("cad6b2a5-d603-46e9-85a6-714f01f65047"),
      makeGlyph("38e9384b-0cf2-47b1-bad6-55fed9edb7a9"),
      makeGlyph("0a5dc9ff-d291-4be8-8ebb-b9ef9186cd60"),
      makeGlyph("d641c190-5f10-4b08-a931-61d742e49fd6"),
      makeGlyph("23cb3b4f-7884-4deb-96d1-d88b83f37823"),
    ])

    const actual = reducer(
      initialState,
      lose({
        newScore: newScore,
        commonCard: commonCard,
      }),
    )

    expect(actual).toEqual({
      score: 0,
      commonCard,
      playerCard: initialState.playerCard,
    })
  })
})

// Jag har sagt till prettier att köras för alla dessa filer. Det är några jag lagt till manuellt.
// {**/*,*}.{js,ts,jsx,tsx,mjs,vue,astro,cjs,json}
