import "./comments.scss";

const Comments = () => {
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="comments">
      <form className="myComment">
        <img
          src="https://images.pexels.com/photos/14440667/pexels-photo-14440667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <input type="text" placeholder="Write something..."/>
        <button>Reply</button>
      </form>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="comment">
            <div>
              <img src={comment.profilePicture} alt="" />
              <div className="section">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
            </div>

            <span>1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
