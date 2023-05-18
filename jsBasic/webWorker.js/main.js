if (typeof w == "undefined") {
  w = new Worker("worker.js");
}

w.onmessage = function (event) {
  //document.getElementById("message").innerHTML = event.data;
  document
    .getElementById("message")
    .insertAdjacentHTML("afterbegin", "<p>" + event.data + "</p>");
};

setTimeout(() => {
  w.terminate();
}, 20000);
