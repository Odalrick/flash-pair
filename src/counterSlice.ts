import { createSlice, Slice } from "@reduxjs/toolkit"

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice: Slice<
  CounterState,
  { increment: (state: CounterState) => void }
> = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.value += 1
    },
  },
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer
