export const MergeStepsIllustration = (steps) => {
  return steps.steps.map((step) => {
    return (
      <>
        <main>
          <section className="step">
            <article className="two-col-grid">
              <div className="two-row-grid">
                <div className="values">
                  {step.left.map((leftArrayItem, index) => {
                    return (
                      <>
                        <span
                          className={
                            step.leftIndex === index
                              ? "merge-array-item active-array-item blink"
                              : "merge-array-item inactive-array-item"
                          }
                        >
                          {index < step.leftIndex ? "" : leftArrayItem}
                        </span>
                      </>
                    );
                  })}
                </div>
                <div className="indices">
                  {step.left.map((left, index) => {
                    return (
                      <>
                        <span>{index}</span>
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="two-row-grid">
                <div className="values">
                  {step.right.map((rightArrayItem, index) => {
                    return (
                      <>
                        <span
                          className={
                            step.rightIndex === index
                              ? "merge-array-item active-array-item blink"
                              : "merge-array-item inactive-array-item"
                          }
                        >
                          {index < step.rightIndex ? "" : rightArrayItem}
                        </span>
                      </>
                    );
                  })}
                </div>
                <div className="indices">
                  {step.right.map((rightArrayItem, index) => {
                    return (
                      <>
                        <span>{index}</span>
                      </>
                    );
                  })}
                </div>
              </div>
            </article>
            {step.leftIndex < step.left.length &&
              step.rightIndex < step.right.length && (
                <article className="condition">
                  <span
                    className={
                      "left " +
                      (step.left[step.leftIndex] <= step.right[step.rightIndex]
                        ? "blink"
                        : "")
                    }
                  >
                    {step.left[step.leftIndex]}
                  </span>
                  <span>{" <= "}</span>
                  <span
                    className={
                      "right " +
                      (step.right[step.rightIndex] < step.left[step.leftIndex]
                        ? "blink"
                        : "")
                    }
                  >
                    {step.right[step.rightIndex]}
                  </span>
                  <span>?</span>
                  <span className="array-copy-info-text">
                    {step.left[step.leftIndex] <= step.right[step.rightIndex]
                      ? "Yes, copy " + step.left[step.leftIndex] + " over"
                      : "No, copy " + step.right[step.rightIndex] + " over"}
                  </span>
                </article>
              )}
            {(step.leftIndex >= step.left.length ||
              step.rightIndex >= step.right.length) && (
              <article className="condition">
                Exhausted the{" "}
                {step.leftIndex >= step.left.length ? "left" : "right"} array
                elements. Copy over the remaining{" "}
                {step.leftIndex >= step.left.length ? "right" : "left"} array
                elements
              </article>
            )}
            <article className="result">
              {step.aux.map((auxArrayItem, index) => {
                return (
                  <span
                    className={
                      !step.aux[index + 1] && auxArrayItem ? "blink" : ""
                    }
                  >
                    {auxArrayItem}
                  </span>
                );
              })}
            </article>
          </section>
          <hr />
        </main>
      </>
    );
  });
};
