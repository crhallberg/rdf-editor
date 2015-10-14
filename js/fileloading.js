function load(file, bar) {
  var p = new Promise(
    function(resolve, reject) {
      $.getJSON(file, function(json) {
        resolve(json);
        bar.value = bar.value + 1;
      });
    }
  );
  return p;
}
function loadAll(files) {
  var bar = document.getElementById('loading');
  bar.value = 0;
  bar.max = files.length;
  var promises = [];
  for(var i=0; i<files.length; i++) {
    promises.push(load(files[i], bar));
  }
  return Promise.all(promises);
}