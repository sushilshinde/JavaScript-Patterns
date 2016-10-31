/*
    Shallow extend(inheritance)
*/
function extend(child, parent) {
    for (var prop in parent) {
        child[prop] = parent[prop];
    }
}

/*
    Wrapper
*/
function d(id) {
    return document.getElementById(id);
}

/**
    Utility for creating DOM el
    Builder pattern
*/
function El(tag) {
    this.el = document.createElement(tag);
    this;
}

El.prototype.addAttrib = function (key, value) {
    this.el[key] = value;
    return this;
}
