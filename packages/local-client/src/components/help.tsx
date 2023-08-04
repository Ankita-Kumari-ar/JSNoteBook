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
          JSNoteBook - Your Interactive Coding Environment
        </header>
        <section className='introduction'>
          Welcome to JSNoteBook, your one-stop interactive coding environment
          for JavaScript. With JSNoteBook, you can effortlessly write, execute,
          and document JavaScript code in real-time with Markdown-based
          documentation.
        </section>
        <section className='getting-started'>
          <p className='sub-heading'>Getting Started:</p>
          <p>
            <ul>
              <li className='list-code'>
                {""}Click on{" "}
                <button
                  className='button is-rounded is-primary is-small '
                  disabled
                >
                  <span className='icon is-small'>
                    <i className='fas fa-plus' />
                  </span>
                  <span>Text</span>
                </button>{" "}
                to add text cell
              </li>

              <li className='list-code'>
                {""}Click on{" "}
                <button
                  className='button is-rounded is-primary is-small '
                  disabled
                >
                  <span className='icon is-small'>
                    <i className='fas fa-plus' />
                  </span>
                  <span>Code</span>
                </button>{" "}
                to add a cell text
              </li>
            </ul>
          </p>
        </section>
        <section className='text-cell'>
          <p className='sub-heading'>Edit Text Cells:</p>
          <p>
            To modify and update the content in text cells, simply click on the
            text cell and start editing.
          </p>
        </section>
        <section className='code-execution'>
          <p className='sub-heading'>Code Execution:</p>
          <p>
            JSNoteBook's code cell features a fully-featured code editor with
            live execution. You can write your JavaScript code here and see the
            results in real-time.
          </p>
          <ul>
            <li className='list-code'>
              You can access and manipulate the preview DOM element with the id
              "root" in JSNoteBook. Changes made to this element will be
              reflected in the preview area, enabling effective code
              visualization and testing.
            </li>
            <li className='list-code'>
              Example: To use React and render HTML elements, use the code
              below:
              <img className='code-img' src={ReactCodeImg} alt='react code' />
            </li>
            <li className='list-code'>
              The built-in " show() " function in JSNoteBook enables you to
              display JSX, strings, and numbers directly in the preview window.
              <img className='code-img' src={ShowImg} alt='react code' />
            </li>
          </ul>
        </section>
        <section className='saving-exporting'>
          <p className='sub-heading'>Saving and Exporting file:</p>
          <p>
            <ul>
              <li>
                In JSNoteBook, your code is effortlessly and automatically saved
                in the opened file (default "notebook.js"), ensuring a smooth
                and stress-free coding experience.
              </li>
            </ul>
          </p>
        </section>
        <section className='download'>
          <p className='sub-heading'>Download:</p>
          <p>
            When you're done with your code, click on the "Download" button to
            download your file in a runnable JavaScript format.
          </p>
        </section>
        <section className='More Info'>
          <p className='sub-heading'>More Info:</p>
          <a href='#' target='_blank'>
            Github
          </a>
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
