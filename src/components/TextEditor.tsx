import { useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const font = Quill.import("attributors/style/font");
font.whitelist = ["Arial", "David"];
Quill.register(font, true);

let modules = {
  toolbar: [
    [{ header: [1, false] }],
    [{ font: ["David", "Arial"] }],
    ["bold", "italic", "underline"],
  ],
};
let formats = ["font", "header", "bold", "italic", "underline"];

interface TextEditorProps {
  initialText: string;
  onSubmit: (text: string) => void;
}

function TextEditor({ initialText, onSubmit }: TextEditorProps) {
  const quillRef = useRef<ReactQuill>(null);

  function submitText() {
    const text = quillRef?.current?.getEditor().getText();
    if (typeof text !== "undefined") {
      onSubmit(text);
    }
  }

  return (
    <>
      <ReactQuill
        defaultValue={initialText}
        formats={formats}
        modules={modules}
        ref={quillRef}
        theme="snow"
      />
      <div className="text-center">
        <button
          className="fs-4 bg-default rounded p-2 mt-4"
          onClick={submitText}
          type="submit"
        >
          סיום עריכה
        </button>
      </div>
    </>
  );
}

export default TextEditor;
