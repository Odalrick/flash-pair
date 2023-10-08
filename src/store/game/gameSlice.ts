import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import * as Card from "data/card"

interface GameState {
  score: number
  commonCard: Card.Card
  playerCard: Card.Card
}

export const initialState: GameState = {
  score: 0,
  commonCard: Card.blank,
  playerCard: Card.blank,
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    gameStart: (
      state: GameState,
      _action: PayloadAction<{ playerCard: Card.Card; commonCard: Card.Card }>,
    ) => {
      state.commonCard = _action.payload.commonCard
      state.playerCard = _action.payload.playerCard
      return state
    },
    score: (
      state: GameState,
      _action: PayloadAction<{ newScore: number; commonCard: Card.Card }>,
    ) => {
      return state
    },
  },
})

export const { gameStart, score } = gameSlice.actions

export default gameSlice.reducer
