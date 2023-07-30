import "./nav-bar.css";
import Download from "./download";

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='app-title'>JSNoteBook</div>
      <Download />
    </div>
  );
};

export default NavBar;
