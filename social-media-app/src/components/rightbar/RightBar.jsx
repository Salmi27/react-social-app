import "./rightbar.scss";
import dp from "../../assets/register-image.jpeg";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="items">
          <span>Suggestion for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className="items">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <span>John Doe</span>
            </div>
            <p>
              <span>changed their cover picture</span> 1 min ago
            </p>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <span>John Doe</span>
            </div>
            <p>
              <span>changed their cover picture</span> 1 min ago
            </p>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <span>John Doe</span>
            </div>
            <p>
              <span>changed their cover picture</span> 1 min ago
            </p>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <span>John Doe</span>
            </div>
            <p>
              <span>changed their cover picture</span> 1 min ago
            </p>
          </div>
        </div>

        <div className="items">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={dp} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
