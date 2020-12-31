import React from "react";

export const toggleCode = (e) => {
  let containerLeft = document.getElementById("container-left");
  let containerRight = document.getElementById("container-right");
  if (
    containerLeft &&
    "container-left container-left-expand" === containerLeft.className
  ) {
    containerLeft.className = "container-left container-left-collapse";
    containerRight.className = "container-right";
  } else {
    containerLeft.className = "container-left container-left-expand";
    containerRight.className = "container-right container-right-collapse";
  }
};

export const ToggleCode = () => {
  return (
    <button
      className="toggle-code-button"
      onClick={toggleCode}
      name="showHideCode"
      value="showHideCode"
    >
      <span>{"< "}</span>
      <span>{">"}</span>
    </button>
  );
};
