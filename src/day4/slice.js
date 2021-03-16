import { createSlice } from "@reduxjs/toolkit";
import Users from "../day1/components/Users";

const userSlice = createSlice({
    name: Users,
    initialState: [],
    reducers: {
        updateName: (state, action) => {
            const { id, name } = action.payload;
            return state.map((user) => {
                if(user.id === id) {
                    return {
                        ...user,
                        name
                    }
                }
                return user
            })
        },
        updateCount: (state, action) => {
            const { id } = action.payload;
            return state.map((user) => {
                if(user.id === id) {
                    return {
                        ...user,
                        count: user.count + 1
                    }
                }
                return user
            })
        },
        addNewUser: (state) => {
            const newUser = {
                count: 0,
                name: '',
                id: state.length + 1
            }
            return [...state, newUser]
        }
    }
});

const {
    reducer,
    actions
} = userSlice;

export {
    reducer,
    actions
}
