import { createSlice, createAsyncThunk, Dispatch, AnyAction } from "@reduxjs/toolkit";
import axios  from "../../config/axios";

interface UserState {
    isLoading: boolean;
    users: any;
    filteredUsers: any;
  }

const initialValue: UserState = {
    isLoading: false,
    users: [],
    filteredUsers: []
}

export const getUsers = createAsyncThunk<any>(
    "user/getAllTrainersInfo",
    async () => {
        const response = await axios.get("/");
        return response.data;
    }
);


export const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers:{
        filterUser : (state, action) =>{ 
            const countryNamesToFilter = action.payload;
            state.filteredUsers = state.users.filter((user: any) =>
            countryNamesToFilter.includes(user?.country)
          );
        },
        searchUsers : (state, action) => { 
            const searchText = action.payload.toLowerCase();
            state.filteredUsers = state.users.filter((user) => {
                // Check if the user's 'name' field contains the search text
                return user.first_name && user.first_name.toLowerCase().includes(searchText);
            });
        },
        removeFilter : (state) =>{
            state.filteredUsers = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(getUsers.fulfilled, (state, action)=>{
                state.isLoading = false; 
                console.log(action.payload.users)
                state.users = action.payload.users
            })
            .addCase(getUsers.rejected,(state)=>{
                state.isLoading = false;
            })
        }
})

export const {filterUser, searchUsers, removeFilter} = userSlice.actions;
export default userSlice.reducer;