import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  main: "normal",
  monster: "crab",
  image: 0,
  blood: false,
  black: false,
  battle: false,
  battleType: "human",
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setMainState: (state, action) => {
      state.main = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setBloodState: (state) => {
      state.blood = !state.blood;
    },
    setBlackState: (state, action) => {
      state.black = action.payload;
    },
    setBattleState: (state) => {
      state.battle = !state.battle;
    },
    setMonster: (state, action) => {
      state.monster = action.payload;
    },
    setBattleType: (state, action) => {
      state.battleType = action.payload;
    },
  },
});

export const {
  setMainState,
  setBloodState,
  setImage,
  setBlackState,
  setBattleState,
  setMonster,
  setBattleType,
} = stateSlice.actions;
export default stateSlice.reducer;
