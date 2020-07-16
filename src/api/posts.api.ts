import instance from "./index";
import { IPost } from "../types/Post";

const postsApi = {
  getPosts() {
    return instance.get<Array<IPost>>(`posts`).then((response) => {
      return response.data;
    });
  },

  getPost(postId: number) {
    return instance.get<IPost>(`posts/${postId}`).then((response) => {
      return response.data;
    });
  },

  createPost(post: IPost) {
    return instance.post<IPost>(`posts`, post).then((response) => {
      return response.data;
    });
  },

  savePost(post: IPost) {
    return instance.patch<IPost>(`posts/${post.id}`, post).then((response) => {
      return response.data;
    });
  },

  removePost(postId: number) {
    return instance.delete<IPost>(`posts/${postId}`).then((response) => {
      return response.data;
    });
  },
};

export default postsApi;
