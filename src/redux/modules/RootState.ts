import { createSlice } from '@reduxjs/toolkit';
import { UserDataForm } from '../../types/user';

const initialState: any | null = null;

const RootStateSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setRootData: (state, action) => {
            // const { payload } = actions;
            // return payload || null;
            state.OTP = action.payload
        },
        removeRootData: () => null,
    },
});

export default RootStateSlicer.reducer;
export const { setRootData, removeRootData } = RootStateSlicer.actions;