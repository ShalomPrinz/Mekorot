import parse from "html-react-parser";
import DOMPurify from "dompurify";

function htmlParse(html: string) {
  return parse(DOMPurify.sanitize(html));
}

function extractText(html: string) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent ?? "";
}

export { extractText, htmlParse };
