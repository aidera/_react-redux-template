import { put, call, takeEvery, all } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  LoadPostReturnType,
  setPosts,
} from "./post.actions";
import { LOAD_POSTS } from "./post.types";
import postsApi from "../../api/posts.api";

export function* loadPostsWorker(): SagaIterator {
  try {
    const payload = yield call(postsApi.getPosts);
    yield put(setPosts(payload));
  } catch (e) {
    yield put(setPosts([]));
  }
}

export function* loadPostWorker(action: LoadPostReturnType): SagaIterator {
  try {
    const payload = yield call(postsApi.getPost, action.payload);
    yield put(setPosts(payload));
  } catch (e) {
    yield put(setPosts([]));
  }
}

export default function* postSaga(): SagaIterator {
  yield all([takeEvery(LOAD_POSTS, loadPostsWorker)]);
}
