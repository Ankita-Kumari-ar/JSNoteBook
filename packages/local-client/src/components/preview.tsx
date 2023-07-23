import './preview.css';
import { useEffect, useRef } from 'react';

interface PreviewProps {
  code: string;
  bundlingError: string;
}

const html = `
  <html>
    <head></head>
    <style>html{background:white};</style>
    <body>
      <div id ="root"></div>
      <script>
        const handleError = (err) => {
          const root = document.querySelector("#root");
          root.innerHTML = "<div style='color: red;'> <h4>Runtime Error</h4>" + err + "</div>";
          // throw new Error(err);
          console.error(err);
        };

        window.addEventListener("error", (event)=>{
          event.preventDefault();
          handleError(event.error);
        })

        window.addEventListener("message", (event)=>{
          try{
            eval(event.data);  
          } catch(err){
            handleError(err);
          }
        }, false);
      </script>
    </body>
  </html>
`;

const Preview: React.FC<PreviewProps> = ({ code, bundlingError }) => {
  // console.log('inside Preview');
  const iframe = useRef<any>();

  useEffect(() => {
    // console.log('inside useEffect');
    iframe.current.srcdoc = html;

    const timer = setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [code]);

  // console.log('bundlin', bundlingError);

  return (
    <div className="preview-wrapper">
      <iframe
        title="code preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {bundlingError && <div className="preview-error">{bundlingError}</div>}
    </div>
  );
};

export default Preview;
