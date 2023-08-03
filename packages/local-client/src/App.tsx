import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";
import NavBar from "./components/nav-bar";
import Help from "./components/help";

const App = () => {
  const [showHelpPage, setShowHelpPage] = useState<boolean>(false);

  const changePage = (showPage: boolean) => {
    setShowHelpPage(showPage);
  };
  return (
    <Provider store={store}>
      <div>
        <NavBar onChangePage={changePage} />
        {showHelpPage ? <Help onChangePage={changePage} /> : <CellList />}
      </div>
    </Provider>
  );
};

export default App;
