import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type PasswordUpdateState = {
    isUpdated: boolean;
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string;
};

const initialState: PasswordUpdateState = {
    isUpdated: false,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
};

export const updatePasswordSpec = createAsyncThunk(
    "passwordUpdate/updatePassword",
    async (
        payload: { newPassword: string; confirmNewPassword: string },
        thunkAPI
    ) => {
        try {
            const response = await axios.post(
                "https://digifundo-server.herokuapp.com/update-password",
                payload
            );
            if (response.status === 200) {
                return response.data;
            } else {
                return thunkAPI.rejectWithValue({
                    isError: true,
                    errorMessage: "Invalid credentials",
                });
            }
        } catch (error) {
            console.log("Error: ", error.response.data);
            return thunkAPI.rejectWithValue({
                isError: true,
                errorMessage: error.response.data,
            });
        }
    }
);

export const PasswordUpdateSlice = createSlice({
    name: "passwordUpdate",
    initialState,
    reducers: {
        clearState: (state) => {
            state.isUpdated = false;
            state.isFetching = false;
            state.isSuccess = false;
            state.isError = false;
            state.errorMessage = "";

            return state;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                updatePasswordSpec.pending,
                (state, action: PayloadAction<any>) => {
                    state.isFetching = true;
                    state.isSuccess = false;
                    state.isError = false;
                    state.errorMessage = "";
                }
            )
            .addCase(
                updatePasswordSpec.rejected,
                (state, action: PayloadAction<any>) => {
                    state.isFetching = false;
                    state.isSuccess = false;
                    state.isError = true;
                    state.errorMessage = action.payload.errorMessage;
                }
            )
            .addCase(
                updatePasswordSpec.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.isFetching = false;
                    state.isSuccess = true;
                    state.isError = false;
                    state.errorMessage = "";
                }
            );
    },
});

export const { clearState } = PasswordUpdateSlice.actions;
export const passwordSelector = (state: any) => state.passwordUpdate;
