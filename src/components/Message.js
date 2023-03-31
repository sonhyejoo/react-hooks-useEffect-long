import { useEffect, useState } from "react";

function Message({ size, featherCount }) {
  const [sizeClass, setSizeClass] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (featherCount <= 0) setMessage("Oh my! Your bird is naked!");
    else if (featherCount >= 10) {
      setMessage("Full turkey!");
    } else {
      setMessage("Coming along...");
    }
  }, [featherCount]);

  useEffect(() => {
    console.log("Message", size);
    let cname = "";
    if (size === "s") cname = "small";
    else if (size === "m") cname = "medium";
    else if (size === "l") cname = "large";
    else if (size === "xl") cname = "xlarge";

    setSizeClass(cname);
  }, [size]);
  return <div className={`message ${sizeClass}`}>{message}</div>;
}

export default Message;
