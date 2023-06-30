import {configureStore} from "@reduxjs/toolkit";
import AppSlice from "@/store/slices/appSlice";

const store = configureStore({
    reducer: {
        app: AppSlice,
    },
});

// Infer the `RootState` and `AppDispatch`r types from the index itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
