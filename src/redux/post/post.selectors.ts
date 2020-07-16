import { AppStateType } from "../root.reducer";

export const getPosts = (state: AppStateType) => {
  return state.post.posts;
};
