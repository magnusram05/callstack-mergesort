import React from "react";
import { useState, useEffect } from "react";
import { MergeSortStep } from "./MergeSortStep";
import { toggleCode } from "./ToggleCode";

export const MergeSort = () => {
  const [algoSteps, setAlgoSteps] = useState([]);
  const [unsortedArrStr, setUnsortedArrStr] = useState("9,2,8");
  const [unsortedArr, setUnsortedArray] = useState([]);
  const [sortedArr, setSortedArr] = useState([]);
  const [mergeSteps, setMergeSteps] = useState([]);
  const [shouldReset, setShouldReset] = useState(0);
  let allSteps = [];

  useEffect(() => {
    mainSort();
    document.getElementById("unsortedArrayElements").focus();
    toggleCode();
  }, []);

  const updateUnsortedArrStr = () => {
    setUnsortedArrStr(document.getElementById("unsortedArrayElements").value);
  };

  const mainSort = (e) => {
    if (
      document
        .getElementById("unsortedArrayElements")
        .value.replaceAll("s", "")
        .trim().length > 19
    ) {
      alert("Illustration is available only for 10 numbers separated by comma");
      return;
    }
    let temp = [];
    document
      .getElementById("unsortedArrayElements")
      .value.split(",")
      .forEach((item) => {
        if (item !== "") temp.push(Number.parseInt(item));
      });

    if (temp.length <= 0) return;

    setUnsortedArray(temp);
    const sortedArray = sort(temp, 0, temp.length - 1, 0);
    setSortedArr(sortedArray);
    setAlgoSteps(allSteps);
    setMergeSteps(mergeSteps);
    setShouldReset(shouldReset + 1);
  };

  const reset = (e) => {
    setAlgoSteps([]);
    setUnsortedArray([]);
    setSortedArr([]);
    setMergeSteps([]);
    document.getElementById("unsortedArrayElements").focus();
  };

  const sort = (arr, lo, hi, step) => {
    const newStep = step + 1;
    const mid = Math.floor((hi - lo) / 2) + lo;
    if (lo === hi) {
      const divide1 = {
        step: step,
        displayText: "Reached the leaf node",
        op: "Leaf",
        data: [[arr[lo]]],
      };
      allSteps.push(divide1);
      return [arr[lo]];
    }
    const divide1 = {
      step: step,
      op: "Divide",
      displayText:
        "divideAndMerge([" + arr + "], " + lo + ", " + (mid + 1) + ")",
      data: [arr.slice(lo, mid + 1)],
    };
    allSteps.push(divide1);
    const left = sort(arr, lo, mid, newStep);
    const divide2 = {
      step: step,
      op: "Divide",
      displayText:
        "divideAndMerge([" + arr + "], " + (mid + 1) + ", " + (hi + 1) + ")",
      data: [arr.slice(mid + 1, hi + 1)],
    };
    allSteps.push(divide2);
    const right = sort(arr, mid + 1, hi, newStep);

    let { sortedArray, steps } = merge(left, right);
    mergeSteps.push(steps);

    const mergeStep = {
      step: step,
      op: "Merge",
      displayText: "merge([" + left + "], [" + right + "])",
      data: [[left], [right], [sortedArray]],
      mergeStepData: steps,
    };
    allSteps.push(mergeStep);
    return sortedArray;
  };

  const merge = (left, right) => {
    let aux = new Array(left.length + right.length);
    let k = 0;
    let steps = [];
    const step = (i, j, k, currAux) => {
      return {
        left: left,
        right: right,
        aux: currAux,
        leftIndex: i,
        rightIndex: j,
        auxIndex: k,
      };
    };
    let oldI = 0;
    let oldJ = 0;
    let oldK = 0;
    for (let i = 0, j = 0; k < left.length + right.length; k = k + 1) {
      oldI = i;
      oldJ = j;
      oldK = k;
      if (i >= left.length) {
        aux[k] = right[j];
        j++;
      } else if (j >= right.length) {
        aux[k] = left[i];
        i++;
      } else if (left[i] > right[j]) {
        aux[k] = right[j];
        j++;
      } else if (left[i] <= right[j]) {
        aux[k] = left[i];
        i++;
      }
      steps.push(step(oldI, oldJ, oldK, [...aux]));
    }
    console.log("MergeSteps : " + JSON.stringify(steps));
    return { sortedArray: aux, steps: steps };
  };

  return (
    <>
      <header className="merge-sort-callstack-header">
        <input
          type="text"
          name="unsortedArrayElements"
          id="unsortedArrayElements"
          value={unsortedArrStr}
          onChange={updateUnsortedArrStr}
        />
        <input
          type="button"
          name="mergeSort"
          id="mergeSort"
          value="Merge Sort"
          onClick={mainSort}
        />
        <input
          type="button"
          name="reset"
          id="reset"
          value="Reset"
          onClick={reset}
        />
      </header>

      <section className="call-stack" id="call-stack">
        {algoSteps.length > 0 ? <MergeSortStep step={algoSteps} /> : ""}
      </section>
    </>
  );
};
