import { useState } from "react";
import eyeIcon from "../../assets/eye_icon.svg";


function Input(props) {

  const [visiblity, setVisibility] = useState(false);

  function changeVisibility() {

    setVisibility(prevVisibility => {
      const newVisibility = !prevVisibility;

      let ele = document.getElementById("password");
      ele.setAttribute("type", newVisibility ? 'text' : 'password');
      ele.setAttribute("class", newVisibility ? 'text' : 'pass');
      
      return newVisibility;
    });
  }

  return props.inputType === "password" ? (
    <label for={props.fieldName} className="text-inputs">
      {props.labelText}
      <div className="password">
        <input
          type={props.inputType}
          id="password"
          name={props.fieldName}
        ></input>
        <img src={props.eyeIcon} className="eye-icon" onClick={changeVisibility}></img>
      </div>
    </label>
  ) : props.inputType === "checkbox" ? (
    <label for={props.fieldName} className={props.fieldName}>
      <input
        type={props.inputType}
        id={props.fieldName}
        class={props.fieldName + "-checkbox"}
      ></input>
      {props.labelText}
    </label>
  ) : (
    <label for={props.fieldName} className="text-inputs">
      {props.labelText}
      <input
        type={props.inputType}
        id={props.fieldName}
        name={props.fieldName}
      ></input>
    </label>
  );
}

export default Input;
