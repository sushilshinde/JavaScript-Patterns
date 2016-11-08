App.onReady(function () {
    var calculator = new Calculator();

    calculator.execute(new Add(100));
    calculator.execute(new Add(50));

    console.log(calculator.getValue())

    calculator.undo();

    console.log(calculator.getValue())

});
