var button = document.createElement("button");

button.innerText = "This is the inserted button, click on me!";
button["id"] = "inserted";
button["data-name"] = "name1";
button.onclick = async function () {
  (async () => {
    const response = await chrome.runtime.sendMessage({ greeting: "hello" });
    // do something with response here, not outside the function

    console.log(response);
  })();
};

document.body.prepend(button);
