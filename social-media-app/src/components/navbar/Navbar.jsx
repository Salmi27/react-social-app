import { Link } from "react-router-dom";
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import dp from "../../assets/register-image.jpeg";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="right">
        <NotificationsOutlinedIcon />
        <EmailOutlinedIcon />
        <PersonOutlineOutlinedIcon />
        <div className="user">
          <img src={dp} alt="dp" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
