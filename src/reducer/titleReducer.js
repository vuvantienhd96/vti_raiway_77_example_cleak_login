import { createSlice } from '@reduxjs/toolkit';

export const titleReducer = createSlice({
  name: 'titleReducer',
  initialState: {
    title: 'redux numberone',
    description: 'lorem isum plus',
  },
  // caculator sate
  reducers: {
    changeState: (state) => {
      state.title = 'state modify';
    },
    changeTextWithIp: (state, action) => {
      //
      console.log(action, 'payload');
      state.title = action.payload;
    },
    changeTextWithMultiValue: (state, action) => {
      console.log(action, 'action');
      const { name, description } = action.payload;
      state.title = name;
      state.description = description;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeState, changeTextWithIp, changeTextWithMultiValue } =
  titleReducer.actions;

export default titleReducer.reducer;
