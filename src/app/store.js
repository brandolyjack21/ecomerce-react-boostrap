import { configureStore } from '@reduxjs/toolkit'
import addCar from '../features/addCar'

export default configureStore({
  reducer: {
    car:addCar
  },
})