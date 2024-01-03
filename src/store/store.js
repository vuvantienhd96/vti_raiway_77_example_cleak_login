// create store save state
import { configureStore as Store } from '@reduxjs/toolkit';
import counterSlice from '../reducer/counterReducer';
import titleReducer from '../reducer/titleReducer';
import RecallApiLoading from '../reducer/callApiReducer';

export default Store({
  reducer: {
    counterSlice,
    titleReducer,
    RecallApiLoading,
  },
});
