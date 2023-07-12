import { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const Font = Quill.import("attributors/style/font");
Font.whitelist = ["Arial", "David"];
Quill.register(Font, true);

let modules = {
  toolbar: [
    [{ header: [1, false] }],
    [{ font: ["David", "Arial"] }],
    ["bold", "italic", "underline"],
  ],
};
let formats = ["font", "header", "bold", "italic", "underline"];

function TextEditor() {
  const [value, setValue] = useState("");

  return (
    <>
      <h3>הכנס טקסט</h3>
      <ReactQuill
        modules={modules}
        formats={formats}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </>
  );
}

export default TextEditor;
