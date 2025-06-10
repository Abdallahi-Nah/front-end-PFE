import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import Switch from "@mui/material/Switch";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";
import "./Navbar.scss";


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          <div className="search">
            <input type="text" name="" id="" placeholder="search" />
            <SearchIcon />
          </div>
          <div className="items">
            <div className="item">
              <LanguageIcon className="icon" />
              <span>Français</span>
            </div>
            <div className="item">
              <FullscreenIcon className="icon" />
            </div>
            <div className="item">
              <NotificationsActiveOutlinedIcon className="icon" />
              <div className="counter">3</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineIcon className="icon" />
              <div className="counter">5</div>
            </div>
            <div className="item">
              <ListIcon className="icon" />
            </div>
            <div className="item">
              <img src="/images/teaher-1.jpg" alt="" className={"profileImg"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
