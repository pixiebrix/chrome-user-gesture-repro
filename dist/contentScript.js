// mousedown is used so the message is sent before the click
// If addEventListener("click", func, true) is used, the bug doesn't happen
document.addEventListener("mousedown", () => {
  console.log("doc mousedown")
  chrome.runtime.sendMessage({ command: "repro" });
});

// If this is removed, everything works
chrome.runtime.onMessage.addListener((req) => {
  console.log("onMessage", req);
});

var button = document.createElement("button");

button.innerText = "This is the inserted button, click on me!";
button["id"] = "inserted";
button["data-name"] = "name1";
button.onclick = async function () {
  console.log("button click")
  const response = await chrome.runtime.sendMessage({ command: "open" });
  // do something with response here, not outside the function
  console.log(response);
};

document.body.prepend(button);
