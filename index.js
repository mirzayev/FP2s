
document.getElementById("btn").addEventListener("click", () => {
  setTimeout(() => {
      new Fingerprint2().get(function(result, components)
    {
        
        document.querySelector("#value").textContent = result;
        console.log("fph "+result)
        // console.log(components)

    });
  }, 500);
});
