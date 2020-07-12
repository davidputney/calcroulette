
const helpers = {
    foo: (val) => val,
    handleEqlButtonState: (runningVal, operator) => operator && runningVal,
    doMath: (val1, val2, op) => op === "add"? (val1+val2): op === "subtract"? (val1-val2): op === "divide"? (val1/val2): op === "multiply"? (val1*val2): "error",
    handleLeadZero: (v, r) =>  v === 0 && r.length === 0,
    rando: (val) => Math.floor(Math.random() * val) + 1,
}

 export { helpers }