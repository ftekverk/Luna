import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

/*
Resources
How to use persist - https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/
*/

interface UserState {
    user: string
}

const initialState = { user: "" } as UserState;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        update(state, action: PayloadAction<string>) {
            state.user = action.payload;
        },
    }
});

export const { update } = userSlice.actions
export default userSlice.reducer
