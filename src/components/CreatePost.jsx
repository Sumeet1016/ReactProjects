import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  
  const {addPost}=useContext(PostList)

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleonSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    
userIdElement.current.value="";
titleElement.current.value="";
bodyElement.current.value="";
reactionsElement.current.value="";
tagsElement.current.value="";
    addPost(userId,title,body,reactions,tags)
  }
  return (
    <form className="createpost" onSubmit={handleonSubmit}>
      <div className="mb-3">
        <label htmlFor="userIdElement" className="form-label">
          Enter Your UserId
        </label>
        <input
          type="text"
          className="form-control"
          ref={userIdElement}
          id="userIdElement"
          placeholder="Enter your UserId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="titleElement" className="form-label">
          Enter Your Post Title
        </label>
        <input
          type="text"
          className="form-control"
          ref={titleElement}
          id="titleElement"
          placeholder="How Are You Feeling Today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="bodyElement" className="form-label">
          Enter Your Content for the Post
        </label>
        <textarea
          className="form-control"
          id="bodyElement"
          ref={bodyElement}
          rows="3"
          placeholder="Let Us Know More about Your Day..."
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="reactionsElement" className="form-label">
          Enter Your Reaction
        </label>
        <input
          className="form-control"
          id="reactionsElement"
          ref={reactionsElement}
          placeholder="Let Us Know More about Your Reaction To it..."
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="tagsElement" className="form-label">
          Enter Your HashTags
        </label>
        <input
          className="form-control"
          id="tagsElement"
          ref={tagsElement}
          placeholder="Let Us Know More about Your Hashtags..."
        ></input>
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
