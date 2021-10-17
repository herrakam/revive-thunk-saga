import * as postAPI from "../api/posts";
import { put, takeEvery, call } from "redux-saga/effects";
const GET_POSTS = "posts/GET_POSTS";
const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "posts/GET_POSTS_ERROR";

const GET_POST = "posts/GET_POST";
const GET_POST_SUCCESS = "posts/GET_POST_SUCCESS";
const GET_POST_ERROR = "posts/GET_POST_ERROR";

// export const getPosts = () => async (dispatch) => {
//   dispatch({ type: GET_POSTS });
//   try {
//     const posts = await postAPI.getPosts();
//     dispatch({
//       type: GET_POSTS_SUCCESS,
//       posts,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_POSTS_ERROR,
//       error: e,
//     });
//   }
// };

export const getPosts = () => ({
  type: GET_POSTS,
});

function* getPostsSaga() {
  try {
    const posts = yield call(postAPI.getPosts);
    yield put({
      type: GET_POSTS_SUCCESS,
      posts,
    });
  } catch (e) {
    yield put({
      type: GET_POSTS_ERROR,
      error: e,
    });
  }
}

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const post = await postAPI.getPostsById(id);
    dispatch({
      type: GET_POST_SUCCESS,
      post,
    });
  } catch (e) {
    dispatch({
      type: GET_POST_ERROR,
      error: e,
    });
  }
};

export function* postSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
}

const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
  post: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          loading: false,
          data: action.posts,
          error: null,
        },
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    case GET_POST:
      return {
        ...state,
        post: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: {
          loading: false,
          data: action.post,
          error: null,
        },
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    default:
      return state;
  }
}
