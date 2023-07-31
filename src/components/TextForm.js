import React, { useState } from "react";

export default function TextForm({ mode, heading, showAlert }) {
  const [text, setText] = useState(" ");
  const [toggle, setToggle] = useState(false);

  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    setText(text.toUpperCase());
    showAlert("converted to uppercase", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked: " + text);
    setText(text.toLowerCase());
    showAlert("converted to lowercase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("Onchange was clicked!");
    setText(event.target.value);
  };
  const handleFontChange = () => {
    setToggle((p) => !p);
    showAlert("Fonts changed to Italics", "success");
  };
  const clearText = () => {
    setText(" ");
    showAlert("Text cleared ", "success");
  };
  const copyText = () => {
    // Get the text field
    var copyText = document.getElementById("myBox");

    // Select the text field
    copyText.select();

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    showAlert("Copied to clipboard", "success");
  };
  const removeExtraspace = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    showAlert("Extra space removed", "success");
  };

  const classChange = toggle ? "form-control fst-italic" : "form-control";
  return (
    <>
      <div
        className="container"
        style={{
          color: mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            // for changing the fonts to italic changes in class
            className={classChange}
            value={text}
            style={{
              backgroundColor: mode === "dark" ? "grey" : "white",
              color: mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowecase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleFontChange}>
          Convert to Italic
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={removeExtraspace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container mb-3"
        style={{
          color: mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter(function (n) {
              return n !== "";
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
