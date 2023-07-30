import "./download.css";
import { useTypedSelector } from "../hooks/use-typed-selector";

const Download: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => data[id]);
  });

  const onDownloadClick = () => {
    const comment = "//";
    let data = "";

    for (let cell of cells) {
      if (cell.content) {
        if (cell.type === "text") {
          data +=
            "\n" + comment + cell.content.replaceAll("\n", "\n" + comment);
        } else {
          data += "\n\n" + cell.content;
        }
      }
    }
    const blob = new Blob([data], { type: "text/plane" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "jsnotebook.js";
    link.href = url;
    link.click();
  };
  return (
    <div className='download-btn' onClick={onDownloadClick}>
      Download
    </div>
  );
};

export default Download;
