import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type NoteState = {
    notes: any;
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string;
};

const initialState: NoteState = {
    notes: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
};

export const AddNotes = createAsyncThunk(
    "notes/addNotes",
    async (payload: { note: any }, thunkAPI) => {
        try {
            const response = await axios.post(
                `https://digifundo-server.herokuapp.com/notes/create/${"kindergarten1999"}`,
                payload
            );
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            } else {
                return thunkAPI.rejectWithValue({
                    isError: true,
                    errorMessage: "Invalid!",
                });
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({
                isError: true,
                errorMessage: error.response.data,
            });
        }
    }
);

export const GetNotes = createAsyncThunk(
    "notes/getNotes",
    async (payload: { documentID: string }, thunkAPI) => {
        try {
            const response = await axios.get(
                `https://digifundo-server.herokuapp.com/notes/${payload.documentID}`
            );
            if (response.status === 200) {
                return response.data.notes;
            } else {
                return thunkAPI.rejectWithValue({
                    isError: true,
                    errorMessage: "Invalid!",
                });
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({
                isError: true,
                errorMessage: error.response.data,
            });
        }
    }
);

export const NoteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        clearState: (state) => {
            state.notes = [];
            state.isFetching = false;
            state.isSuccess = false;
            state.isError = false;
            state.errorMessage = "";
            return state;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(AddNotes.pending, (state, action: PayloadAction<any>) => {
                state.isFetching = true;
                state.isSuccess = false;
                state.isError = false;
                state.errorMessage = "";
            })
            .addCase(
                AddNotes.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.notes.push(action.payload);
                    state.isFetching = false;
                    state.isSuccess = true;
                    state.isError = false;
                    state.errorMessage = "";
                }
            )
            .addCase(AddNotes.rejected, (state, action: PayloadAction<any>) => {
                state.isFetching = false;
                state.isSuccess = false;
                state.isError = true;
                state.errorMessage = action.payload.errors;
            })
            .addCase(GetNotes.rejected, (state, action: PayloadAction<any>) => {
                state.isFetching = false;
                state.isSuccess = false;
                state.isError = true;
                // state.errorMessage = action.payload.errors;
            })
            .addCase(
                GetNotes.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.notes = action.payload;
                    state.isFetching = false;
                    state.isSuccess = true;
                    state.isError = false;
                    state.errorMessage = "";
                }
            );
    },
});

export const { clearState } = NoteSlice.actions;
export const notesSelector = (state) => state.notes;
