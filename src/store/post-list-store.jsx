import { createContext, useReducer } from "react";

// 1️⃣ Create Context (NOT useContext)
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// 2️⃣ Default data
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Banglore",
    body: "Hii Friends I am going to Banglore for vacations",
    reactions: "2",
    userId: "user-9",
    tags: ["vacations", "trip", "Enjoying"],
  },
  {
    id: "2",
    title: "Finally Completed React",
    body: "Finally Completed react After so Many Ups and Downs",
    reactions: "3",
    userId: "user-12",
    tags: ["Happy", "Achievement", "Finally"],
  },
];

// 3️⃣ Reducer
const postListReducer = (currPostList, action) => {

  if (action.type === "DELETE_POST") {
    return currPostList.filter((post) => post.id !== action.payload.postId);
  }
 
  else if(action.type==="ADD_POST"){
    // return newPostList=[action.payload,...currPostList]
    currPostList=[action.payload,...currPostList]
  }

  return currPostList; // ✅ MUST exist
};

// 4️⃣ Provider Component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId,title,body,reactions,tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id:Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
