function Subject() {
    this.observers = [];
}

Subject.prototype.add = function (observer) {
    this.observers.push(observer);
}

Subject.prototype.notify = function (context) {
    for (var o in this.observers) {
        this.observers[o].update(context);
    }
}
