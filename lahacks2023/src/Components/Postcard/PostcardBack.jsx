import React from "react";
import { useState } from "react";
import "./PostcardBack.css";

function PostcardBack(props) {
  const [name, setMessage] = useState("");

  return (
    <div className="postcard-wrapper">
      <form className="postcard-back-text">
        <textarea
          className="postcard-back-text-field"
          maxlength="600"
          type="text"
          id="postcard-back-text"
          value={name}
          onChange={(e) => {
            setMessage(e.target.value);
            props.setMessageText(e.target.value);
          }}
          placeholder="Write your message here!"
        />
      </form>
    </div>
  );
}

export default PostcardBack;
