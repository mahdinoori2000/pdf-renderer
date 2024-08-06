import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [showText, setShowText] = useState(false);
  const handleShowText = () => {
    setShowText(true);
  };
  const handleHideText = () => {
    setShowText(false);
  };
  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <>
      <div>
        <ReactQuill
          value={editorHtml}
          onChange={handleChange}
          theme="snow"
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          bounds={".app"}
          placeholder="Write something..."
        />

        {showText && <div dangerouslySetInnerHTML={{ __html: editorHtml }} />}
        <textarea
          disabled
          value={editorHtml}
          style={{ width: "100%", height: "200px", marginTop: "20px" }}
        />
      </div>

      <div>
        <button onClick={handleShowText} type="button">
          Show the text
        </button>
        <button onClick={handleHideText} type="button">
          Clear the text
        </button>
      </div>
    </>
  );
};

TextEditor.modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default TextEditor;
