import { createSlice } from '@reduxjs/toolkit'

export const addCar = createSlice({
    name : 'shopping-cart',
    initialState: {
        value:[]
    },
    reducers:{
        addToCar:(state, action) => {
            console.log(state.value.length);
            if (state.value.length === 0) {
                state.value = [...state.value, action.payload]
            }else{
               const exist = state.value.some(product => product.id === action.payload.id)
               if (!exist) {
                   state.value = [ ...state.value, action.payload ]
               }
            }
            
          
        },
        removeToCar:(state, action) => {
            console.log("se esta ejecutando este codgo");
            state.value = state.value.filter((product) => product.id !== action.payload )
             console.log(state.value, "state.value lol");
        }
    }
})

export const { addToCar, removeToCar } = addCar.actions

export default addCar.reducer