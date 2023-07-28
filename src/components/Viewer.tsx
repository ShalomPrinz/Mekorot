import { useDafContext } from "../contexts";
import Daf from "./Daf";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function exportPdf() {
  html2canvas(document.getElementById("daf")!).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    var width = pdf.internal.pageSize.getWidth();
    var height = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("download.pdf");
  });
}

function Viewer() {
  const { mekorot } = useDafContext();

  return (
    <>
      <Daf mekorot={mekorot} />
      <button onClick={exportPdf}>Export to PDF</button>
    </>
  );
}

export default Viewer;
