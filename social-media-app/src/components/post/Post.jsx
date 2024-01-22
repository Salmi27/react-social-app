import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./post.scss";
import { useState } from "react";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleComment = () => {
    setCommentOpen(!commentOpen);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div>
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <span>{post.desc}</span>
          {post.img && <img src={post.img} alt="" />}
        </div>
        <div className="info">
          <div className="like">
            <button onClick={toggleLike}>
              {liked ? (
                <FavoriteOutlinedIcon style={{ fontSize: "20px" }} />
              ) : (
                <FavoriteBorderOutlinedIcon style={{ fontSize: "20px" }} />
              )}
            </button>
            <span>12 Likes</span>
          </div>
          <div className="comment" onClick={toggleComment}>
            <TextsmsOutlinedIcon style={{ fontSize: "20px" }} />
            <span>7 comments</span>
          </div>
          <div className="share">
            <ShareOutlinedIcon style={{ fontSize: "20px" }} />
            <span>Share</span>
          </div>
        </div>

        {commentOpen && <Comments/>}
      </div>
    </div>
  );
};

export default Post;
