if (typeof w == "undefined") {
  w = new Worker("worker.js");
}

//get data from worker file and show in the html
w.onmessage = function (event) {
  //document.getElementById("message").innerHTML = event.data;
  document
    .getElementById("message")
    .insertAdjacentHTML("afterbegin", "<p>" + event.data + "</p>");
};

setTimeout(() => {
  w.terminate();
}, 20000);

//you can re-use the webworked by just set w = undefined;
