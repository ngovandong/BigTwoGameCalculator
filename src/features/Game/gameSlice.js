const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  play: [],
  numOfGames: 0,
  numOfMembers: 0,
  members: [],
  done: true,
};
const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    addGame: (state, action) => {
      state.numOfGames = action.payload.numOfGames;
      state.numOfMembers = action.payload.numOfMembers;
    },
    addMembers: (state, action) => {
      state.members = action.payload;
      return state;
    },
    changePlay: (state, action) => {
      state.play = action.payload;
      return state;
    },
    setDone: (state, action) => {
      state.done = action.payload;
      return state;
    },
    reset: (state, action) => {
      state = initialState;
      return state;
    },
  },
});

export default game.reducer;
export const { addMembers, addGame, changePlay, setDone,reset } = game.actions;
