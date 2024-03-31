import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name:null,
    state:null,
    district:null,
    pincode:null,
    number:null,
    gender:null,
    dob:null
}

const mySlice = createSlice({
    name:'authReducer',
    initialState,
    reducers:{
        updateLocation:(state,action)=>{
            state.state = action.payload.state
            state.district = action.payload.district
            state.pincode = action.payload.pincode
        },
    },
});
export const {updateUserInfo} = mySlice.actions;
export default mySlice.reducer;