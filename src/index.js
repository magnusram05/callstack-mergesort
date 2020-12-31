import React from "react";
import ReactDOM from "react-dom";

import { MergeSortCode } from "./MergeSortCode";
import { MergeSort } from "./MergeSort";
import { ToggleCode } from "./ToggleCode";

ReactDOM.render(
  <React.StrictMode>
    <ToggleCode />
  </React.StrictMode>,
  document.getElementById("toggle-code-button")
);

ReactDOM.render(
  <React.StrictMode>
    <MergeSortCode />
  </React.StrictMode>,
  document.getElementById("container-left")
);

ReactDOM.render(
  <React.StrictMode>
    <MergeSort />
  </React.StrictMode>,
  document.getElementById("container-right")
);
