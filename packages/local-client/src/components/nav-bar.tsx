import "./nav-bar.css";
import Download from "./download";

interface NavBarProps {
  onChangePage: (showPage: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onChangePage }) => {
  const onHelpBtnClick = () => {
    onChangePage(true);
  };
  return (
    <div className='nav-bar'>
      <div className='app-title'>JSNoteBook</div>
      <div className='help-download-wrapper'>
        <div className='help-btn' onClick={onHelpBtnClick}>
          Help
        </div>
        <Download />
      </div>
    </div>
  );
};

export default NavBar;
