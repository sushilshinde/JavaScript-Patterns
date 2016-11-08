var App = App || {};

function El(tag) {
    this.el = document.createElement(tag);

    this.addAttrib = function (key, value) {
        this.el[key] = value;
        return this;
    }

    this.appendTo = function (ctn) {
        ctn.appendChild(this.el)
        return this;
    }

    this;
}

+ function (App) {
    var isReady = false,
        beforeReadyStack = [];

    App.onReady = function (fun, scope) {
        console.log('On ready is called for ' + fun)
        var c = function (isPolling) {
            if (isReady) {
                if (beforeReadyStack.length === 0) {
                    console.log('Executing new on ready ')
                    fun.apply(scope || App);
                } else {
                    console.log('Executing stacked on ready ')
                    beforeReadyStack.forEach(function (arr) {
                        arr[0].apply(arr[1]);
                    });
                    beforeReadyStack = [];
                }
            } else {

                if (!isPolling) {
                    console.log('Stacking callbacks for onReady as DOM is not ready')
                    beforeReadyStack.push([fun, scope]);
                } else {
                    console.log('Polling for DOM ready')
                }
                setTimeout(function () {
                    c(true);
                }, 1)
            }
        }
        c();
    }

    document.addEventListener('DOMContentLoaded', function () {
        isReady = true;
        console.log('Document is ready')
    })

}(App);
