import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../app/store";
import checkEmpty from "../utils/checkEmpty";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "../utils/setAuthToken";

export type AuthState = {
    isAuthenticated: boolean;
    user: string;
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: any;
};

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
};

export const loginSpec = createAsyncThunk(
    "auth/login",
    async (payload: { email: string; password: string }, thunkAPI) => {
        try {
            const response = await axios.post(
                "https://digifundo-server.herokuapp.com/login",
                payload
            );
            if (response.status === 200) {
                const { token } = response.data;
                localStorage.setItem("jwtToken", token);
                // Set auth token to auth header
                setAuthToken(token);
                // Decode the access token to get user data
                const decodedToken = jwt_decode(token);
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

export const registerSpec = createAsyncThunk(
    "auth/register",
    async (
        payload: {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            role: string;
            username: string;
        },
        thunkAPI
    ) => {
        await axios
            .post("/api/auth/register", payload)
            .then((res) => {
                return {
                    ...res.data,
                    username: payload.username,
                    email: payload.email,
                };
            })
            .catch((error) => {
                console.log("Error: ", error.response.data);
                thunkAPI.rejectWithValue(error.response.data);
            });
    }
);

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearState: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.isFetching = false;
            state.isSuccess = false;
            state.isError = false;
            state.errorMessage = null;

            return state;
        },
        setCurrentUser: (state, action: PayloadAction<any>) => {
            console.log("ACTION", action.payload);
            state.isAuthenticated = true;
            state.user = action.payload.id;
            return state;
        },
        logOutUser: (state) => {
            if (typeof window !== "undefined") {
                localStorage.removeItem("jwtToken");
                setAuthToken("");
                state.isAuthenticated = false;
                state.user = "";
                return state;
            }
        },

        // setCurrentUser: (state, action: PayloadAction<string>) => {
        //     state.isAuthenticated = !checkEmpty(action.payload);
        //     state.user = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginSpec.pending, (state, action: PayloadAction<any>) => {
                state.isFetching = true;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(
                loginSpec.rejected,
                (state, action: PayloadAction<any>) => {
                    console.log("Pay", action.payload);
                    state.isFetching = false;
                    state.isSuccess = false;
                    state.isError = true;
                    state.errorMessage = action.payload.errorMessage;
                }
            )
            .addCase(
                loginSpec.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.user = action.payload;
                    state.isFetching = false;
                    state.isSuccess = true;
                    state.isError = false;
                    state.isAuthenticated = true;

                    return state;
                }
            )
            .addCase(
                registerSpec.rejected,
                (state, action: PayloadAction<any>) => {
                    state.isError = true;
                    state.errorMessage = action.payload.errorMessage;
                }
            )
            .addCase(
                registerSpec.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.isError = false;
                }
            );
    },
});

export const { clearState, setCurrentUser, logOutUser } = AuthSlice.actions;

export const userSelector = (state) => state.auth;

// export default AuthSlice.reducer;
