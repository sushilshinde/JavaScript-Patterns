function MathCommand(run, undo, value) {
    this.run = run;
    this.undoCommand = undo;
    this.value = value;
}

function Add(value) {
    return new MathCommand(MathUtil.add, MathUtil.sub, value)
}

function Sub(value) {
    return new MathCommand(MathUtil.sub, MathUtil.add, value)
}
