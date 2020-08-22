import { AppStateType } from "../root.reducer";
import { IPost } from "../../models/Post";

export const getPosts = (state: AppStateType): IPost[] => {
  return state.post.posts;
};
