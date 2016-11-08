function Calculator() {

    var currentValue = 0,
        cache = [];

    return {
        execute: function (command) {
            currentValue = command.run(currentValue, command.value);
            cache.push(command)
        },
        undo: function () {
            var command = cache.pop();
            command.undo(currentValue, command.value)
        },
        getValue: function () {
            return currentValue;
        }
    }
}
