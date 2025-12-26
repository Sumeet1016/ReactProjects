import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const {deletePost} =useContext(PostList)
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={()=>deletePost(post.id)}
        >
          <MdDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span class="badge text-bg-primary hastag">{tag}</span>
        ))}
        <div class="alert alert-success reactions" role="alert">
          This Post has Been reacted By {post.reactions} People
        </div>
      </div>
    </div>
  );
};

export default Post;
