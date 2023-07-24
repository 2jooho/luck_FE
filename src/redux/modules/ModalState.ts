import { createSlice } from '@reduxjs/toolkit';
import { UserDataForm } from '../../types/user';

const initialState: any | null = null;

const ModallStateSlicer = createSlice({
    name: 'modallState',
    initialState,
    reducers: {
        setModallState: (state, action) => {
            // const { payload } = actions;
            // return payload || null;
            state.isOpen = action.payload
        },
        removeModallState: () => null,
    },
});

export default ModallStateSlicer.reducer;
export const { setModallState, removeModallState } = ModallStateSlicer.actions;