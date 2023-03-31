import { useEffect, useState } from "react";

function Message({ size, featherCount }) {
  const [sizeClass, setSizeClass] = useState("");
  useEffect(() => {
    console.log("Message", size);
    let cname = "";
    if (size === "s") cname = "small";
    else if (size === "m") cname = "medium";
    else if (size === "l") cname = "large";
    else if (size === "xl") cname = "xlarge";

    setSizeClass(cname);
  }, [size]);
  return (
    <div className={`message ${sizeClass}`}>(Oh my! Your bird is naked!)</div>
  );
}

export default Message;
