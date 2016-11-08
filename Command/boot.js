App.onReady(function () {
    var ctn = document.body,
        tag = 'script';

    //load config
    new El(tag).
    addAttrib('type', 'text/javascript').
    addAttrib('src', 'app.json').
    addAttrib('onload', onload).
    appendTo(ctn);

    function onload() {
        var ext = App.config.env === 'production' ? '.min.js' : '.js';

        //load dependencies
        App.config.dependecies.forEach(function (src) {
            new El(tag).addAttrib('src', src + ext).appendTo(ctn);
        })

        //load app
        new El(tag).addAttrib('src', App.config.app + ext).appendTo(ctn);
    }
});
