import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { AuthSlice } from "../features/authReducer";
import { PasswordUpdateSlice } from "../features/passwordUpdateReducer";
import { NoteSlice } from "../features/notesReducer";

export const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        passwordUpdate: PasswordUpdateSlice.reducer,
        notes: NoteSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;
