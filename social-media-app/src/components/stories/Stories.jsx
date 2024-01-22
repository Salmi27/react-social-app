import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../contexts/AuthContext";

const Stories = () => {
    const {currentUser} = useContext(AuthContext)

  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/19767555/pexels-photo-19767555/free-photo-of-sunlit-stone-building-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/15954324/pexels-photo-15954324/free-photo-of-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13067876/pexels-photo-13067876.jpeg",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/16601811/pexels-photo-16601811/free-photo-of-porcelain-cup-with-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      name: "John Doe",
      img: "https://images.pexels.com/photos/19767555/pexels-photo-19767555/free-photo-of-sunlit-stone-building-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      name: "John Doe",
      img: "https://images.pexels.com/photos/15954324/pexels-photo-15954324/free-photo-of-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 7,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13067876/pexels-photo-13067876.jpeg",
    },
    {
      id: 8,
      name: "John Doe",
      img: "https://images.pexels.com/photos/16601811/pexels-photo-16601811/free-photo-of-porcelain-cup-with-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img
          src="https://images.pexels.com/photos/14440667/pexels-photo-14440667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="story"
        />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => {
        return (
          <div key={story.id} className="story">
            <img src={story.img} alt="story" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
