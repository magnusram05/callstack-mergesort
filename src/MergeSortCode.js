import React from "react";

export const MergeSortCode = () => {
  return (
    <>
      <pre className="code">
        <div className="code-window-controls">
          <span className="code-window-control-dot green"></span>
          <span className="code-window-control-dot amber"></span>
          <span className="code-window-control-dot red"></span>
        </div>
        <code>
          {"\n" +
            "const mergeSort = (unsortedArray) => {\n" +
            "  const loIndex = 0;\n" +
            "  const hiIndex = unsortedArray.length - 1;\n" +
            "  const sortedArray = divideAndMerge(unsortedArray, loIndex, hiIndex);\n" +
            "  return sortedArray;\n" +
            "}"}
        </code>
      </pre>
      <pre className="code">
        {" "}
        <div className="code-window-controls">
          <span className="code-window-control-dot green"></span>
          <span className="code-window-control-dot amber"></span>
          <span className="code-window-control-dot red"></span>
        </div>
        <code>
          {"\n" +
            "const divideAndMerge = (unsortedArray, loIndex, hiIndex) => {\n" +
            "  if (loIndex === hiIndex) {\n" +
            "    return [unsortedArray[loIndex]];\n" +
            "  }\n" +
            "\n" +
            "  const mid = Math.floor((hiIndex - loIndex) / 2) + loIndex;\n" +
            "\n" +
            "  const left = divideAndMerge(unsortedArray, loIndex, mid);\n" +
            "  const right = divideAndMerge(unsortedArray, mid + 1, hiIndex);\n" +
            "\n" +
            "  const sortedArray = merge(left, right);\n" +
            "  return sortedArray;\n" +
            "}; "}
        </code>
      </pre>
      <pre className="code">
        <div className="code-window-controls">
          <span className="code-window-control-dot green"></span>
          <span className="code-window-control-dot amber"></span>
          <span className="code-window-control-dot red"></span>
        </div>
        <code>
          {"\n" +
            "const merge = (left, right) => {\n" +
            "  const auxLength = left.length + right.length;\n" +
            "  const aux = new Array(auxLength);\n" +
            "\n" +
            "  for (let i = 0, j = 0, k = 0; k < auxLength; ) {\n" +
            "    if (i >= left.length) aux[k++] = right[j++]\n" +
            "    else if (j >= right.length) aux[k++] = left[i++]\n" +
            "    else if (left[i] > right[j]) aux[k++] = right[j++]\n" +
            "    else if (left[i] <= right[j]) aux[k++] = left[i++]\n" +
            "  }\n" +
            "  return aux;\n" +
            "};"}
        </code>
      </pre>
    </>
  );
};
