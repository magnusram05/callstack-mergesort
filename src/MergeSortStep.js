import React from "react";
import { MergeStepsIllustration } from "./MergeStepsIllustration";

export const MergeSortStep = (props) => {
  const colorMap = new Map();
  colorMap.set(0, "green");
  colorMap.set(1, "#fcba03");
  colorMap.set(2, "#0380fc");
  colorMap.set(3, "#fc4103");
  colorMap.set(4, "#8803fc");
  colorMap.set(5, "#a503fc");
  colorMap.set(6, "#a9fc03");
  colorMap.set(7, "#03fcc2");
  colorMap.set(8, "#fc7703");

  return props.step.map((step, index) => {
    const marginLeft = step.step * 50;
    return (
      <div key={index} className="call-stack-step-container">
        <article
          id={step.step + "-" + step.op}
          className="merge-sort-step"
          style={{
            border: "1px solid " + colorMap.get(step.step),
            marginLeft: marginLeft + "px",
            boxShadow: "-2px 2px " + colorMap.get(step.step),
          }}
        >
          <header className="merge-sort-step-header">
            <span
              className="step-label"
              style={{ background: colorMap.get(step.step) }}
            >
              Call:{step.step}
            </span>

            <span>{step.displayText}</span>
          </header>
          <div style={{ padding: "10px", margin: "5px" }} className="step-data">
            {step.data.map((item, index) => {
              if (step.op === "Merge") {
                return item.map((item1) => (
                  <span>
                    <span>
                      {item1.map((item2) => {
                        return (
                          <span className="retro-black-shadow">{item2}</span>
                        );
                      })}
                    </span>
                    <span>
                      {index === 0 ? (
                        <span style={{ margin: "5px" }}> + </span>
                      ) : index === 1 ? (
                        <span style={{ margin: "5px" }}> = </span>
                      ) : (
                        <span style={{ margin: "5px" }}> </span>
                      )}
                    </span>
                  </span>
                ));
              } else if (step.op !== "Leaf") {
                return item.map((item1) => (
                  <span className="retro-black-shadow">{item1}</span>
                ));
              } else {
                return item.map((item1) => (
                  <span className="retro-black-shadow">
                    return {step.data[0]}
                  </span>
                ));
              }
            })}
          </div>
          {step.op === "Merge" && (
            <MergeStepsIllustration steps={step.mergeStepData} />
          )}
        </article>
      </div>
    );
  });
};
