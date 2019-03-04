var fingerprintReport = function() {
  var d1 = new Date();
  Fingerprint2.get(function(components) {
    var murmur = Fingerprint2.x64hash128(
      components
        .map(function(pair) {
          return pair.value;
        })
        .join(),
      31
    );
    var d2 = new Date();
    var time = d2 - d1;
    document.querySelector("#time").textContent = time;
    document.querySelector("#value").textContent = murmur;
    var details = "";
    for (var index in components) {
      var obj = components[index];
      var line = obj.key + " = " + String(obj.value).substr(0, 100);
    }
  });
};

document.getElementById("btn").addEventListener("click", () => {
  setTimeout(() => {
    fingerprintReport();
  }, 500);
});
