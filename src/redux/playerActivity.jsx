// playerDataSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  playerData: {
    player1Name: "",
    player2Name: "",
    player1Score: 0,
    player2Score: 0,
  },
};

const playerDataSlice = createSlice({
  name: "playerData",
  initialState: initialSlice,
  reducers: {
    setPlayerData: (state, action) => {
      state.playerData = action.payload;
    },
    updatePlayerScore: (state, action) => {
      const { playerId, newScore } = action.payload;
      state.playerData = {
        ...state.playerData,
        [playerId + "Score"]: newScore,
      };
    },
    resetPlayerData: (state) => {
      state.playerData = initialSlice.playerData;
    },
  },
});

export const { setPlayerData, updatePlayerScore, resetPlayerData } =
  playerDataSlice.actions;
export default playerDataSlice.reducer;
