console.clear();

function Promise() {
  
  var x = "Inital Value";
  
  console.log(x)  
  
  return {
    then: function (fn) {
      x = "In then"
      console.log(x)
      fn.call();
    }
  }
}

new Promise().then(function(){
  console.log('in then callabck')
});
