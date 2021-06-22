import React from "react";

const Input = (props) => {
  return (
    <div className="row">
      <div className="col-25">
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          id={props.name}
          name={props.name}
          placeholder={props.name}
          onChange={(evt) => props.set(evt.target.value)}
          value={props.value}
        />
      </div>
    </div>
  );
};

export default Input;
