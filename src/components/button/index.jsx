import { useState } from "react";

function Button(props) {
  const [visiblity, setVisibility] = useState(false);

  function changeVisibility() {
    setVisibility((prevVisibility) => {
      const newVisibility = !prevVisibility;

      let ele = document.getElementById("password");
      ele.setAttribute("type", newVisibility ? "text" : "password");
      ele.setAttribute("class", newVisibility ? "text" : "pass");

      return newVisibility;
    });
  }

  return <button className={props.className}>{props.buttonText}</button>;
}

export default Button;
