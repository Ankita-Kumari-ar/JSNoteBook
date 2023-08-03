import "./help.css";
import ReactCodeImg from "../images/react-code.png";
import ShowImg from "../images/show.png";

interface HelpProps {
  onChangePage: (showPage: boolean) => void;
}

const Help: React.FC<HelpProps> = ({ onChangePage }) => {
  return (
    <div className='help-page'>
      <div className='help-page-content'>
        <header className='help-page-heading'>
          Welcome to the JSNoteBook Tour
        </header>
        <section className='introduction'>
          Your one-stop interactive coding environment. Write, execute, and
          document JavaScript code effortlessly in real-time with Markdown-based
          documentation
        </section>
        <section className='getting-started'>
          <p className='sub-heading'>Getting Started</p>
          <p>
            Click on{" "}
            <button className='button is-rounded is-primary is-small'>
              <span className='icon is-small'>
                <i className='fas fa-plus' />
              </span>
              <span>Text</span>
            </button>{" "}
            to add text cell and{" "}
            <button className='button is-rounded is-primary is-small'>
              <span className='icon is-small'>
                <i className='fas fa-plus' />
              </span>
              <span>Code</span>
            </button>{" "}
            to add a cell text
          </p>
        </section>
        <section className='text-cell'>
          <p className='sub-heading'>Edit Text Cells</p>
          <p>Click on text cell to modify and update their content</p>
        </section>
        <section className='code-execution'>
          <p className='sub-heading'>Code Execution</p>
          <p>
            Code cell features a fully-featured code editor with live execution.
          </p>
          <ul>
            <li className='list-code'>
              Write React Code and use html element with id "root" to access the
              preview window
              <img className='code-img' src={ReactCodeImg} alt='react code' />
            </li>
            <li className='list-code'>
              show() function built into the environment, allows to show any
              jsx, string, numbers in the preview window.
              <img className='code-img' src={ShowImg} alt='react code' />
            </li>
          </ul>
        </section>
        <section className='saving-exporting'>
          <p className='sub-heading'>Saving and Exporting file</p>
          <p>
            <ul>
              <li>
                Changes automatically saved to the opened file "fileName.js" in
                JSON format, when run the command{" "}
                <span style={{ backgroundColor: "black" }}>
                  " npx js-cli-notebook serve fileName.js "
                </span>{" "}
                in JSON format.
                <p>
                  Click on Download button to download the file in runnable
                  javascript format.
                </p>
              </li>
              <li></li>
            </ul>
          </p>
        </section>
      </div>
      <button
        className='back-to-note-book button is-rounded is-primary'
        onClick={() => onChangePage(false)}
      >
        Back To NoteBook
      </button>
    </div>
  );
};

export default Help;
