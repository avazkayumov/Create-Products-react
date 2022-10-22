import { configureStore } from '@reduxjs/toolkit'
import appSlice  from './reducer'

export default configureStore({
  reducer: appSlice,
})